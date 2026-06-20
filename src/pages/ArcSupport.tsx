import Layout from "../components/Layout";

const ArcSupport = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold">Arc App Support</h1>
        <p className="text-gray-500">Last updated: June 20, 2026</p>

        <p>
          Need help with Arc, account access, workout data, programs, imports,
          exports, or beta feedback? The fastest path is to contact me directly
          through the website contact form or by email.
        </p>

        <div className="rounded-2xl border border-blue-300/20 bg-white/5 p-5 space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>
            Use the contact section on the home page or email me at{" "}
            <a href="mailto:contact@khi.fyi" className="text-blue-500 underline">
              contact@khi.fyi
            </a>
            .
          </p>
          <a
            href="/#contact"
            className="inline-flex rounded-full bg-blue-300 px-5 py-2 font-semibold text-black transition hover:bg-blue-200"
          >
            Open contact form
          </a>
        </div>

        <h2 className="text-2xl font-semibold pt-6">What To Include</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Your Arc account email, if the issue is account-specific.</li>
          <li>The app version and build number, if available from Settings.</li>
          <li>Your device model and iOS version.</li>
          <li>A short description of what happened and what you expected.</li>
          <li>Screenshots or screen recordings if they help explain the issue.</li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">In-App Feedback</h2>

        <p>
          Arc also includes an in-app bug report flow. If you can still access
          the app, use the feedback or bug report option from inside Arc so the
          report can include useful context like app version, device details,
          and the screen where the issue occurred.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Account and Data Requests</h2>

        <p>
          You can export workout data, clear local cache, delete workout
          history, and delete your account from Arc Settings. If you cannot
          access your account or need help with a data request, contact me at{" "}
          <a href="mailto:contact@khi.fyi" className="text-blue-500 underline">
            contact@khi.fyi
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold pt-8">Useful Links</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/arc/privacy" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/arc/terms" className="text-blue-500 underline">
              Terms & EULA
            </a>
          </li>
          <li>
            <a href="/arc/safety" className="text-blue-500 underline">
              Medical & Safety Notice
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ArcSupport;
