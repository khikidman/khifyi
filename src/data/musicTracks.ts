export interface MusicTrack {
  id: string;
  title: string;
  description?: string;
  cover: string;

  spotify?: string;
  apple?: string;
  amazon?: string;

  releaseDate?: string; // ISO string
}

export const musicTracks: MusicTrack[] = [
  {
    id: "afloat",
    title: "Afloat",
    description: "Ambient / Experimental",
    cover: "/images/afloat-cover.jpg",

    spotify: "https://open.spotify.com/track/2VknBDuzpWwtpqfrASOEql?si=3c8c665183d041a2",
    apple: "https://music.apple.com/us/song/afloat/1880876072",
    amazon: "https://music.amazon.com/albums/B0GQHCG4BF?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_VqN1en5msHTsZ5oCnzZGJ6ki0&trackAsin=B0GQHFJ3PK",

    releaseDate: "2026-03-13T01:00:00Z" // upcoming release
  },
  {
    id: "eirenity",
    title: "Eirenity",
    description: "Guitar / Experimental",
    cover: "/images/eirenity-cover.jpg",

    spotify: "https://open.spotify.com/track/21DbGTefwGFln3OIfD6C0G?si=e3db41a28ffd47c8",
    apple: "https://music.apple.com/us/song/eirenity/1880914148",
    amazon: "https://music.amazon.com/albums/B0GQJ4M7J5?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_7QHPyDmQ9wDVvrmxEjWScfEij&trackAsin=B0GQHYJPCF",

    releaseDate: "2026-03-14T02:00:00Z" // upcoming release
  }
];