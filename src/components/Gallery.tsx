import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Craft Beer Selection",
    category: "drinks",
    gradient: "from-amber-900/80 to-amber-700/60",
  },
  {
    id: 2,
    title: "Gourmet Dishes",
    category: "food",
    gradient: "from-orange-900/80 to-red-800/60",
  },
  {
    id: 3,
    title: "Bar Ambiance",
    category: "interior",
    gradient: "from-stone-900/80 to-zinc-800/60",
  },
  {
    id: 4,
    title: "Signature Cocktails",
    category: "drinks",
    gradient: "from-rose-900/80 to-pink-800/60",
  },
  {
    id: 5,
    title: "Private Dining",
    category: "interior",
    gradient: "from-slate-900/80 to-gray-800/60",
  },
  {
    id: 6,
    title: "Live Events",
    category: "events",
    gradient: "from-purple-900/80 to-indigo-800/60",
  },
];

const filters = ["All", "Drinks", "Food", "Interior", "Events"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="gallery" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30" />

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm tracking-[0.3em] uppercase">Gallery</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Visual Journey
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A glimpse into the Barrelborn experience
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient Background (placeholder for actual images) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient}`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-pattern opacity-20" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-display text-2xl text-foreground mb-2">{image.title}</h3>
                  <span className="text-sm text-primary uppercase tracking-wider">{image.category}</span>
                </div>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full">
                <span className="text-xs text-primary uppercase tracking-wider">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
