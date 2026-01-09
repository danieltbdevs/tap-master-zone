import { Droplets, Wrench, CircleOff, Flame, AlertTriangle, Search } from "lucide-react";
const services = [{
  icon: Droplets,
  title: "Burst Pipes",
  description: "Rapid emergency repairs to prevent water damage"
}, {
  icon: Wrench,
  title: "Leaking Taps & Toilets",
  description: "Quick fixes to stop leaks and save water"
}, {
  icon: CircleOff,
  title: "Blocked Drains",
  description: "Professional drain clearing and unblocking"
}, {
  icon: Flame,
  title: "Boiler Issues",
  description: "No hot water? We'll get it running fast"
}, {
  icon: AlertTriangle,
  title: "Overflowing Systems",
  description: "Emergency overflow prevention & repair"
}, {
  icon: Search,
  title: "Rapid Diagnosis",
  description: "Find and fix the problem quickly"
}];
const ServicesSection = () => {
  return <section className="py-12 sm:py-16 lg:py-28 bg-surface-dark mx-0">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
            Emergency Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            We Handle All Plumbing Emergencies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From burst pipes to blocked drains – we're equipped to handle any emergency, day or night.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => <div key={index} className="group glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 hover-lift cursor-default" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-emergency-red/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-emergency-red/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-emergency-red" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;