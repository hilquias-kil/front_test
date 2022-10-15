import { useState } from "react";

export const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  return !showVideo ? (
    <button
      type="button"
      aria-label="video palyer"
      onClick={() => setShowVideo(true)}
      style={{ padding: 0, border: 0, backgroundColor: "transparent" }}
    >
      <img
        src="/images/placeholder-video.webp"
        alt="video"
        width="400"
        height="220"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </button>
  ) : (
    <iframe
      width="400"
      height="220"
      src="https://www.youtube.com/embed/vjI-EaODACY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      style={{
        width: "100%",
      }}
    ></iframe>
  );
};
