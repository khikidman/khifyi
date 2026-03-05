import { Resend } from "resend";

export async function onRequestPost(context: any) {
  try {
    const { request, env } = context;

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields required" }),
        { status: 400 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "khi.kidman@gmail.com",
        subject: `Portfolio Contact — ${name}`,
        html: `
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      })
    });

    if (!response.ok) {
      throw new Error("Email send failed");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || "Server error" }),
      { status: 500 }
    );
  }
}