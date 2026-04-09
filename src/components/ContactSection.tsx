import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import cmhExterior from "@/assets/cmh exterior.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Contact Us
        </h2>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          
          {/* Image Column */}
          <div className="md:w-1/2 relative min-h-[300px]">
            <img 
              src={cmhExterior} 
              alt="Chenango Memorial Hospital Exterior" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Details Column */}
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-6">UHS Chenango Memorial Hospital</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</p>
                <p className="text-sm text-foreground">
                  179 N Broad St<br />
                  Norwich, NY 13815
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
                <p className="text-sm text-foreground">
                  Open 24 Hours<br />
                  Emergency Services Available
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm text-foreground">(607) 337-4111</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                <p className="text-sm text-foreground">info@uhs.org</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button className="flex-1 gap-2" asChild>
                <a href="tel:6073374111">
                  <Phone size={16} />
                  Call Hospital
                </a>
              </Button>
              <Button variant="outline" className="flex-1 gap-2" asChild>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=UHS+Chenango+Memorial+Hospital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;