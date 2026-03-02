import Layout from "../components/Layout";
import PageContentTransition from "../components/PageContentTransition";
import Typewriter from "../components/Typewriter";


const Home = () => {
  return (
    <Layout>
      <PageContentTransition>
        <div className="min-h-[70vh] flex flex-col justify-center">

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

            <div className="mt-4 h-0.75 w-180 bg-linear-to-r from-blue-300/80 to-transparent" />
          </div>

          {/* ===== Summary ===== */}
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-10">
            Embedded-focused computer engineer building systems across firmware,
            hardware, and software. I design reliable, performance-driven
            solutions that bridge microcontrollers and scalable applications.
          </p>

          {/* ===== Contact + Socials ===== */}
          <div className="flex flex-wrap items-center gap-8">

            {/* Contact Button */}
            <a
              href="mailto:your@email.com"
              className="
                px-6 py-3
                bg-blue-300
                shadow-[0_0_13px_rgba(59,130,246,0.6)]
                text-black
                font-semibold
                rounded-full
                hover:shadow-[0_0_0px_rgba(59,130,246,0.0)]
                hover:bg-blue-300
                transition
              "
            >
              Contact Me
            </a>

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
    </Layout>
  );
};

export default Home;