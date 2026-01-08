import { Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f15] to-[#0a0a0f]" />
      
      <div className="container relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
            <p className="text-lg md:text-xl text-gray-400 max-w-xl">
              Fast, trusted, local emergency plumbing – we're on our way in minutes. No call-out fees, transparent pricing.
            </p>

            {/* Trust Element */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
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
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">GS</span>
                </div>
                Gas Safe Registered
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white">✓</span>
                </div>
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white">£</span>
                </div>
                No Hidden Fees
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Glow effect behind image */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-emergency-red/30 via-emergency-red/10 to-transparent rounded-3xl blur-3xl" />
              <img
                src={plumberHero}
                alt="Professional emergency plumber fixing a burst pipe"
                className="relative w-full max-w-2xl mx-auto rounded-2xl object-cover shadow-2xl shadow-emergency-red/20"
              />
            </div>
            
            {/* Floating Badge - Top Right */}
            <div className="absolute -right-4 top-8 glass-card rounded-2xl p-4 animate-float z-20">
              <div className="text-center">
                <div className="text-3xl font-black text-emergency-red">30</div>
                <div className="text-xs text-gray-400">min avg response</div>
              </div>
            </div>

            {/* Floating Badge - Bottom Left */}
            <div className="absolute -left-4 bottom-8 glass-card rounded-2xl p-4 animate-float z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emergency-red flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Available Now</div>
                  <div className="text-xs text-gray-400">Ready to dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
