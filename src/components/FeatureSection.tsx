import { Phone, MessageCircle, Zap, Percent, Clock, Shield, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import plumberHero from "@/assets/plumber-hero-dramatic.webp";

const features = [
  {
    icon: Zap,
    title: "24/7 Response",
    description: "We serve all areas of Peterborough",
  },
  {
    icon: Percent,
    title: "Senior Discounts",
    description: "10% off for pensioners",
  },
  {
    icon: Clock,
    title: "Fast Dispatch",
    description: "On-site in under 1 hour",
  },
  {
    icon: Shield,
    title: "Lifetime Warranty",
    description: "Labour guaranteed for life",
  },
  {
    icon: FileText,
    title: "Free Estimates",
    description: "Reliable, friendly, no hidden fees",
  },
  {
    icon: CreditCard,
    title: "Interest-Free Options",
    description: "£0 deposit on approved plans",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-black py-16 px-8">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
                Peterborough Emergency Plumbers{" "}
                <span className="text-[#d62828]">You Can Trust</span>
              </h2>
              <p className="text-gray-500 mt-4 text-lg">
                Available 24/7 – Local, Certified & Fully Equipped for Any Emergency
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#111111] border border-[#d62828]/30 rounded-xl p-5 text-center hover:border-[#d62828] transition-colors"
                >
                  <div className="flex justify-center mb-3">
                    <feature.icon className="w-10 h-10 text-[#fbbf24]" />
                  </div>
                  <h3 className="text-[#d62828] font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-[#d62828] hover:bg-[#d62828]/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="tel:01733123456">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 01733-123456
                </a>
              </Button>
              <Button
                className="bg-black hover:bg-[#111111] text-white border-2 border-white rounded-full px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#callback-form">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Request Callback
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <img
                src={plumberHero}
                alt="Professional plumber fixing pipes"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle red glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
              <div className="absolute inset-0 bg-[#d62828]/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
