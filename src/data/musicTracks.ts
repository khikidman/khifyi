export interface MusicTrack {
  id: string;
  title: string;
  description?: string;
  embedUrl: string;
}

export const musicTracks = [
  {
    id: "afloat",
    title: "Afloat",
    description: "Ambient / Experimental",
    cover:
      "/images/afloat-cover.jpg", // put your image in public folder
    soundcloudTrackId: "2259822590"
  }
];