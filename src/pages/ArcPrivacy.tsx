import Layout from "../components/Layout";

const policySections = [
  {
    title: "Information Arc Handles",
    items: [
      "Account information, including your Firebase user ID, email address, account creation date, premium status, and profile details provided by sign-in providers such as Google or Apple.",
      "Training profile information, including display name, birth date, height, body weight, preferred units, sex, activity level, goals, schedule preferences, equipment access, limitations, disliked exercises, guidance preference, and baseline lifts.",
      "Workout and program information, including workout titles, dates, exercises, sets, reps, weights, rest timers, set types, notes, cardio details, program plans, check-ins, and program adjustments.",
      "Import and export information when you choose to import workout CSV files or export Arc workout data.",
      "Optional bug report information, including report text, category, current screen, and diagnostics such as app version, build number, iOS version, device model, locale, and time zone when diagnostics are included.",
      "Notification preferences and local notification identifiers used to remind you about active workouts and upcoming scheduled workouts."
    ]
  },
  {
    title: "How Arc Uses Information",
    items: [
      "To authenticate your account and keep your workout history, programs, settings, and training profile available across devices.",
      "To power workout logging, program planning, record book history, progress charts, rest timers, reminders, imports, exports, and account controls.",
      "To respond to bug reports, diagnose issues, protect app reliability, and improve the beta experience.",
      "To provide local notifications you enable. Arc does not use workout reminders for advertising."
    ]
  },
  {
    title: "Storage and Sharing",
    items: [
      "Arc stores data locally on your device and, when you are signed in, syncs user data with Firebase services used by the app.",
      "Firebase Authentication and Cloud Firestore support account login and data sync. Google and Apple are used only when you choose those sign-in methods.",
      "Arc does not sell your personal information and does not display third-party ads.",
      "Arc does not include nutrition tracking, camera food recognition, HealthKit import, or third-party analytics in the current beta build unless those features are added in a future version."
    ]
  },
  {
    title: "Your Controls",
    items: [
      "You can export Arc workout data from Settings.",
      "You can clear the local cache on the current device from Settings.",
      "You can delete workout history or delete your account from Settings. Account deletion removes Arc user data associated with your account from the app database.",
      "You can disable notifications through Arc settings or iOS notification settings.",
      "You can choose whether to include diagnostics when submitting a bug report."
    ]
  },
  {
    title: "Retention and Changes",
    items: [
      "Arc keeps account, workout, program, training profile, and bug report data while your account is active or as needed to provide the app.",
      "Deleted account data may remain for a limited time in provider backups, logs, or required records before being removed according to provider retention practices.",
      "If Arc changes what data it collects or how data is used, this policy will be updated before that version ships."
    ]
  }
];

const quickFacts = [
  "No third-party ads",
  "No sale of personal data",
  "User-initiated export",
  "In-app account deletion"
];

const ArcPrivacy = () => {
  return (
    <Layout>
      <section className="space-y-14">
        <header className="relative overflow-hidden rounded-3xl border border-blue-300/20 bg-zinc-950/60 p-8 shadow-[0_0_50px_rgba(147,197,253,0.08)]">
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-300/14 via-transparent to-transparent" />
          <div className="relative space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-300/90">
              <span>Arc</span>
              <span className="h-1 w-1 rounded-full bg-blue-300/60" />
              <span>Privacy Policy</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Privacy for the Arc app
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Arc is a workout and program tracking app. This policy explains
                what the app handles, why it handles it, and the controls users
                have over their training data.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {quickFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1.5 text-xs font-medium text-blue-200"
                >
                  {fact}
                </span>
              ))}
            </div>

            <p className="text-xs text-zinc-500">Last updated: June 20, 2026</p>
          </div>
        </header>

        <div className="space-y-8 text-sm leading-7 text-zinc-400">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Overview
            </h2>
            <p>
              Arc collects the information needed to create accounts, save
              training data, sync data across devices, send reminders users
              enable, support imports and exports, and troubleshoot issues users
              choose to report.
            </p>
          </section>

          {policySections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="group flex gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-950/35 p-4 transition-colors duration-300 hover:border-blue-300/30"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300/80 shadow-[0_0_14px_rgba(147,197,253,0.55)]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Children
            </h2>
            <p>
              Arc is not intended for children under 16. If you believe a child
              has provided personal information through Arc, please contact us so
              the information can be reviewed and removed where appropriate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:contact@khi.fyi"
                className="font-semibold text-blue-300 underline decoration-blue-300/30 underline-offset-4 transition-colors hover:text-blue-200"
              >
                contact@khi.fyi
              </a>
              .
            </p>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default ArcPrivacy;
