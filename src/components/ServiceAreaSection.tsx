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
              
              <Button variant="emergency" size="lg" asChild>
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
      </div>
    </section>
  );
};

export default ServiceAreaSection;
