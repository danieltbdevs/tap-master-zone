import { Phone, MessageCircle, Star, Shield, Clock, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-dramatic.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      
      <div className="container relative z-10 py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:min-h-screen lg:py-20">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 fade-in pt-4 lg:pt-0">
            
            {/* Social Proof Row */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">{['JD', 'MK', 'RS', 'AL'][i]}</span>
                </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-semibold text-sm ml-1">4.9/5</span>
                </div>
                <span className="text-sm text-muted-foreground">200+ local reviews</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-emergency-red/10 border border-emergency-red/20 rounded-full px-4 py-2">
              <span className="text-sm font-semibold tracking-wide uppercase text-emergency-red">
                24/7 Emergency Service
              </span>
            </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
            <span className="text-foreground">Peterborough</span>
            <br />
            <span className="text-emergency-red">Emergency</span>
            <br />
            <span className="text-foreground">Plumbers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            Fast, trusted, local emergency plumbing – we're on our way in minutes. 
            <span className="text-foreground font-medium"> No call-out fees, transparent pricing.</span>
          </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
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
              className="bg-muted hover:bg-muted/80 text-foreground border border-border rounded-full px-8 py-6 text-lg font-semibold"
              asChild
            >
              <a href="#callback-form">
                <MessageCircle className="w-5 h-5 mr-2" />
                Request Callback
              </a>
            </Button>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2">
              <Shield className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-foreground">Gas Safe Registered</span>
            </div>
            <div className="flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2">
              <BadgeCheck className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-foreground">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-emergency-red" />
              <span className="text-sm text-foreground">Same-Day Response</span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[350px] sm:h-[450px] lg:h-[650px] -mx-4 sm:mx-0">
          <div className="absolute inset-0 overflow-hidden sm:rounded-2xl">
            <img 
              src={plumberHero} 
              alt="Professional emergency plumber fixing a burst pipe" 
              className="w-full h-full object-cover object-top lg:object-center"
            />
            {/* Subtle gradient blends */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
