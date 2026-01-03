import { MapPin } from "lucide-react";

const MapSection = () => {
  // Google Maps Embed URL with satellite view (t=k)
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.915003554472!2d72.96420557520845!3d19.19881478203051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9195d8527a9%3A0xe67f5399587a8b4b!2sBarrelborn!5e1!3m2!1sen!2sin!4v1735824000000!5m2!1sen!2sin";

  return (
    <section id="location" className="relative py-12 md:py-24 overflow-hidden bg-background reveal">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium animate-fade-in mx-auto lg:mx-0">
              <MapPin className="w-3.5 h-3.5" />
              <span>Our Location</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-[1.2] mx-auto lg:mx-0">
              Visit Us in <span className="text-primary italic">Thane</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nestled in the bustling neighborhood of Panch Pakhdi, BarrelBorn stands as a testament to the art of fine dining and crafted brewing. Our space is designed to be your neighborhood sanctuary, where the clinking of glasses and the aroma of gourmet cuisine create the perfect backdrop for your stories.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border/40">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-display text-xl mb-1">Address</p>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">Shop No: 3, Madanlal Dhingra Rd, Panch Pakhdi, Thane West, Maharashtra 400602</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl h-[400px] lg:h-[450px] w-full max-w-[550px] mx-auto lg:ml-auto group">
            {/* Overlay to match site aesthetics */}
            <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
            
            <iframe
              src={embedUrl}
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
      </div>
    </section>
  );
};

export default MapSection;
