import React from "react";

const posts = [
  {
    title: "Shree Ji Solar",
    images: [
      "/images/posts/Shreeji 1.webp",
      "/images/posts/Shreeji 2.webp",
      "/images/posts/Shreeji 3.webp",
    ],
  },
  {
    title: "Hotel Ganesh Palace",
    images: [
      "/images/posts/Hotel Ganesh Palace 1.webp",
      "/images/posts/Hotel Ganesh Palace 2.webp",
    ],
  },
];

const SocialMedia = () => {
  return (
    <div className="relative flex flex-col gap-6 pb-20 -z-10">
      {" "}
      {/* add padding bottom for button */}
      <h3 className="text-white text-lg font-semibold">Social Media Designs</h3>
      <div className="flex flex-col gap-4 max-[430px]:items-center">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white/10 px-6 py-4 rounded-lg shadow-md"
          >
            <p className="text-white/80 text-sm mb-6">{post.title}</p>
            <div className="mb-2 flex flex-wrap gap-2">
              {post.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Post ${index + 1} Image ${imgIndex + 1}`}
                  className="w-full h-32 object-contain rounded mb-2"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
