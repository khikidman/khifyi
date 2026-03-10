import { useEffect } from "react";
import Layout from "../components/Layout";
import PageContentTransition from "../components/PageContentTransition";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";

const keyHighlight = (text: string) => (
  <span className="text-blue-300 font-medium">{text}</span>
);

const paragraphs = [
  <>
    Before I could even form lasting memories, I was {keyHighlight("always asking questions. ")}
    If I didn’t understand something, I would ask again and again. It became such a defining
    characteristic that my mom learned to just say, “Google it.”
  </>,
  <>
    I've always been driven by {keyHighlight("curiosity")}. Some of my earliest memories are of sitting
    in the booth of our local diner, taking apart {keyHighlight("pens")}, {keyHighlight("phones")}, 
    and {keyHighlight("anything")} else I could get my hands on just to understand how they worked.
  </>,
  <>
    I became obsessed with {keyHighlight("Lego")} at a young age, building 1:1 replicas of functional machines using nothing but bricks and Technic pieces.
    Later, {keyHighlight("Minecraft")} captured my attention — not just the game itself, but the {keyHighlight("systems behind it")}. Using its wiring mechanics and command system, 
    I unknowingly began experimenting with CLIs and simulating {keyHighlight(" logic gates and digital circuits")} long before I formally
    studied them.
  </>,
  <>
    My mom, upon seeing this, suggested I learn programming, though at the time I dismissed it as {keyHighlight(" uninteresting")}.
  </>,
  <>
    Retrospect is a funny thing.
  </>,
  <>
    Around this time I discovered {keyHighlight("PC building")} and assembled my first computer for a family member 
    at age 10 after obsessively researching every component. {keyHighlight("By 12")}, I was experimenting with 
    {keyHighlight(" overclocking")}, {keyHighlight("undervolting")}, {keyHighlight("tuning memory timings")}, and making registry modifications 
    to squeeze every bit of performance out of a PC of my own.
  </>,
  <>
    I began creating texture packs and modding video games, working primarily with JSON 
    to control asset pipelines and animation. What began as {keyHighlight("curiosity")} soon became 
    an introduction to {keyHighlight("modifying software systems")} and understanding how programs behaved under the hood.
  </>,
  <>
    Around this time, my life was also going through some upheaval — family changes, the pandemic, and other disruptions.
    I spent {keyHighlight("many late nights")} online teaching myself new skills.
  </>,
  <>
    I learned {keyHighlight("3D modeling with Blender")}, initially creating models for real estate and automotive visualization
    before applying those skills to assets for games I began building in {keyHighlight("Unity and Unreal Engine")}.
  </>,
  <>
    I completed several online courses, including {keyHighlight("Harvard’s CS50 - Introduction to Computer Science")} and a number of Udemy courses on 3D modeling, game development, and programming.
    During high school I built a compact small-form-factor PC to support rendering and development work, small enough to easily transport overseas.
  </>,
  <>
    I began my undergraduate studies at the {keyHighlight("University of Illinois at Chicago")} as a Computer Science major.
    Much of the earlier coursework overlapped with skills I had already developed independently, and I used my skills to
    help those around me and at the resource center,
    but then an {keyHighlight("embedded systems")} course reignited my interest in hardware. Building circuits, working with digital logic,
    and watching systems come to life {keyHighlight("reminded me what sparked my passion for engineering in the first place.")}
  </>,
  <>
    I realized how {keyHighlight("naturally")} my software experience translated to writing firmware and controlling hardware.
    Wanting to pursue the intersection of both the Computer Science and Electrical Engineering disciplines more deeply, I switched my major to {keyHighlight("Computer Engineering")}.
  </>,
  <>
    Now, in the second half of my undergraduate studies, I'm focusing on both personal and collaborative team
    projects where I can {keyHighlight("apply my skills")} and continue exploring {keyHighlight("both")} hardware and software.
  </>,
  <>
    {keyHighlight("While I study")}, I'm working with {keyHighlight("UIC Team Air")} on an unmanned aerial vehicle scheduled to compete in June 2026. 
    My contributions include major {keyHighlight("electrical and software design")}, as well as collaborating on mechanical systems.
  </>,
  <>
    {keyHighlight("In my free time")}, I enjoy building and modifying things purely out of curiosity. Some recent projects include:
    <br></br>
    <br></br>
    <li>Building a {keyHighlight(" mechanical keyboard")} with two split halves from scratch,</li>
    <li>{keyHighlight("Designing ")} and installing {keyHighlight("a treble bleed circuit")} modification with push-pull switching on an electric guitar,</li>
    <li>building  {keyHighlight(" full-stack iOS apps")},</li>
    <br></br>and constructing the website {keyHighlight("you're currently viewing")} using React + Vite, deployed through Cloudflare on my own domain.
  </>,
  <>
    Over the past six months I’ve also begun composing and producing music, combining my five years of {keyHighlight("guitar experience ")} 
    with digital production tools. With over a dozen complete projects and {keyHighlight("two songs released ")} 
    across all major platforms, music has become another {keyHighlight("outlet for creativity and experimentation.")}
  </>,
  <>
    At my core, I'm an engineer who loves understanding {keyHighlight("systems and their parts")}; whether they involve 
    digital circuits, software architecture, mechanical designs, or musical compositions, 
    I'm {keyHighlight("always")} eager to dive deeper.
  </>,
];

const revealVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FullStoryPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);
    return (
    <Layout>
      <PageContentTransition>
        <main className="max-w-4xl mx-auto px-6 py-10 text-zinc-200">
          <h1 className="text-5xl md:text-6xl font-bold mb-16 text-center">
            {keyHighlight("<Full Story/>")}
          </h1>

          {paragraphs.map((para, idx) => (
            <motion.p
              key={idx}
              className="mb-12 leading-relaxed text-lg text-zinc-300"
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
            >
              {para}
            </motion.p>
          ))}
        </main>
      </PageContentTransition>
    </Layout>
  );
}