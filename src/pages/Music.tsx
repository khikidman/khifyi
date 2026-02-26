import Layout from "../components/Layout";
import { musicTracks } from "../data/musicTracks";
import MusicTrackCard from "../components/MusicTrackCard";

const Music = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6">

        {/* Hero */}
        <section className="mb-20">
            <h1 className="text-6xl font-bold mb-6">
                Music Production
            </h1>

            <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
                I produce instrumental and experimental music using guitar,
                digital synthesis, and sound design experimentation.
                These are selected works hosted on SoundCloud.
            </p>
        </section>

        <section className="flex flex-col gap-8 max-w-2xl mx-auto">
            {musicTracks.map(track => (
                <MusicTrackCard
                key={track.id}
                title={track.title}
                description={track.description}
                cover={track.cover}
                trackId={track.soundcloudTrackId}
                />
            ))}
        </section>

        {/* Now Listening */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">
            Currently Enjoying
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="
                  group
                  bg-zinc-900/40
                  rounded-xl
                  overflow-hidden
                  border border-zinc-800
                  hover:border-blue-500
                  transition-all duration-300
                "
              >
                <div className="aspect-square bg-zinc-800" />

                <div className="p-4">
                  <h3 className="font-medium group-hover:text-blue-400 transition">
                    Artist Name
                  </h3>
                  <p className="text-sm text-zinc-500">
                    Album / Track
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Mood Section */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">
            Musical Taste
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Electronic",
              "Ambient",
              "Indie",
              "Instrumental",
              "Soundtrack",
              "Experimental"
            ].map(style => (
              <div
                key={style}
                className="
                  px-5 py-2
                  rounded-full
                  bg-zinc-900/40
                  border border-zinc-800
                  hover:border-blue-500
                  transition
                "
              >
                {style}
              </div>
            ))}
          </div>
        </section> */}

      </div>
    </Layout>
  );
};

export default Music;