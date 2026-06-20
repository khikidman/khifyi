import Layout from "../components/Layout";

const ArcTerms = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold">Arc App Terms & EULA</h1>
        <p className="text-gray-500">Last updated: June 20, 2026</p>

        <p>
          These terms explain the rules for using the Arc workout and program
          tracking app. Arc is licensed under Apple's Standard End User License
          Agreement, with the Arc-specific terms below covering beta use,
          accounts, workout data, and fitness safety.
        </p>

        <p>
          Apple's Standard End User License Agreement is available at{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="text-blue-500 underline"
          >
            apple.com/legal/internet-services/itunes/dev/stdeula
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold pt-6">Agreement</h2>

        <p>
          If you download Arc from Apple's App Store or TestFlight, Apple's
          Standard End User License Agreement applies to your use of Arc unless
          Arc provides a valid custom agreement that replaces it.
        </p>

        <p>
          These Arc terms supplement Apple's Standard EULA for Arc-specific beta,
          account, workout data, and safety topics. If these terms conflict with
          Apple's Standard EULA or mandatory law, Apple's Standard EULA or
          mandatory law controls.
        </p>

        <h2 className="text-2xl font-semibold pt-8">License and Beta Use</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Arc grants you a limited, non-transferable license to use the app for
            personal workout tracking and program management on Apple-branded
            devices you own or control, subject to Apple's usage rules.
          </li>
          <li>
            Arc beta features may be incomplete, may change, may contain errors,
            and may be unavailable at times.
          </li>
          <li>
            Arc may modify, suspend, or discontinue beta features as the app
            evolves.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Accounts and Acceptable Use</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            You are responsible for your account credentials and for activity
            under your account.
          </li>
          <li>
            Do not misuse Arc, attempt to bypass security, reverse engineer
            protected portions of the app, overload the service, scrape data,
            interfere with other users, or use Arc for unlawful or harmful
            purposes.
          </li>
          <li>
            You are responsible for ensuring that your use of Arc and any
            workout choices you make are appropriate for your circumstances.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Workout Data</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            You retain ownership of the workout, program, and training
            information you enter into Arc.
          </li>
          <li>
            You grant Arc permission to store, process, display, sync, export,
            and otherwise use that information as needed to provide and improve
            the app.
          </li>
          <li>
            Privacy and deletion details are described in Arc's{" "}
            <a href="/arc/privacy" className="text-blue-500 underline">
              Privacy Policy
            </a>
            .
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Fitness and Safety</h2>

        <p>
          Arc provides workout tracking and general training guidance. Arc is not
          a medical device, medical service, physical therapy service, or
          substitute for professional medical advice.
        </p>

        <p>
          Program suggestions, targets, timers, progression cues, and training
          recommendations may not be appropriate for every person. Review Arc's{" "}
          <a href="/arc/safety" className="text-blue-500 underline">
            Medical & Safety Notice
          </a>{" "}
          before relying on workout guidance.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Third-Party Services</h2>

        <p>
          Arc uses third-party services such as Apple, Google, and Firebase for
          distribution, sign-in, authentication, and data sync. Those services
          may be governed by their own terms and privacy policies.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Availability and Termination</h2>

        <p>
          Arc may update, change, suspend, or discontinue features as the app
          evolves. Arc may suspend or terminate access if you violate these terms
          or misuse the app.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Warranty and Liability</h2>

        <p>
          Arc is provided as-is to the fullest extent permitted by law and by
          Apple's Standard EULA. To the fullest extent permitted by law, Arc is
          not liable for indirect, incidental, special, consequential, or
          punitive damages arising from your use of the app.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Contact Us</h2>

        <p>If you have any questions about these terms, contact me:</p>

        <ul className="list-disc pl-6">
          <li>
            Email:{" "}
            <a
              href="mailto:contact@khi.fyi"
              className="text-blue-500 underline"
            >
              contact@khi.fyi
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ArcTerms;
