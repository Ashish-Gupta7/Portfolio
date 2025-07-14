import React from "react";

const videos = [
  {
    title: "Invitation Video Edit 1",
    poster: "/video/poster/Blue Modern Business Technology YouTube Intro.webp",
    preview: "/video/Blue Modern Business Technology YouTube Intro (1).mp4",
    link: "https://drive.google.com/file/d/1G_qLBVmQYTiCNuOM6EkK2CgN5V8oj5OF/view?usp=drivesdk",
  },
  {
    title: "Invitation Video Edit 2",
    poster:
      "/video/poster/Red and Gold Traditional Indian Wedding Invitation Instagram Reel.webp",
    preview:
      "/video/Red and Gold Traditional Indian Wedding Invitation Instagram Reel (1).mp4",
    link: "https://drive.google.com/file/d/1GWb6VTm--SJ-UCFYF5SsoeKiRwLrPYXG/view?usp=drivesdk",
  },
  {
    title: "Instagram Reel Edit",
    poster: "/video/poster/1.webp",
    preview: "/video/1 (1).mp4",
    link: "https://drive.google.com/file/d/1GiarI-AXmHKVdpJIhEYmObv2-i-DName/view?usp=drivesdk",
  },
];

const VideoGallery = () => {
  return (
    <div className="relative flex flex-col gap-6 pb-20 -z-10">
      <h3 className="text-white text-lg font-semibold">Video Edits</h3>

      <div className="flex flex-wrap gap-5 max-[430px]:flex-col max-[430px]:items-center">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer group"
            onClick={() => window.open(video.link, "_blank")}
          >
            <video
              src={video.preview}
              muted
              loop
              preload="none"
              poster={video.poster}
              className="w-full h-[180px] object-contain group-hover:brightness-110"
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => {
                e.target.pause();
                e.target.currentTime = 0;
              }}
            />
            <div className="p-3">
              <p className="text-white/90 text-sm">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
