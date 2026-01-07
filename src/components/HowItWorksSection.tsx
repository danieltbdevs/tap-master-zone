import { Phone, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call or WhatsApp Us",
    description: "Contact us 24/7 via phone or WhatsApp – we answer immediately",
  },
  {
    icon: Truck,
    step: "02",
    title: "We Dispatch a Plumber",
    description: "A local certified plumber is on their way within minutes",
  },
  {
    icon: CheckCircle,
    step: "03",
    title: "Problem Fixed Fast",
    description: "Your emergency is resolved with quality, guaranteed work",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emergency-red/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-emergency-red uppercase tracking-wider mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting emergency plumbing help has never been easier
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emergency-red/50 to-transparent" />
              )}
              
              <div className="text-center space-y-6">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-2xl emergency-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-emergency-red flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
