import { Phone, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-dark to-background" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emergency-red/10 border border-emergency-red/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-emergency-red rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emergency-red">24/7 Emergency Service</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Peterborough Emergency Plumbers
              <span className="block text-gradient">24/7 Same-Day Response</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Fast, trusted, local emergency plumbing – we're on our way in minutes. No call-out fees, transparent pricing.
            </p>

            {/* Trust Element */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">• 200+ local reviews</span>
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
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold">GS</span>
                </div>
                Gas Safe Registered
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                Fully Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs">£</span>
                </div>
                No Hidden Fees
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emergency-red/20 via-transparent to-emergency-red/10 rounded-3xl blur-3xl" />
              <img
                src={plumberHero}
                alt="Professional emergency plumber ready to help"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/4 glass-card rounded-2xl p-4 animate-float">
              <div className="text-center">
                <div className="text-3xl font-black text-emergency-red">30</div>
                <div className="text-xs text-muted-foreground">min avg response</div>
              </div>
            </div>

            {/* Another Badge */}
            <div className="absolute -left-4 bottom-1/4 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emergency-red flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Available Now</div>
                  <div className="text-xs text-muted-foreground">Ready to dispatch</div>
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
