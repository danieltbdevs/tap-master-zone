import { Phone, Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-action.png";
const HeroSection = () => {
  return <section className="relative lg:min-h-screen flex items-center overflow-hidden bg-[#0B0C10]">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#0B0C10] to-[#1a0a0a]" />
      
      <div className="container relative z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center shadow-2xl lg:py-0">
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
              <Button className="border-2 border-gray-700 bg-transparent hover:bg-gray-800/50 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[48px]" asChild>
                <a href="#callback-form">
                  Request Callback
                </a>
              </Button>
            </div>

            {/* Social Proof Row */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => <div key={i} className="w-10 h-10 rounded-full bg-emergency-red border-2 border-[#0B0C10] flex items-center justify-center">
                    <span className="text-xs text-white font-semibold">{['JD', 'MK', 'RS', 'AL'][i]}</span>
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

            {/* Trust badges - simple text with checkmarks */}
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emergency-red" />
                <span className="text-sm text-white">Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emergency-red" />
                <span className="text-sm text-white">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-emergency-red" />
                <span className="text-sm text-white">Same-Day Response</span>
              </div>
            </div>
          </div>

          {/* Right Image - with decorative red glow */}
          <div className="order-2 lg:order-2">
            <div className="relative mt-8 lg:mt-0">
              {/* Red glow effect on left side of image */}
              <div className="absolute -left-8 top-1/4 bottom-1/4 w-24 bg-gradient-to-r from-emergency-red/40 to-transparent blur-3xl" />
              <div className="relative z-10">
                <img 
                  src={plumberHero} 
                  alt="Professional Plumber" 
                  className="w-full max-w-lg mx-auto lg:max-w-none rounded-2xl object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;