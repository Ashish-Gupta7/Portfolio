import React from "react";

const videos = [
  {
    title: "Invitation Video Edit 1",
    poster: "/video/poster/Invitation 1.webp",
    preview: "/video/Invitation 1.mp4",
    link: "https://drive.google.com/file/d/1G_qLBVmQYTiCNuOM6EkK2CgN5V8oj5OF/view?usp=drivesdk",
  },
  {
    title: "Invitation Video Edit 2",
    poster: "/video/poster/Invitation 2.webp",
    preview: "/video/Invitation 2.mp4",
    link: "https://drive.google.com/file/d/1GWb6VTm--SJ-UCFYF5SsoeKiRwLrPYXG/view?usp=drivesdk",
  },
  {
    title: "Instagram Reel Edit",
    poster: "/video/poster/IG Reel 1.webp",
    preview: "/video/IG Reel 1.mp4",
    link: "https://drive.google.com/file/d/1GiarI-AXmHKVdpJIhEYmObv2-i-DName/view?usp=drivesdk",
  },
];

const VideoEditing = () => {
  return (
    <div className="relative flex flex-col gap-6 pb-20">
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
              playsInline
              loop
              preload="none"
              poster={video.poster}
              className="w-full h-[180px] object-contain group-hover:brightness-110"
              onMouseOver={(e) => {
                e.target.play().catch((err) => console.log("Play error:", err));
              }}
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

export default VideoEditing;
