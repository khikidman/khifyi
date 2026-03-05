import { Resend } from "resend";

export default {
  async fetch() {
    const resend = new Resend("re_euHvFnWB_E7LztgZL8vJoExLKdQKfZuas");

    const { data, error } = await resend.emails.send({
      from: "hello@example.com",
      to: "khi.kidman@gmail.com",
      subject: "Hello World",
      html: "<p>Hello from Workers</p>",
    });

    return Response.json({ data, error });
  },
};