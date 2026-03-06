import { Resend } from "resend";

export const onRequestPost = async (context: any) => {
  try {
    const { name, email, message } = await context.request.json();

    const resend = new Resend(context.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "Website <contact@yourdomain.com>",
      to: ["your@email.com"],
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
`
    });

    if (error) {
      return new Response(JSON.stringify(error), { status: 500 });
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
};