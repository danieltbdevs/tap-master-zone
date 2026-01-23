import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicianImage from "@/assets/technician-hero.png";
const AboutSection = () => {
  return <section className="py-[var(--space-section)] bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Image - responsive with aspect ratio */}
          <div className="relative">
            <img alt="T&G Services Professional Technician" className="w-full h-auto max-w-full rounded-lg shadow-xl" src="/lovable-uploads/d6ce01fa-362f-45e9-adf4-bbc346cc5699.png" />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-[length:var(--text-3xl)] lg:text-[length:var(--text-4xl)] font-bold text-foreground uppercase tracking-tight">
              Searching for Plumbers Near Me?
            </h2>
            
            <p className="text-muted-foreground text-[length:var(--text-lg)]">
              Are you searching for Plumbers Near Me? Looking for a professional plumber 
              in your area that can help with a project?
            </p>
            
            <p className="text-muted-foreground text-[length:var(--text-base)]">
              Have you sprung a leak at home or work? T&G Services offers you experienced 
              professional technicians that can resolve all types of commercial and 
              residential plumbing challenges as well as offering the expertise and 
              knowledge you need.
            </p>
            
            <p className="text-muted-foreground text-[length:var(--text-base)]">
              We offer Emergency Plumber Services from the small and simple jobs to the 
              large and complex. Our plumbers track record and references are outstanding. 
              Our plumbers serve the residential and commercial sector in your area and 
              the surrounding areas.
            </p>

            <Button variant="emergency" size="lg" className="w-full sm:w-auto gap-2 min-h-[48px] text-sm sm:text-base px-4 sm:px-6" asChild>
              <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="font-bold hidden sm:inline">PLEASE CALL US FOR EMERGENCY SERVICE</span>
                <span className="font-bold sm:hidden">CALL FOR EMERGENCY</span>
              </a>
            </Button>

            {/* Services List */}
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Plumbing Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-primary">
                <ul className="space-y-1">
                  <li className="hover:underline cursor-pointer">• Plumbing Repair</li>
                  <li className="hover:underline cursor-pointer">• Bathroom Plumbing</li>
                  <li className="hover:underline cursor-pointer">• Water Heaters</li>
                  <li className="hover:underline cursor-pointer">• Drain Cleaning</li>
                  <li className="hover:underline cursor-pointer">• Faucet Repair & Replacement</li>
                  <li className="hover:underline cursor-pointer">• Line Repairs & Installation</li>
                  <li className="hover:underline cursor-pointer">• Garbage Disposals</li>
                  <li className="hover:underline cursor-pointer">• Kitchen Plumbing</li>
                </ul>
                <ul className="space-y-1">
                  <li className="hover:underline cursor-pointer">• Pipe Breaks</li>
                  <li className="hover:underline cursor-pointer">• Sink & Tub Replacement</li>
                  <li className="hover:underline cursor-pointer">• Slab Leaks & Gas Leaks</li>
                  <li className="hover:underline cursor-pointer">• Sump Pumps</li>
                  <li className="hover:underline cursor-pointer">• Tankless Water Heaters</li>
                  <li className="hover:underline cursor-pointer">• Water Filtration Systems</li>
                  <li className="hover:underline cursor-pointer">• Yard Line & Water Leaks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;