import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-charcoal relative overflow-hidden reveal">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-header text-center mb-16">
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Get in Touch</h2>
            <div className="section-divider mx-auto" />
            <p className="section-description mx-auto">
              Have a question or want to host an event? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-display text-lg mb-1">Call Us</p>
                    <p className="text-muted-foreground hover:text-primary transition-colors">+91 99200 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-display text-lg mb-1">Email Us</p>
                    <p className="text-muted-foreground hover:text-primary transition-colors">hello@barrelborn.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-display text-lg mb-1">Find Us</p>
                    <p className="text-muted-foreground leading-relaxed">Shop No: 3, Madanlal Dhingra Rd, Panch Pakhdi, Thane West</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm">
                <h4 className="font-display text-xl mb-4">Opening Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Thu</span>
                    <span className="text-foreground font-medium">12:00 PM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fri - Sun</span>
                    <span className="text-foreground font-medium">12:00 PM - 01:30 AM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6 p-8 rounded-3xl border border-border/40 bg-card/50 backdrop-blur-md shadow-2xl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-border/40 focus:border-primary/50 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border/40 focus:border-primary/50 h-12 rounded-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                  <Input placeholder="How can we help?" className="bg-background/50 border-border/40 focus:border-primary/50 h-12 rounded-xl" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                  <Textarea placeholder="Tell us more..." className="bg-background/50 border-border/40 focus:border-primary/50 min-h-[150px] rounded-xl resize-none" />
                </div>

                <Button className="w-full btn-primary glow-gold rounded-xl py-6 text-base font-bold group">
                  <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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