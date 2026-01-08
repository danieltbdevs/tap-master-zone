import { Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Background Image - Full width with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={plumberHero} 
          alt="Professional emergency plumber fixing a burst pipe" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Left dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent" />
        {/* Additional top/bottom gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]/30" />
      </div>
      
      <div className="container relative z-10 py-16 lg:py-0">
        <div className="max-w-2xl">
          {/* Content - Left Side */}
          <div className="space-y-8 fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emergency-red/10 border border-emergency-red/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-emergency-red rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emergency-red">24/7 Emergency Service</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              Peterborough Emergency Plumbers
              <span className="block text-gradient">24/7 Same-Day Response</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">
              Fast, trusted, local emergency plumbing – we're on our way in minutes. No call-out fees, transparent pricing.
            </p>

            {/* Trust Element */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5</span>
              <span className="text-gray-400">• 200+ local reviews</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5" />
                  Call Now – 24/7
                </a>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <a href="#callback-form">
                  <MessageCircle className="w-5 h-5" />
                  Request Callback
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">GS</span>
                </div>
                Gas Safe Registered
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white">£</span>
                </div>
                No Hidden Fees
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;