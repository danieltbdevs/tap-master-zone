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
    <section className="py-12 sm:py-16 lg:py-28 bg-surface-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-emergency-red/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
            Simple Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Getting emergency plumbing help has never been easier
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 sm:top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-emergency-red/50 to-transparent" />
              )}
              
              <div className="text-center space-y-4 sm:space-y-6">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl emergency-gradient flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-emergency-red flex items-center justify-center text-xs sm:text-sm font-bold">
                    {step.step}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground max-w-xs mx-auto">{step.description}</p>
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
