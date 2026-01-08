import { Phone, MessageCircle, Star, Shield, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-dramatic.webp";

const HeroSection = () => {
  return (
    <section className="relative lg:min-h-screen flex items-center overflow-hidden bg-[#0B0C10]">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#0B0C10] to-[#1a0a0a]" />
      
      <div className="container relative z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center lg:py-20">
          {/* Left Content - Shows first on mobile */}
          <div className="space-y-6 lg:space-y-8 fade-in order-1 lg:order-1 pt-4 lg:pt-0">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-emergency-red">
                24/7 Emergency Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              <span className="text-white">Peterborough</span>
              <br />
              <span className="text-emergency-red">Emergency</span>
              <br />
              <span className="text-white">Plumbers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-md leading-relaxed">
              Fast, trusted, local emergency plumbing – we're on our way in minutes. 
              <span className="text-white font-medium"> No call-out fees, transparent pricing.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="bg-emergency-red hover:bg-emergency-red/90 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now – 24/7
                </a>
              </Button>
              <Button 
                className="bg-[#1F2937] hover:bg-[#374151] text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="#callback-form">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Callback
                </a>
              </Button>
            </div>

            {/* Social Proof Row */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#0B0C10] flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs text-white font-semibold">{['JD', 'MK', 'RS', 'AL'][i]}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-semibold text-sm sm:text-base ml-1">4.9/5</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-400">200+ local reviews</span>
              </div>
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#1F2937] rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emergency-red" />
                <span className="text-xs sm:text-sm text-white">Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#1F2937] rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emergency-red" />
                <span className="text-xs sm:text-sm text-white">Fully Insured</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-[#1F2937] rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emergency-red" />
                <span className="text-xs sm:text-sm text-white">Same-Day Response</span>
              </div>
            </div>
          </div>

          {/* Right Image - Shows second on mobile */}
          <div className="relative order-2 lg:order-2 h-[280px] sm:h-[350px] lg:h-[600px] -mx-4 sm:mx-0">
            <div className="absolute inset-0 overflow-hidden sm:rounded-lg">
              <img 
                src={plumberHero} 
                alt="Professional emergency plumber fixing a burst pipe" 
                className="w-full h-full object-cover object-top lg:object-center"
              />
              {/* Gradient fade into background */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0B0C10]/30 lg:to-[#0B0C10]/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/20 via-transparent to-transparent lg:from-[#0B0C10]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
