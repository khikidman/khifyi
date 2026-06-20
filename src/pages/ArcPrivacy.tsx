import Layout from "../components/Layout";

const ArcPrivacy = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold">Arc App Privacy Policy</h1>
        <p className="text-gray-500">Last updated: June 20, 2026</p>

        <p>
          This Privacy Policy describes how Arc handles information when you use
          the Arc workout and program tracking app.
        </p>

        <p>
          For training risk and medical-disclaimer information, see the{" "}
          <a href="/arc/safety" className="text-blue-500 underline">
            Arc App Medical & Safety Notice
          </a>
          . For app license and usage terms, see the{" "}
          <a href="/arc/terms" className="text-blue-500 underline">
            Arc App Terms & EULA
          </a>
          .
        </p>

        <p>
          Arc collects and stores information needed to create accounts, save
          training data, sync data across devices, send reminders you enable,
          support imports and exports, and troubleshoot issues you choose to
          report.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Information Arc Handles</h2>

        <p>Arc may handle the following categories of information:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account information</strong> - Firebase user ID, email
            address, account creation date, premium status, and profile details
            provided by sign-in providers such as Google or Apple.
          </li>
          <li>
            <strong>Training profile information</strong> - display name, birth
            date, height, body weight, preferred units, sex, activity level,
            goals, schedule preferences, equipment access, limitations, disliked
            exercises, guidance preference, and baseline lifts.
          </li>
          <li>
            <strong>Workout and program information</strong> - workout titles,
            workout dates, exercises, sets, reps, weights, rest timers, set
            types, notes, cardio details, program plans, check-ins, and program
            adjustments.
          </li>
          <li>
            <strong>Import and export information</strong> - workout CSV files
            you import and Arc workout exports you create.
          </li>
          <li>
            <strong>Bug report information</strong> - report category, title,
            message, current screen, status, generated summaries, and optional
            diagnostics such as app version, build number, iOS version, device
            model, locale, and time zone.
          </li>
          <li>
            <strong>Notification information</strong> - local notification
            preferences and identifiers used to remind you about active workouts
            and upcoming scheduled workouts.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">How Arc Uses Information</h2>

        <p>Arc uses information for the following purposes:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>To authenticate accounts and provide account access.</li>
          <li>
            To save, display, and sync workouts, programs, training profiles,
            settings, and progress history.
          </li>
          <li>
            To power workout logging, program planning, record book history,
            progress charts, rest timers, imports, exports, and account
            controls.
          </li>
          <li>
            To send local reminders for active workouts and upcoming scheduled
            workouts when enabled.
          </li>
          <li>
            To respond to bug reports, diagnose issues, protect app reliability,
            and improve the beta experience.
          </li>
        </ul>

        <p>Arc does not use workout reminders for advertising.</p>

        <h2 className="text-2xl font-semibold pt-8">Storage and Sharing</h2>

        <p>
          Arc stores data locally on your device and, when you are signed in,
          syncs user data with Firebase services used by the app.
        </p>

        <p>
          Firebase Authentication and Cloud Firestore support account login and
          data sync. Google and Apple are used only when you choose those sign-in
          methods.
        </p>

        <p>
          Arc does not sell personal information and does not display third-party
          ads.
        </p>

        <p>
          Arc does not include nutrition tracking, camera food recognition,
          HealthKit import, or third-party analytics in the current beta build
          unless those features are added in a future version. If those features
          are added, this policy and App Store privacy disclosures should be
          updated before release.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Your Controls</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>You can export Arc workout data from Settings.</li>
          <li>You can clear local cache on the current device from Settings.</li>
          <li>You can delete workout history from Settings.</li>
          <li>
            You can delete your account from Settings. Account deletion removes
            Arc user data associated with the account from the app database.
          </li>
          <li>
            You can disable notifications through Arc settings or iOS
            notification settings.
          </li>
          <li>
            You can choose whether to include diagnostics when submitting a bug
            report.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Retention</h2>

        <p>
          Arc keeps account, workout, program, and training profile data while
          your account is active or until you delete that data.
        </p>

        <p>
          When you delete your account, Arc removes account data from the active
          app database within 30 days unless a longer period is required for
          security, fraud prevention, dispute resolution, or legal compliance.
        </p>

        <p>
          Bug reports and optional diagnostic details may be retained for up to
          24 months so Arc can investigate issues and improve reliability.
        </p>

        <p>
          Deleted account data may remain for a limited time in provider backups,
          logs, or required records for up to 90 days before being removed
          according to provider retention practices.
        </p>

        <p>
          During beta, Arc does not automatically delete inactive accounts.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Children's Privacy</h2>

        <p>
          Arc is not intended for children under the age of 16. We do not
          knowingly collect personal information from children under 16.
        </p>

        <p>
          If a parent or guardian believes that a child has provided personal
          information through Arc, please contact us so the information can be
          reviewed and removed where appropriate.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Changes to this Policy</h2>

        <p>
          Arc may update this policy when app functionality, data collection,
          storage, or sharing practices change. Updates will be posted on this
          page with the revised "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold pt-8">Contact Us</h2>

        <p>If you have any questions about this Privacy Policy, contact me:</p>

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

export default ArcPrivacy;
