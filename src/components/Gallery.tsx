import { useState } from "react";
import { Instagram } from "lucide-react";
import galleryBeer from "@/assets/gallery-beer.jpg";
import galleryFood from "@/assets/gallery-food.jpg";
import galleryCocktail from "@/assets/gallery-cocktail.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryPrivate from "@/assets/gallery-private.jpg";
import galleryEvents from "@/assets/gallery-events.jpg";

const galleryImages = [
  {
    id: 1,
    title: "Craft Beer Selection",
    category: "drinks",
    image: galleryBeer,
  },
  {
    id: 2,
    title: "Gourmet Prawns",
    category: "food",
    image: galleryFood,
  },
  {
    id: 3,
    title: "Bar Ambiance",
    category: "interior",
    image: galleryInterior,
  },
  {
    id: 4,
    title: "Signature Cocktails",
    category: "drinks",
    image: galleryCocktail,
  },
  {
    id: 5,
    title: "Private Dining",
    category: "interior",
    image: galleryPrivate,
  },
  {
    id: 6,
    title: "Live Events",
    category: "events",
    image: galleryEvents,
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
      <div className="absolute inset-0 bg-pattern opacity-25" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/4 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2 className="section-title">Visual Journey</h2>
          <div className="section-divider" />
          <p className="section-description">
            A glimpse into the Barrelborn experience
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 lg:mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 sm:px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-card/80 text-muted-foreground hover:text-foreground border border-border/50 hover:border-primary/40 backdrop-blur-sm"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Image */}
              <img 
                src={image.image} 
                alt={image.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-background/70 backdrop-blur-md rounded-full border border-border/30 group-hover:border-primary/30 transition-colors duration-300">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{image.category}</span>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex items-end p-6 lg:p-7">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <h3 className="font-display text-xl lg:text-2xl text-foreground mb-1">{image.title}</h3>
                  <span className="text-sm text-primary/80 uppercase tracking-wider">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-14 lg:mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 lg:px-9 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 font-medium"
          >
            <Instagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
