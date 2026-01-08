import { Phone, MessageCircle, Star, Shield, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-dramatic.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-bleed Background Image */}
      <div className="absolute inset-0">
        <img 
          src={plumberHero} 
          alt="Professional emergency plumber fixing a burst pipe" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Centered Content */}
      <div className="container relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          
          {/* Social Proof Row */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-xs sm:text-sm text-white font-semibold">{['JD', 'MK', 'RS', 'AL'][i]}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-semibold text-sm ml-1">4.9/5</span>
              </div>
              <span className="text-sm text-white/70">200+ local reviews</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-emergency-red/20 border border-emergency-red/30 rounded-full px-4 py-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-emergency-red">
              24/7 Emergency Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Peterborough</span>
            <br />
            <span className="text-emergency-red">Emergency</span>{" "}
            <span className="text-white">Plumbers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Fast, trusted, local emergency plumbing – we're on our way in minutes. 
            <span className="text-white font-medium"> No call-out fees, transparent pricing.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              className="bg-emergency-red hover:bg-emergency-red/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-emergency-red/30"
              asChild
            >
              <a href="tel:+441234567890">
                <Phone className="w-5 h-5 mr-2" />
                Call Now – 24/7
              </a>
            </Button>
            <Button 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              asChild
            >
              <a href="#callback-form">
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Callback
              </a>
            </Button>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-white">Gas Safe Registered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <BadgeCheck className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-white">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-white">Same-Day Response</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
