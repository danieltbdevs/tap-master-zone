import { Clock, Shield, BadgeCheck, PoundSterling, Zap, Star } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/7 Emergency Response",
    description: "We're available around the clock, 365 days a year",
  },
  {
    icon: Shield,
    title: "Fully Certified Engineers",
    description: "Local, experienced, and fully qualified plumbers",
  },
  {
    icon: BadgeCheck,
    title: "Gas Safe Registered",
    description: "All work compliant with UK safety standards",
  },
  {
    icon: PoundSterling,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises – honest quotes",
  },
  {
    icon: Zap,
    title: "Fast Dispatch Times",
    description: "Average 30-minute response in Peterborough",
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Trusted by 200+ local homeowners",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-28">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Trusted Local Emergency Plumbers
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                When you have a plumbing emergency, you need someone you can trust to arrive fast and fix it right. That's us.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emergency-red/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emergency-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">30</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Min Response</div>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">4.9</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
