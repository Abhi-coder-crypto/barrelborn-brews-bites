import { useState } from "react";
import { Instagram } from "lucide-react";
import video1 from "@/assets/Thane_just_got_itself_a_proper_neighbourhood_bar_and_it_feels__1767360905181.mp4";
import video2 from "@/assets/Ease_into_the_festive_weekend_with_soulful_live_music,_great_b_1767360905181.mp4";
import video3 from "@/assets/✨_BARREL_INTO_2026_at_Thane’s_newest_&_hottest_neighbourhood_b_1767360905182.mp4";

const Gallery = () => {
  const videos = [
    { src: video1, id: "v1" },
    { src: video2, id: "v2" },
    { src: video3, id: "v3" },
  ];

  return (
    <section id="gallery" className="py-12 bg-background relative overflow-hidden reveal">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-25" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Visual Journey</h2>
          <div className="section-divider" />
          <p className="section-description">
            Experience the vibe at Barrelborn
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="aspect-[9/16] rounded-2xl overflow-hidden border border-border/50 bg-black/20"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/barrelborn_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 lg:px-9 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
