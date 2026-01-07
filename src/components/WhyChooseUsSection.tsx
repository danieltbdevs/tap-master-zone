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
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-sm font-semibold text-emergency-red uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Trusted Local Emergency Plumbers
              </h2>
              <p className="text-lg text-muted-foreground">
                When you have a plumbing emergency, you need someone you can trust to arrive fast and fix it right. That's us.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emergency-red/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-emergency-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl font-black text-emergency-red mb-2">24/7</div>
                <div className="text-muted-foreground">Availability</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl font-black text-emergency-red mb-2">30</div>
                <div className="text-muted-foreground">Min Response</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl font-black text-emergency-red mb-2">200+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center hover-lift">
                <div className="text-5xl font-black text-emergency-red mb-2">4.9</div>
                <div className="text-muted-foreground">Star Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
