import Layout from "../components/Layout";
import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
import PortfolioModal from "../components/PortfolioModal";
import { type PortfolioSystem } from "../types/portfolio";

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
},
{
  title: "Social Productivity App",
  context: "Personal Software Project • iOS Application",

  overview:
    "Developing a personal productivity platform that unifies habit tracking, task management, and schedule planning into a single daily workflow system with social integration designed for long-term behavioral consistency.",

  architecture:
    "The application is built using SwiftUI with a modular MVVM architecture. Core data models represent habits, tasks, and scheduled activities, with persistent storage ensuring state is preserved across launches. The interface emphasizes calendar-based interaction and gesture-driven task manipulation using UIKit drag-and-drop integrations.",

  contributions:
    "Designed the data models and application architecture, implemented a calendar-based habit tracking system, built persistent task storage, and integrated drag-and-drop scheduling interactions. Focused heavily on creating a responsive UI with smooth state updates and clear visual feedback.",

  challenges:
    "Designing a system that supports flexible scheduling while remaining simple enough for daily use required careful UI/UX iteration. Ensuring reliable persistence, consistent state updates across views, and intuitive gesture-based interactions were key technical challenges.",

  tech: [
    "iOS Development",
    "Full Stack",
    "Swift",
    "SwiftUI",
    "Firebase",
    "ML Models",
    "State Management"
  ]
},
{
  title: "Handwired Split Ergonomic Keyboard",
  context: "Personal Hardware Project • Mechanical Keyboard Build",

  overview:
    "Designed and handwired a custom split ergonomic keyboard to explore compact layouts, improved hand ergonomics, and low-cost hardware prototyping. The project focused on both electrical design and physical assembly for daily use.",

  architecture:
    "The keyboard utilized a 36-key matrix arranged in a split configuration. Diodes were used for row/column isolation and the MCU communication between halves was implemented using soft serial on an RP2040 microcontroller. Case components were 3D-printed, while switches, keycaps, and connectors were sourced for cost-effective assembly. Firmware was built with QMK, with optional Vial integration for live keymap adjustments.",

  contributions:
    "Handwired the entire keyboard including matrix assembly and diode placement, soldered MCU connections, integrated TRS communication between halves, and completed firmware configuration. 3D-printed components and managed ergonomics for thumb clusters and overall layout. Tested and refined key layouts, thumb cluster positions, and wrist alignment for optimal ergonomics.",

  challenges:
    "Balancing compact layout design with ergonomic considerations for hand posture and finger reach. Ensuring clean and reliable wiring in a complex 3D-shaped case. Integrating soft serial communication and adapting firmware for split layout with live configuration via Vial. Optimizing desk and keyboard height for comfort during extended typing sessions.",

  tech: [
    "Mechanical Keyboard Design",
    "RP2040 Microcontroller",
    "QMK Firmware",
    "Soft Serial",
    "Soldering",
    "3D Printing"
  ]
},
{
  title: "3D Kitchen Simulation Game",
  context: "Personal Software Project • Real-Time Kitchen Simulation",

  overview:
    "Developed a real-time kitchen simulation game inspired by professional back-of-house operations. The project focuses on task prioritization, timing, and resource management to emulate the challenges of a busy restaurant environment.",

  architecture:
    "Built with a modular architecture using Unity scripted in C#, featuring separate modules for order management, cooking processes, and timer-based task execution. The system handles multiple concurrent orders, tracks ingredient usage, and updates kitchen states dynamically to simulate real-world constraints.",

  contributions:
    "Designed and implemented the core simulation engine, including task scheduling, real-time updates, and user interaction mechanics. Created a system to manage concurrent cooking tasks, inventory management, and order prioritization. Developed visual feedback and UI elements to represent kitchen workflow and player actions.",

  challenges:
    "Balancing realism and playability required careful tuning of timers, task dependencies, and user interface feedback. Implementing concurrency for multiple orders and ensuring smooth real-time updates without performance issues were key technical challenges.",

  tech: [
    "C# / JavaScript / Python",
    "Object-Oriented Programming",
    "Real-Time Simulation",
    "Task Scheduling",
    "State Management",
    "UI/UX Design"
  ]
},
{
  title: "Sudoku Solver",
  context: "Personal Software Project • Algorithmic Puzzle Solver",

  overview:
    "Implemented a high-performance Sudoku solver in C++ using backtracking with bitset optimizations. The application can efficiently solve any valid 9x9 Sudoku puzzle, demonstrating algorithm design, recursive problem solving, and constraint propagation techniques.",

  architecture:
    "The solver uses a 9x9 board representation and maintains bitsets for rows, columns, and 3x3 subgrids to track used numbers. A recursive backtracking algorithm searches for valid solutions while dynamically updating these bitsets to prune invalid paths efficiently. Input and output are handled via a simple command-line interface.",

  contributions:
    "Designed and implemented the backtracking algorithm optimized with bitsets for row, column, and cell constraints. Developed utility functions for board input, printing, and coordinate mapping. Implemented a modular structure separating core solving logic from I/O, making the solver reusable for multiple puzzle instances.",

  challenges:
    "Optimizing the backtracking search to reduce redundant computations using bitsets and careful indexing. Ensuring correctness while handling user input and providing a clear board visualization. Balancing simplicity of the CLI interface with maintainable code structure.",

  tech: [
    "C++",
    "Recursive Backtracking",
    "Bit Manipulation",
    "CLI",
    "Constraint Propagation",
    "Algorithm Optimization"
  ]
},
{
  title: "Rotating ASCII Donut",
  context: "Personal Software Project • Real-Time ASCII Graphics",

  overview:
    "Implemented a real-time 3D donut rendering entirely in ASCII characters using C. The program simulates a rotating torus with dynamic shading, depth buffering, and perspective projection within a terminal environment.",

  architecture:
    "The simulation uses nested loops to sample angles around the torus’ major and minor circles. Each sample calculates 3D coordinates, projects them onto a 2D screen, computes luminance for shading, and updates a z-buffer to handle occlusion. The final frame is printed to the terminal, with continuous updates to rotation angles to produce animation.",

  contributions:
    "Developed the complete ASCII rendering engine including perspective projection, depth buffering, and lighting calculations for luminance-based shading. Optimized the inner loop for performance in a terminal environment. Managed buffer memory efficiently to create smooth real-time animation on standard consoles.",

  challenges:
    "Handling correct depth sorting with z-buffering and ensuring the character shading appeared consistent with rotation. Optimizing performance to maintain real-time animation within the constraints of terminal output. Achieving visually appealing rotation using only ASCII characters and basic trigonometry.",

  tech: [
    "C",
    "3D Graphics Fundamentals",
    "ASCII Art",
    "Real-Time Rendering",
    "Trigonometry",
    "Depth Buffering"
  ]
},
{
  title: "Interactive π Approximation with Polygon Visualization",
  context: "Personal Web Development Project • HTML5 Canvas / JavaScript",

  overview:
    "Built an interactive web application that visualizes polygons inscribed and circumscribed around a circle to estimate the value of π using Archimedes’ method. Users can dynamically adjust the number of sides of the polygon using a slider and observe how the approximation converges to π in real time.",

  architecture:
    "The project uses HTML5 Canvas for rendering and vanilla JavaScript for logic. It calculates inner and outer polygon circumferences based on the user-selected number of sides and the circle's radius, then approximates π as the average ratio of circumference to diameter—following Archimedes’ approach. The canvas dynamically renders both polygons and slice lines with shadows and color styling.",

  contributions:
    "Implemented polygon generation and real-time canvas rendering using trigonometric calculations based on Archimedes’ method. Designed an interactive UI with a slider for adjusting polygon sides and a live π approximation display. Styled the interface with modern CSS, including shadows, color highlights, and a dark theme. Ensured responsive and smooth updates without performance lag.",

  challenges:
    "Handling smooth real-time updates on the canvas while recalculating polygon geometry for a wide range of sides (4–1000). Balancing visual clarity and accuracy for high-side-count polygons. Integrating UI elements alongside the canvas in a visually appealing and user-friendly layout.",

  tech: [
    "HTML5 Canvas",
    "JavaScript (ES6+)",
    "CSS3",
    "Mathematical Visualization",
    "Interactive UI",
    "Trigonometry",
  ]
},
{
  title: "Automated Stock Monitor for Private E‑Commerce Community",
  context: "Freelance Volunteer Project • Web Automation & Cloud Deployment",

  overview:
    "Developed an automated monitoring system that tracks product availability on a private e‑commerce platform and sends real-time notifications to users through Discord. The tool was built for a community of over 200 members to reduce the need for manual stock checking and improve access to limited‑availability products.",

  architecture:
    "The system combines Selenium-based browser automation with HTML parsing to authenticate through a Discord OAuth login and navigate the site’s product pages. BeautifulSoup extracts product information while a persistent tracker prevents duplicate alerts. A customizable watchlist allows users to monitor specific products, and notifications are sent through a Discord webhook when items restock. The script runs on a scheduled loop and persists session data using cookies to minimize repeated authentication.",

  contributions:
    "Designed and implemented the full automation pipeline in Python, including login automation, cookie persistence, product scraping, watchlist filtering, and Discord webhook integration. Built a restock tracking system to prevent duplicate alerts and allow repeated monitoring over time. Deployed the program to run continuously in a cloud environment for reliable 24/7 operation.",

  challenges:
    "Handling authentication through a third‑party Discord OAuth login required browser automation, cookie management, and fallback mechanisms for CAPTCHA scenarios. Ensuring reliable scraping across paginated product listings while avoiding duplicate alerts required persistent state tracking and careful parsing of dynamic HTML structures.",

  tech: [
    "Python",
    "Selenium",
    "Web Scraping",
    "Automation",
    "Discord Webhooks",
    "Cookie Persistence",
    "Cloud Deployment (AWS)"
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
      <div className="mb-12 sticky z-50">
        <h1 className="text-5xl font-bold tracking-tight flex items-center gap-3">
          <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/80 bg-clip-text text-transparent">&lt;</span>
          <span>Portfolio</span>
          <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">/&gt;</span>
        </h1>

        <div className="mt-4 h-0.75 w-120 bg-linear-to-r from-blue-300/80 to-transparent" />
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
                  {system.overview}
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