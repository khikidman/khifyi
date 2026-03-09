import Layout from "../components/Layout";
import PageContentTransition from "../components/PageContentTransition";
import { musicTracks } from "../data/musicTracks";
import MusicTrackCard from "../components/MusicTrackCard";

const Music = () => {
  return (
    <Layout>
      {/* <PageContentTransition> */}
        <div className="relative max-w-5xl mx-auto px-0 pt-0">

          {/* ===== Ambient Background Glow ===== */}
          {/* <div className="
            absolute -top-32 left-1/2 -translate-x-1/2
            w-[800px] h-[400px]
            bg-blue-500/10
            blur-3xl
            pointer-events-none
          "/> */}

          {/* ===== Hero Section ===== */}
          <section className="mb-0 relative sticky z-500">

            <h1 className="text-5xl md:text-5xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/70 bg-clip-text text-transparent">
                &lt;
              </span>

              Music

              <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">
                /&gt;
              </span>
            </h1>

            <div className="mt-4 h-0.75 w-80 bg-linear-to-r from-blue-300/80 to-transparent mb-8" />

            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              I produce instrumental and experimental music using guitar,
              digital synthesis, and sound design experimentation. Check out some
              of my works on Spotify, Apple Music, Amazon, and more!
            </p>
          </section>

          {/* ===== Tracks Section ===== */}
          <section className="relative z-10">
            <div className="max-w-5xl mx-auto py-12">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {musicTracks.map(track => (
                  <MusicTrackCard
                    key={track.id}
                    title={track.title}
                    description={track.description}
                    cover={track.cover}
                    spotify={track.spotify}
                    apple={track.apple}
                    amazon={track.amazon}
                    releaseDate={track.releaseDate}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===== Bottom Glow Accent ===== */}
          {/* <div className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            w-[700px] h-[300px]
            bg-blue-500/5
            blur-3xl
            pointer-events-none
          "/> */}

        </div>
      {/* </PageContentTransition> */}
    </Layout>
  );
};

export default Music;