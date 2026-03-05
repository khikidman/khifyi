import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type PortfolioSystem = {
  title: string;
  context: string;

  overview: string;
  architecture?: string;
  contributions?: string;
  challenges?: string;

  tech: string[];
};

type Props = {
  system: PortfolioSystem | null;
  onClose: () => void;
};

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "architecture", label: "Architecture" },
  { key: "contributions", label: "Contributions" },
  { key: "challenges", label: "Challenges" }
];

export default function PortfolioModal({ system, onClose }: Props) {

  const [activeTab, setActiveTab] = useState("overview");

  if (!system) return null;

  const content = (system as any)[activeTab];

  return (
    <AnimatePresence>

      {/* Background */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="
          fixed
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[92%]
          max-w-4xl
          max-h-[85vh]
          z-50
          rounded-2xl
          p-10
          bg-linear-to-b
          from-zinc-900
          to-zinc-950
          border border-zinc-800
          overflow-y-auto
        "

        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}

        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1]
        }}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6
            w-12 h-12
            flex items-center justify-center
            text-zinc-400 text-2xl
            rounded-full
            hover:bg-white/10
            hover:text-white
            transition
            cursor-pointer
          "
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-2 text-white">
          {system.title}
        </h2>

        <div className="text-sm text-blue-300/70 mb-8 uppercase tracking-widest">
          {system.context}
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-zinc-800 mb-8">

          {tabs.map(tab => {

            if (!(system as any)[tab.key]) return null;

            const active = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  pb-3 text-sm transition

                  ${active
                    ? "text-blue-300 border-b-2 border-blue-300"
                    : "text-zinc-400 hover:text-white"}
                `}
              >
                {tab.label}
              </button>
            );
          })}

        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-zinc-400 leading-relaxed mb-8">
            {content}
          </p>
        </motion.div>

        {/* Tech */}
        <h3 className="text-lg font-semibold mb-4 text-white">
          Technologies
        </h3>

        <div className="flex flex-wrap gap-2">
          {system.tech.map(tech => (
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

    </AnimatePresence>
  );
}