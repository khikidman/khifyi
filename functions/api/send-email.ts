import { Resend } from "resend";

export const onRequestPost = async (context: any) => {
  try {
    const data = await context.request.json();

    const resend = new Resend(context.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Portfolio <contact@khi.fyi>",
      to: "khi.kidman@gmail.com",
      subject: "New message from portfolio",
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {

    console.error("EMAIL ERROR:", err);

    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: err?.message
      }),
      { status: 500 }
    );
  }
};