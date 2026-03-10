import Layout from "../components/Layout";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const paragraphs = [
  `Before I could even form lasting memories, I was always asking questions. If I didn’t understand something, I would ask again and again. It became such a defining characteristic that my mom learned to just say, “Google it.”`,
  `I've always been driven by curiosity. Some of my earliest memories are of sitting in the booth of our local diner, taking apart pens, phones, tablets, flashlights, and anything else I could get my hands on just to understand how they worked.`,
  `I became obsessed with Lego, building 1:1 replicas of functional machines using nothing but bricks and Technic pieces. Later, Minecraft captured my attention—not just the game itself, but the systems behind it. Using its "Redstone" wiring mechanics, I unknowingly began building simulations of logic gates and digital circuits long before I formally studied them. My mom, upon seeing this, suggested I learn to code, to which I scoffed and said it sounded boring.`,
  `Around this time I discovered PC building and assembled my first computer for a family member at age 10 after obsessively researching every component. By 12, I was experimenting with overclocking, undervolting, tuning memory timings, and making registry modifications to squeeze every bit of performance out of a PC of my own.`,
  `I began creating texture packs and modding video games, working primarily with JSON to control asset pipelines and animation. What began as curiosity soon became an early introduction to modifying software systems and understanding how programs behaved under the hood.`,
  `Around this time, my life was also going through some upheaval — family changes, the pandemic, and other disruptions. I spent many late nights online teaching myself new skills.`,
  `I learned 3D modeling with Blender, initially creating models for real estate and automotive visualization before applying those skills to assets for games I began building in Unity and Unreal Engine. I completed several online courses, including Harvard’s CS50 and a number of Udemy courses on 3D modeling, game development, and programming. During high school I built a compact small-form-factor PC to support rendering and development work, small enough to easily transport overseas.`,
  `I began my undergraduate studies at the University of Illinois at Chicago as a Computer Science major. Much of the early coursework overlapped with skills I had already developed independently, but an embedded systems course reignited my interest in hardware. Building circuits, working with digital logic, and watching systems come to life reminded me what sparked my passion for engineering in the first place.`,
  `Now in the second half of my undergraduate studies, I'm focusing on both personal and collaborative team projects where I can apply my skills and continue exploring both hardware and software.`,
  `While I study, I work with UIC Team Air on an unmanned aerial vehicle scheduled to compete in June 2026. My contributions include major electrical and software design for the drone, as well as collaborating on aspects of the mechanical systems.`,
  `Outside of school, I enjoy building and modifying things purely out of curiosity. Some recent projects include building a mechanical keyboard with two split halves from scratch, designing and installing a treble bleed circuit modification with push-pull switching on an electric guitar, and constructing the website you're currently viewing using React + Vite, deployed through Cloudflare on my own domain.`,
  `Over the past six months I’ve also begun producing music, combining my five years of guitar experience with digital production tools. With over a dozen complete projects in the vault and two songs released across all major platforms, music has become another outlet for creativity and experimentation, as well as an exercise in both analog and digital signal processing.`,
  `At my core, I'm an engineer who loves understanding systems; whether they're digital circuits, software architecture, mechanical designs, or musical compositions, I'm always eager to dive deeper.`
];

const FullStoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to top on load
  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Highlight paragraph in center using requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const children = Array.from(container.children) as HTMLDivElement[];
          const containerMiddle = container.clientHeight / 2;

          let closestIndex = 0;
          let minDistance = Infinity;

          children.forEach((child, i) => {
            const childRect = child.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const childMiddle = childRect.top + childRect.height / 2 - containerRect.top;
            const distance = Math.abs(containerMiddle - childMiddle);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = i;
            }
          });

          setCurrentIndex(closestIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize

    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout showUpcomingReleases={true}>
      <div className="min-h-screen flex flex-col items-center mt-40 text-white">
        <div
          ref={containerRef}
          className="w-full max-w-3xl h-[50vh] overflow-y-scroll scroll-smooth flex flex-col gap-12 px-6 py-60 snap-y snap-mandatory scrollbar-none"
        >
          {paragraphs.map((para, i) => {
            const isCurrent = i === currentIndex;

            return (
              <div
                key={i}
                className={`snap-center transition-all duration-300 flex justify-center items-center ${
                  isCurrent ? "text-zinc-100 scale-100" : "text-zinc-500 scale-90"
                }`}
              >
                <p className="text-lg leading-relaxed text-center transition-all duration-300">
                  {para}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FullStoryPage;