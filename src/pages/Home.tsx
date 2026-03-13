import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageContentTransition from "../components/PageContentTransition";
import Typewriter from "../components/Typewriter";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Home = () => {

  const experiences = [
    {
    title: "C-UASC Drone Engineering",
    date: "Feb 2026 – Jun 2026",
    text: "Developing software and electrical systems for an ML-driven pathfinding and payload delivery drone."
  },
  {
    title: "Shopping Webscraper",
    date: "Mar 2025",
    text: "Python automation tool with Selenium and Discord alerts for monitoring product restocks, deployed on AWS."
  },
  {
    title: "Lifestyle + Scheduling App",
    date: "May 2025 – Current",
    text: "Full-stack lifestyle planner with to-dos, habits, and shared schedules using Firebase and OpenAI."
  },
  {
    title: "HarvardX – CS50",
    date: "Sep 2022 – Dec 2022",
    text: "Learned algorithms, data handling, and full-stack development through projects like a stock simulator, DNA ID program, and file recovery tool."
  },
  
];

const [experienceIndex, setExperienceIndex] = useState(0);

  const homeSections = [
    { key: "about", label: "About Me" },
    { key: "experience", label: "Experience" }
  ];

  const [activeSection, setActiveSection] = useState("about");

  const [showTopButton, setShowTopButton] = useState(false);

  const [showResume, setShowResume] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const scrollTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = window.setTimeout(() => {
        setShowTopButton(window.scrollY > 400);
        scrollTimeout.current = null;
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    if (!name || !email || !message) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email address");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);

      // Clear form
      setName("");
      setEmail("");
      setMessage("");

    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <Layout showUpcomingReleases={true}>
      <PageContentTransition>
        <div className="relative min-h-[70vh] flex flex-col justify-center mt-10 mr-0 pr-40">
          {/* ===== Background Headshot ===== */}
          <img
            loading="lazy"
            decoding="async"
            src="/images/headshot.png"
            alt="Khi Kidman"
            className="
              absolute
              -right-65
              top-11/25
              -translate-y-1/2
              w-125
              opacity-0
              headshot-animate
              contrast-110
              brightness-90
              pointer-events-none
              select-none
              hidden md:block
              mask-radial
              transform-gpu
              will-change-transform
            "
          />

          {/* ===== Name Header ===== */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight flex items-center gap-3">
              <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/80 bg-clip-text text-transparent">
                &lt;
              </span>
              
              <Typewriter text="Khi Kidman" speed={90} />

              <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">
                /&gt;
              </span>
            </h1>

            <div className="mt-4 h-0.75 w-150 bg-linear-to-r from-blue-300/80 to-transparent" />
          </div>

          {/* ===== Summary ===== */}
          {/* <p className="text-zinc-400 text-lg max-w2xl leading-relaxed mb-10">
            Embedded-focused computer engineer building systems across firmware,
            hardware, and software. I design reliable, performance-driven
            solutions that bridge microcontrollers and scalable applications.
          </p> */}
          <p className="text-zinc-400 text-lg max-w2xl leading-relaxed mb-10">
          Building embedded systems and software that bring life to technology.
           I design microcontroller interfaces, firmware and scalable
           applications that make devices and software work in harmony.
            </p>
          {/* ===== Contact + Socials ===== */}
          <div className="flex flex-wrap items-center gap-8">

            {/* Contact Button */}
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
                px-6 py-3
                bg-blue-300
                shadow-[0_0_13px_rgba(59,130,246,0.6)]
                text-black
                font-semibold
                rounded-full
                hover:shadow-none
                transition-all duration-300
                cursor-pointer
              "
            >
              Contact Me
            </button>

            {/* Resume */}
            <button
              onClick={() => setShowResume(true)}
              className="
                px-6 py-3
                bg-transparent
                shadow-[0_0_13px_rgba(59,130,246,0.3)]
                text-zinc-300
                font-semibold
                rounded-full
                border-2 border-blue-300/60
                hover:text-zinc-100
                hover:border-blue-300/70
                transition-all duration-300
                cursor-pointer
              "
            >
              Resume
            </button>

            {/* Social Icons */}
            <div className="flex gap-5">

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/khi-kidman"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  border border-zinc-800
                  hover:border-blue-300
                  hover:shadow-[0_0_15px_rgba(74,128,222,0.4)]
                  transition-all duration-300
                  transform-gpu
                  will-change-transform
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-zinc-300"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.07c.65-1.23 2.24-2.53 4.61-2.53 4.93 0 5.84 3.25 5.84 7.48V24h-5v-7.73c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-5V8z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/khikidman"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  border border-zinc-800
                  hover:border-blue-300
                  hover:shadow-[0_0_15px_rgba(74,128,222,0.4)]
                  transition-all duration-300
                  transform-gpu
                  will-change-transform
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-zinc-300"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.44 9.77 8.2 11.36.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.14 3.01.4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.21.7.83.58C20.56 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/khimeister"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  border border-zinc-800
                  hover:border-blue-300
                  hover:shadow-[0_0_15px_rgba(74,128,222,0.4)]
                  transition-all duration-300
                  transform-gpu
                  will-change-transform
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-zinc-300"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5.5A4.75 4.75 0 1016.75 12 4.76 4.76 0 0012 7.5zm0 7.75A3 3 0 1115 12a3 3 0 01-3 3.25zM17.5 6.5a1 1 0 101 1 1 1 0 00-1-1z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </PageContentTransition>

      <div className="w-full flex justify-center mt-0 mb-12">
        <div
          className="
            opacity-0
            animate-fade-in-arrow
            text-blue-300
            animate-arrow
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {/* ===== Skills Marquee ===== */}
      <div className="relative w-full py-24 overflow-hidden">

        {/* Background Ambient Glow Shadow */}
        <div className="
          absolute inset-0
          pointer-events-none
          bg-gradient-radial from-blue-500/10 via-transparent to-transparent
          blur-sm
        "/>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto relative z-10">

          {[
            "Python",
            "C#",
            "C++",
            "Swift",
            "JavaScript",
            "React",
            "Tailwind",
            "x86",
            "ARM",
            "KiCad",
            "Embedded Systems",
            "AWS",
            "Machine Learning",
            "Digital Signal Processing",
          ].map((skill, i) => (
            <div
              key={i}
              className="
                px-5 py-2
                rounded-full
                border border-zinc-800
                text-zinc-400
                bg-white/5
                
                shadow-[0_0_40px_rgba(59,130,246,0.08)]
                hover:bg-white/10
                transition-all duration-300
                animate-float
                transform: translateZ(0);
                transform-gpu
              "
              // backdrop-blur-sm
              style={{
                animationDelay: `${i * 0.4}s`
              }}
            >
              {skill}
            </div>
          ))}

        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 mb-20 pt-28 border-t border-zinc-900">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-14 h-[260px] items-center ">
    
    {/* ===== Navigation Column ===== */}
    <div className="w-32 flex flex-col justify-center ">
      {homeSections.map((section) => {
        const active = activeSection === section.key;
        return (
          <button
            key={section.key}
            onClick={() => setActiveSection(section.key)}
            className="relative py-2 text-md text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            {/* Animated dash */}
            {active && (
              <motion.span
                layoutId="sectionIndicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-8 bg-blue-300 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <motion.span
              animate={{ paddingLeft: active ? 40 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className={active ? "text-blue-300 font-semibold" : ""}
            >
              {section.label}
            </motion.span>
          </button>
        );
      })}
    </div>

    {/* ===== Content Column ===== */}
    <div className="md:col-span-2 flex flex-col justify-center text-lg text-zinc-400 leading-relaxed">
      <AnimatePresence mode="wait">
        <motion.div
          style={{ willChange: "transform, opacity" }}
          key={activeSection}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {activeSection === "about" && (
            <div className="text-center">
              <span>
                I am an embedded-focused computer engineer building systems across
                hardware design + high-performance 
              </span>
              <span className="text-zinc-300/90 font-medium"> and </span>
              <span>streamlined software. Want my </span>
              <Link to="/full-story" className="text-blue-300 text-shadow-blue-400 text-shadow-xs cursor-pointer">
                full story
              </Link>
              <span>?</span>
            </div>
          )}

          {activeSection === "experience" && (
            <div className="flex flex-col items-center gap-4 text-center min-h-[250px]">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">
                  {experiences[experienceIndex].title}
                </h3>
                <p className="text-sm opacity-70">
                  {experiences[experienceIndex].date}
                </p>
                <p className="mt-2">{experiences[experienceIndex].text}</p>
              </div>
              {/* Navigation dots */}
              <div className="flex gap-2 mt-4">
                {experiences.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setExperienceIndex(i)}
                    className={`w-3 h-3 rounded-full transition cursor-pointer ${
                      i === experienceIndex
                        ? "bg-blue-300 shadow-[0_0_15px_rgba(74,128,222,0.4)] scale-125"
                        : "bg-gray-500 scale-90 hover:shadow-[0_0_15px_rgba(74,128,222,0.4)] hover:scale-110"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {activeSection === "contact" && (
            <p>Contact information and calls to action can go here.</p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>

  </div>
</div>
      <motion.div
        style={{ willChange: "transform, opacity" }}
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full pt-28 pb-8 mt-32 border-t border-zinc-900"
      >

        <div className="max-w-3xl mx-auto px-6 box-border">

          <h2 className="text-4xl font-bold mb-14 tracking-tight text-center">
            <span className="text-blue-300">&lt;</span>
            Contact
            <span className="text-blue-300">/&gt;</span>
          </h2>

          <motion.form
            onSubmit={sendEmail}
            className="
              p-10
              rounded-3xl
              border border-zinc-800
              bg-white/5
              backdrop-blur-sm
              shadow-[0_0_80px_rgba(59,130,246,0.08)]
              space-y-6
              transform-gpu
              will-change-transform
            "
          >

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            {/* Name */}
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              className="
                w-full
                px-5 py-3
                rounded-xl
                bg-black/40
                border border-zinc-800
                text-white
                focus:border-blue-300
                transition
              "
            />

            {/* Email */}
            <input
              maxLength={100}
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="
                w-full
                px-5 py-3
                rounded-xl
                bg-black/40
                border border-zinc-800
                text-white
                focus:border-blue-300
                transition
              "
            />

            {/* Message */}
            <textarea
              maxLength={2000}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Message"
              rows={5}
              className="
                w-full
                px-5 py-3
                rounded-xl
                bg-black/40
                border border-zinc-800
                text-white
                focus:border-blue-300
                transition
              "
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                rounded-full
                font-semibold
                bg-blue-300
                text-black
                shadow-[0_0_25px_rgba(59,130,246,0.5)]
                hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
                active:scale-95
                transition-all duration-300
                flex items-center justify-center gap-3
                cursor-pointer
              "
            >

              {loading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                />
              )}

              {loading ? "Sending..." : success ? "✓ Message sent successfully!" : "Send Message"}

            </button>

          </motion.form>
        </div>
        
      </motion.div>
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              text-3xl
              font-medium
              fixed bottom-5 right-5
              w-14 h-14
              rounded-full
              bg-blue-300
              text-black
              shadow-[0_0_25px_rgba(59,130,246,0.6)]
              flex items-center justify-center
              z-100
              cursor-pointer
            "
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showResume && (
          <>
            <motion.div
              style={{ willChange: "transform, opacity" }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transform-gpu will-change-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResume(false)}
            />

            <motion.button
              onClick={() => setShowResume(false)}
              className="
                fixed
                top-10
                left-[calc(50%-12px)]
                -translate-y-1/2

                w-12 h-12
                rounded-full
                bg-zinc-900/80
                border border-zinc-800
                text-3xl
                text-zinc-400
                hover:text-white
                hover:bg-zinc-800
                transition-all duration-300
                z-50
                cursor-pointer
              "
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              ✕
            </motion.button>


            <motion.div
              style={{ willChange: "transform, opacity" }}
              className="
                fixed
                top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[90%] max-w-4xl
                h-[85vh]
                bg-zinc-950
                border-2 border-zinc-400/70
                shadow-[0_0_15px_rgba(246,246,246,0.1)]
                rounded-2xl
                overflow-hidden
                z-50
                transform-gpu
                will-change-transform
              "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >

              
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
              />

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};



export default Home;