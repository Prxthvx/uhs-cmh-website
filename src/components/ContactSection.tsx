import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Contact Us
        </h2>
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Address</p>
              <p className="text-sm text-foreground">123 Health Avenue, Suite 400<br />Medical District, MD 20000</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Hours</p>
              <p className="text-sm text-foreground">Mon – Fri: 8:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
              <p className="text-sm text-foreground">(555) 123-4567</p>
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <p className="text-sm text-foreground">care@maternahealth.org</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 gap-2">
              <Phone size={16} />
              Call Clinic
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <MapPin size={16} />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
