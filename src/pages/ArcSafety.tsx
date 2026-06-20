import Layout from "../components/Layout";

const ArcSafety = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6 text-sm leading-relaxed">
        <h1 className="text-3xl font-bold">Arc App Medical & Safety Notice</h1>
        <p className="text-gray-500">Last updated: June 20, 2026</p>

        <p>
          Arc provides workout tracking and general training guidance. Arc is not
          a medical device, medical service, physical therapy service, or
          substitute for professional medical advice.
        </p>

        <p>
          For app license and usage terms, see the{" "}
          <a href="/arc/terms" className="text-blue-500 underline">
            Arc App Terms & EULA
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold pt-6">Before You Train</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Talk with a qualified medical professional before starting or
            changing an exercise program, especially if you have a medical
            condition, injury, pregnancy, pain, dizziness, fainting, chest
            discomfort, breathing issues, or any other health concern.
          </li>
          <li>
            Program suggestions, targets, timers, progression cues, and training
            recommendations in Arc are informational and may not be appropriate
            for every person.
          </li>
          <li>
            You are responsible for choosing exercises, loads, intensity, range
            of motion, and technique that are appropriate for your body,
            experience, equipment, and environment.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">During Workouts</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Stop exercising if you feel chest pain, severe shortness of breath,
            dizziness, fainting, sharp pain, unusual weakness, or any symptom
            that feels unsafe.
          </li>
          <li>
            Seek immediate medical help or contact local emergency services if
            symptoms are severe, sudden, or concerning.
          </li>
          <li>
            Use proper equipment, warm up appropriately, use spotters or safety
            pins when needed, and avoid movements that cause pain or feel
            unstable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Not Medical Advice</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Arc does not diagnose, treat, monitor, prevent, or cure any disease,
            injury, or medical condition.
          </li>
          <li>
            Do not use Arc to make medical decisions. A qualified professional
            should guide medical, rehabilitation, injury, pregnancy, or
            condition-specific training decisions.
          </li>
          <li>
            If information in Arc conflicts with advice from a medical
            professional, follow the medical professional's advice.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold pt-8">Contact Us</h2>

        <p>If you have any questions about this notice, contact me:</p>

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

export default ArcSafety;
