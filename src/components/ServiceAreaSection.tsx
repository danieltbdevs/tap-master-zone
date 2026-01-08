import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const areas = [
  "Peterborough City Centre",
  "Werrington",
  "Hampton",
  "Bretton",
  "Orton",
  "Stanground",
  "Fletton",
  "Woodston",
  "Longthorpe",
  "Castor",
  "Eye",
  "Yaxley",
];

const ServiceAreaSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block text-sm font-semibold text-emergency-red uppercase tracking-wider">
                Coverage Area
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Serving Peterborough & Surrounding Areas
              </h2>
              <p className="text-lg text-muted-foreground">
                We cover all of Peterborough and surrounding villages. Not sure if we cover your area? Just call – we'll confirm instantly.
              </p>
              
              <Button size="lg" className="bg-[#1f2937] hover:bg-[#1f2937]/90 text-white" asChild>
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5" />
                  Check if We Cover Your Area
                </a>
              </Button>
            </div>

            {/* Areas List */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-secondary/50 rounded-lg px-4 py-3"
                  >
                    <MapPin className="w-4 h-4 text-emergency-red flex-shrink-0" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
              Emergency Plumber Peterborough
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77766.98663990066!2d-0.3047699!3d52.5695235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f055400b0de5%3A0x9c99c869d3e6823!2sPeterborough%2C%20UK!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peterborough Service Area Map"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a 
              href="https://www.google.com/maps/place/Peterborough,+UK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
