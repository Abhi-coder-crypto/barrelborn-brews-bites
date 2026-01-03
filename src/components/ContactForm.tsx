import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal relative overflow-hidden reveal">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="section-header text-center mb-16">
            <span className="section-label text-primary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Contact Us</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">Get in <span className="text-gradient-gold">Touch</span></h2>
            <div className="section-divider mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          <div className="grid lg:grid-cols-5 gap-16 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/5">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-foreground font-display text-xl mb-1.5">Call Us</p>
                    <a href="tel:+919920012345" className="text-muted-foreground hover:text-primary transition-colors text-lg">+91 99200 12345</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/5">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-foreground font-display text-xl mb-1.5">Email Us</p>
                    <a href="mailto:hello@barrelborn.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">hello@barrelborn.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/5">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div className="pt-1">
                    <p className="text-foreground font-display text-xl mb-1.5">Find Us</p>
                    <p className="text-muted-foreground leading-relaxed text-lg">Shop No: 3, Madanlal Dhingra Rd, Panch Pakhdi, Thane West</p>
                  </div>
                </div>
              </div>

              <div className="p-10 rounded-3xl border border-primary/20 bg-card/40 backdrop-blur-md shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/50" />
                <h4 className="font-display text-2xl mb-6 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Opening Hours
                </h4>
                <div className="space-y-4 text-base">
                  <div className="flex justify-between items-center pb-3 border-b border-border/30">
                    <span className="text-muted-foreground">Mon - Thu</span>
                    <span className="text-foreground font-medium">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground font-bold text-primary">Fri - Sun</span>
                    <span className="text-foreground font-bold">12:00 PM - 01:30 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-8 p-10 rounded-[2.5rem] border border-primary/20 bg-card/60 backdrop-blur-xl shadow-2xl relative" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background/40 border-primary/10 focus:border-primary/50 h-14 rounded-2xl text-lg px-6" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/40 border-primary/10 focus:border-primary/50 h-14 rounded-2xl text-lg px-6" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Subject</label>
                  <Input placeholder="How can we help?" className="bg-background/40 border-primary/10 focus:border-primary/50 h-14 rounded-2xl text-lg px-6" />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 ml-1">Message</label>
                  <Textarea placeholder="Tell us more..." className="bg-background/40 border-primary/10 focus:border-primary/50 min-h-[180px] rounded-2xl text-lg p-6 resize-none" />
                </div>

                <Button className="w-full btn-primary glow-gold rounded-2xl py-8 text-lg font-bold group transition-all duration-500 hover:scale-[1.02]">
                  <Send className="w-6 h-6 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;