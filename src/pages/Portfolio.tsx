import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const systems = [
  {
    title: "Embedded Control",
    description:
      "Real-time firmware development using microcontrollers with direct hardware interaction, interrupts, and peripheral communication.",
    tech: ["Tiva C", "C", "UART", "SPI", "I2C"]
  },
  {
    title: "Hardware Systems",
    description:
      "Circuit-level integration, debugging with oscilloscopes, signal validation, and hardware-aware system design.",
    tech: ["Circuit Design", "Signal Debugging", "Datasheets"]
  },
  {
    title: "Edge & Linux Systems",
    description:
      "Raspberry Pi-based edge devices running Linux for data acquisition, processing, and device communication.",
    tech: ["Raspberry Pi Zero 2 W", "Linux", "Python"]
  },
  {
    title: "Full-Stack Integration",
    description:
      "Web dashboards and APIs built to interface with embedded systems for monitoring and control.",
    tech: ["React", "Node", "TypeScript", "REST APIs"]
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
                <h2 className="text-2xl font-semibold mb-6 text-white">
                  {system.title}
                </h2>

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
      {selectedSystem && (
        <>
          <div
            className="
              fixed inset-0
              bg-black/70
              backdrop-blur-md
              z-40
            "
            onClick={() => setSelectedSystem(null)}
          />

          <AnimatePresence>
{selectedSystem && (
  <>
    {/* Background Dim */}
    <motion.div
      className="
        fixed inset-0
        bg-black/70
        backdrop-blur-sm
        z-40
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedSystem(null)}
    />

    {/* Modal */}
    <motion.div
  className="
    fixed
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2

    w-[92%]
    max-w-3xl
    max-h-[85vh]

    z-50

    rounded-2xl
    p-10

    bg-linear-to-b
    from-zinc-900
    to-zinc-950

    border border-zinc-800

    overflow-y-auto

    will-change-transform
  "

  initial={{
    opacity: 0,
    scale: 0.97
  }}

  animate={{
    opacity: 1,
    scale: 1
  }}

  exit={{
    opacity: 0,
    scale: 0.97
  }}

  transition={{
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1] // Apple-like easing
  }}
>

      <button
  onClick={() => setSelectedSystem(null)}
  className="
    absolute top-6 right-6

    w-12 h-12
    flex items-center justify-center

    text-zinc-400
    text-2xl font-light

    rounded-full

    hover:bg-white/10
    hover:text-white
    hover:scale-110

    transition-all duration-300

    cursor-pointer
  "
>
  ✕
</button>

      <h2 className="text-3xl font-semibold mb-6 text-white">
        {selectedSystem.title}
      </h2>

      <p className="text-zinc-400 leading-relaxed mb-8">
        {selectedSystem.description}
      </p>

      <h3 className="text-lg font-semibold mb-4 text-white">
        Technologies
      </h3>

      <div className="flex flex-wrap gap-2">
        {selectedSystem.tech.map((tech: string) => (
          <span
            key={tech}
            className="
              px-3 py-1 text-sm rounded-full
              border border-blue-300/30
              bg-blue-400/10
              text-blue-200
            "
          >
            {tech}
          </span>
        ))}
      </div>

    </motion.div>
  </>
)}
</AnimatePresence>
        </>
      )}

    </Layout>
  );
};

export default Portfolio;