import Layout from "../components/Layout";

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
  return (
    <Layout>
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="max-w-350 mx-auto px-8">

          {/* Page Title */}
          <div className="mb-20">
            <h1 className="text-6xl font-bold tracking-tight flex items-center gap-3">
              <span className="bg-linear-to-r from-blue-500 via-blue-60/90 to-indigo-600/80 bg-clip-text text-transparent">
                &lt;
              </span>
              <span>Portfolio</span>
              <span className="bg-linear-to-r from-indigo-600/70 via-indigo-600/60 to-indigo-600/50 bg-clip-text text-transparent">
                /&gt;
              </span>
            </h1>
            <div className="mt-4 h-0.75 w-336 bg-linear-to-r from-blue-500 via-indigo-600/50 to-transparent" />
          </div>

          {/* 4 Column Layout */}
          <div className="grid grid-cols-4 gap-8">

            {systems.map((system) => (
              <div
                key={system.title}
                className="
                  group
                  relative
                  min-h-160
                  rounded-2xl
                  border border-zinc-800
                  bg-zinc-900/40
                  p-8
                  transition-all duration-500
                  transform
                  hover:scale-[1.03]
                  hover:border-blue-500
                  hover:bg-zinc-900/70
                  cursor-pointer
                "
              >
                {/* Subtle Glow */}
                <div className="
                  absolute inset-0 rounded-2xl
                  bg-indigo-400/10
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                " />

                <div className="
                  relative z-10
                  transition-all duration-500
                  opacity-60
                  group-hover:opacity-100
                ">

                  {/* Title */}
                  <h2 className="text-2xl font-semibold mb-6">
                    {system.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                    {system.description}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-2">
                    {system.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1
                          text-xs
                          rounded-full
                          border border-blue-500/40
                          bg-indigo-600/10
                          text-indigo-300
                          transition-all duration-300
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
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;