import { MapPin, ExternalLink } from "lucide-react";

const MapSection = () => {
  const mapUrl = "https://www.google.com/maps/reserve/v/dine/c/nRwh5U7Ank8?source=pa&opi=89978449&hl=en-IN&gei=qvVXac2oMNbZ1e8P_4TeyQ8&sourceurl=https://www.google.com/search?q%3Dbarrel%2Bborn%26oq%3Dbarrel%2Bborn%26gs_lcrp%3DEgZjaHJvbWUyDggAEEUYJxg5GIAEGIoFMgwIARAjGCcYgAQYigUyBwgCEAAYgAQyBwgDEAAYgAQyCAgEEAAYFhgeMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINDM4MWowajSoAgCwAgE%26sourceid%3Dchrome%26ie%3DUTF-8";
  
  // Google Maps Embed URL with satellite view (t=k)
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9250550505!2d72.9647243!3d19.1989437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9195d8527a9%3A0xe67f5399587a8b4b!2sBarrelborn!5e1!3m2!1sen!2sin!4v1735824000000!5m2!1sen!2sin&t=k";

  return (
    <section id="location" className="relative py-20 overflow-hidden bg-background">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4 animate-fade-in">
              <MapPin className="w-3.5 h-3.5" />
              <span>Our Location</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
              Visit Us in <span className="text-primary italic">Thane</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Find us in the heart of Panch Pakhdi, Thane. Experience the perfect blend of craft beer and culinary excellence in our neighborhood bar.
            </p>
          </div>
          
          <a 
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-gold-light transition-all duration-300 font-medium text-sm group"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-2xl h-[450px] max-w-4xl mx-auto w-full group">
          {/* Overlay to match site aesthetics */}
          <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.9790696773539!2d72.9642055695039!3d19.198814766863077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9195d8527a9%3A0xe67f5399587a8b4b!2sBarrelborn!5e1!3m2!1sen!2sin!4v1735824000000!5m2!1sen!2sin&t=k"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[0.2] contrast-[1.1] brightness-[0.9] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
