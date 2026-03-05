import Layout from "../components/Layout";
import PageContentTransition from "../components/PageContentTransition";
import { musicTracks } from "../data/musicTracks";
import MusicTrackCard from "../components/MusicTrackCard";

const Music = () => {
  return (
    <Layout>
      <PageContentTransition>
        <div className="relative max-w-5xl mx-auto px-0 pt-0">

          {/* ===== Ambient Background Glow ===== */}
          <div className="
            absolute -top-32 left-1/2 -translate-x-1/2
            w-[800px] h-[400px]
            bg-blue-500/10
            blur-3xl
            pointer-events-none
          "/>

          {/* ===== Hero Section ===== */}
          <section className="mb-24 relative z-10">

            <h1 className="text-5xl md:text-5xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/70 bg-clip-text text-transparent">
                &lt;
              </span>

              Music

              <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">
                /&gt;
              </span>
            </h1>

            <div className="mt-4 h-0.75 w-100 bg-linear-to-r from-blue-300/80 to-transparent mb-8" />

            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              I produce instrumental and experimental music using guitar,
              digital synthesis, and sound design experimentation.
              These are selected works hosted on SoundCloud.
            </p>
          </section>

          {/* ===== Tracks Section ===== */}
          <section className="relative z-10">
            <div className="flex flex-col gap-10 max-w-2xl mx-auto">
              {musicTracks.map((track, i) => (
                <div
                  key={track.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <MusicTrackCard
                    title={track.title}
                    description={track.description}
                    cover={track.cover}
                    trackId={track.soundcloudTrackId}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ===== Bottom Glow Accent ===== */}
          <div className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-[700px] h-[300px]
            bg-blue-500/5
            blur-3xl
            pointer-events-none
          "/>

        </div>
      </PageContentTransition>
    </Layout>
  );
};

export default Music;