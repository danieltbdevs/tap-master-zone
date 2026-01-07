import { Droplets, Wrench, CircleOff, Flame, AlertTriangle, Search } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Burst Pipes",
    description: "Rapid emergency repairs to prevent water damage",
  },
  {
    icon: Wrench,
    title: "Leaking Taps & Toilets",
    description: "Quick fixes to stop leaks and save water",
  },
  {
    icon: CircleOff,
    title: "Blocked Drains",
    description: "Professional drain clearing and unblocking",
  },
  {
    icon: Flame,
    title: "Boiler Issues",
    description: "No hot water? We'll get it running fast",
  },
  {
    icon: AlertTriangle,
    title: "Overflowing Systems",
    description: "Emergency overflow prevention & repair",
  },
  {
    icon: Search,
    title: "Rapid Diagnosis",
    description: "Find and fix the problem quickly",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-emergency-red uppercase tracking-wider mb-4">
            Emergency Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We Handle All Plumbing Emergencies
          </h2>
          <p className="text-lg text-muted-foreground">
            From burst pipes to blocked drains – we're equipped to handle any emergency, day or night.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-8 hover-lift cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-emergency-red/10 flex items-center justify-center mb-6 group-hover:bg-emergency-red/20 transition-colors">
                <service.icon className="w-7 h-7 text-emergency-red" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
