import { Phone, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicianVan from "@/assets/technician-van.png";
const HeroSection = () => {
  return <section id="hero" className="relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden bg-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-secondary/20" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content - Shows first on mobile */}
          <div className="space-y-6 lg:space-y-8 fade-in order-1 lg:order-1 pt-4 lg:pt-0">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[length:var(--text-sm)] font-semibold tracking-widest uppercase text-emergency-red">
                24/7 Emergency Service
              </span>
            </div>

            {/* Headline - fluid typography */}
            <h1 className="text-[length:var(--text-hero)] font-black leading-[1.1] tracking-tight">
              <span className="text-white">Peterborough</span>
              <br />
              <span className="text-emergency-red">Emergency</span>
              <br />
              <span className="text-white">Plumbers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[length:var(--text-lg)] text-gray-400 max-w-md leading-relaxed">
              Fast, trusted, local emergency plumbing – we're on our way in minutes. 
              <span className="text-white font-medium"> No call-out fees, transparent pricing.</span>
            </p>

            {/* CTAs - 44px+ touch targets */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-emergency-red hover:bg-emergency-red/90 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[48px]" asChild>
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now – 24/7
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[48px] border-2 border-white/50 text-white hover:bg-white/10" asChild>
                <a href="#callback-form">
                  Request Callback
                </a>
              </Button>
            </div>

            {/* Social Proof Row */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emergency-red to-red-700 border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs text-white font-semibold">{['JD', 'MK', 'RS', 'AL'][i]}</span>
                  </div>)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-white font-semibold text-sm sm:text-base ml-1">4.9/5</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">200+ local reviews</span>
              </div>
            </div>

            {/* Trust badges - pill style matching Handymen page */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              {["Gas Safe Registered", "Fully Insured", "Same-Day Service"].map(badge => <span key={badge} className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary text-[10px] sm:text-xs font-medium text-white">
                  <CheckCircle className="w-3 h-3 text-emergency-red" />
                  {badge}
                </span>)}
            </div>
          </div>

          {/* Right Image - with wrapping glow effect like Handymen page */}
          <div className="order-2 lg:order-2">
            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img alt="Professional Technician with Service Van" className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl" src="/lovable-uploads/21416fac-4dd9-463c-b135-0260a41ef68f.png" />
              </div>
              {/* Glow effect wrapping around image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emergency-red/20 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;