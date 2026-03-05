import { Resend } from "resend";

export async function onRequestPost({ request, env }: any) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio <contact@yourdomain.com>",
      to: ["your@email.com"],
      subject: `Portfolio Message from ${name}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    );
  }
}