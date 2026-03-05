import Layout from "../components/Layout";
import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import PortfolioModal from "../components/PortfolioModal";

// const oldsystems = [
//   {
//     title: "Autonomous Unmanned Aerial System",
//     context: "CSU California Unmanned Aerial System Competition • UIC Team Air",
//     description:
//       "Designed and integrated an autonomous sUAS featuring embedded control systems, sensor fusion, computer vision, and precision payload mechanisms, enabling waypoint navigation, target localization, package delivery, and recovery under safety-critical flight constraints.",
//     tech: ["Control Systems", "RF Systems", "MAVLink Protocol", "Ardupilot/PX4", "Real-time Telemetry", "Python", "PID Controllers"]
//   },
//   {
//     title: "Handwired Split Keyboard",
//     context: "Independent Research & Experimentation",
//     description:
//       "Building a personal split keyboard from scratch. 3D modeled and printed body with a soldered keyswitch matrix and a microcontroller for each half with auxilliary communication between them.",
//     tech: ["Circuit Design", "Signal Debugging", "Datasheets"]
//   },
//   {
//     title: "Edge & Linux Systems",
//     context: "Personal / Raspberry Pi Deployment",
//     description:
//       "Raspberry Pi-based edge devices running Linux for data acquisition, processing, and device communication.",
//     tech: ["Raspberry Pi Zero 2 W", "Linux", "Python"]
//   },
//   {
//     title: "Full-Stack Integration",
//     context: "Systems Integration Projects",
//     description:
//       "Web dashboards and APIs built to interface with embedded systems for monitoring and control.",
//     tech: ["React", "Node", "TypeScript", "REST APIs"]
//   }
// ];

interface PortfolioSystem {
  title: string;
  context: string;
  description?: string;
  overview?: string;
  architecture?: string;
  contributions?: string;
  challenges?: string;
  tech: string[];
}

const systems: PortfolioSystem[] = [
{
  title: "Autonomous Unmanned Aerial System",
  context: "CSU California Unmanned Aerial System Competition • UIC Team Air",

  overview:
    "Designed and integrated an autonomous sUAS featuring embedded control systems, sensor fusion, computer vision, and precision payload mechanisms.",

  architecture:
    "The system was built around a Pixhawk flight controller running Ardupilot. A companion computer handled computer vision and mission logic while communicating with the autopilot via MAVLink over serial telemetry.",

  contributions:
    "Developed ground telemetry tooling, assisted with RF link integration, and worked on autonomous mission logic including waypoint navigation and target localization.",

  challenges:
    "Operating under competition safety constraints required reliable fail-safes, telemetry monitoring, and careful tuning of autonomous mission parameters.",

  tech: [
    "Control Systems",
    "RF Systems",
    "MAVLink",
    "Ardupilot/PX4",
    "Telemetry",
    "Python",
    "PID Controllers"
  ]
}
];

const Portfolio = () => {

  const [selectedSystem, setSelectedSystem] = useState<typeof systems[0] | null>(null);

  // Lock scroll when modal open
  useEffect(() => {
    if (selectedSystem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedSystem]);

  return (
    <Layout>

      {/* Title */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight flex items-center gap-3">
          <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/80 bg-clip-text text-transparent">&lt;</span>
          <span>Portfolio</span>
          <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">/&gt;</span>
        </h1>

        <div className="mt-4 h-0.75 w-130 bg-linear-to-r from-blue-300/80 to-transparent" />
      </div>

      {/* Cards */}
      <div className="columns-1 md:columns-2 gap-8 w-full">

        {systems.map((system) => (
          <div
            key={system.title}

            onClick={() => setSelectedSystem(system)}

            className="
              break-inside-avoid
              mb-8

              group
              relative
              cursor-pointer

              rounded-2xl

              bg-linear-to-b
              from-zinc-900/80
              to-zinc-950

              border-2 border-zinc-800

              p-8

              transition-all duration-500 ease-out

              hover:-translate-y-1
              hover:border-blue-300/80
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]

              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* Light Reflection */}
            <div className="
              absolute inset-0
              bg-linear-to-tr
              from-transparent
              via-blue-400/5
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-700
            " />

            <div className="relative z-10 h-full flex flex-col justify-between">

              <div>
                <div className="mb-4">
                  <div className="text-xs tracking-widest uppercase text-blue-300/70 mb-2">
                    {system.context}
                  </div>

                  <h2 className="text-2xl font-semibold text-white">
                    {system.title}
                  </h2>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {system.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {system.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 text-xs rounded-full
                      border border-blue-400/30
                      bg-blue-400/5
                      text-blue-200
                      transition
                      group-hover:border-blue-400/50
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Modal */}
      <PortfolioModal
        system={selectedSystem}
        onClose={() => setSelectedSystem(null)}
      />

    </Layout>
  );
};

export default Portfolio;