export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-950 overflow-hidden">

      {/* Base Noise Grid */}
      <div
        className="
          absolute inset-0
          opacity-40
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14)_1px,transparent_2px)]
          bg-size-[45px_45px]
        "
      />

      {/* ⭐ Optical Core Source (Top Left Near Brand) */}
      <div
        className="
          absolute
          w-[1400px]
          h-[1400px]

          -top-[900px]
          -left-[500px]

          bg-[radial-gradient(circle,_rgba(240,240,255,0.3)_30%,_transparent_65%)]
          opacity-10
        "
      />

      {/* Blue Optical Streak From Source */}
      <div
        className="
          absolute
          top-[18%]
          left-0
          right-0
          h-[2px]

          bg-gradient-to-r
          from-[rgba(59,130,246,0.36)]
          via-[rgba(200,200,255,0.15)]
          to-transparent

          blur-sm
          opacity-80
        "
      />

      {/* Orange Reflection Artifact */}
      <div
        className="
          absolute
          top-[55%]
          left-[60%]

          w-112.5
          h-112.5

          bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_75%)]
          blur-xl
          opacity-20
        "
      />

      {/* Purple Chromatic Artifact */}
      <div
        className="
          absolute
          top-[25%]
          left-[45%]

          w-125
          h-125

          bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_75%)]
          blur-2xl
          opacity-30
        "
      />

      {/* Deep Vignette */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.95))]
        "
      />

    </div>
  );
}