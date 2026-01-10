import burstPipesImg from "@/assets/burst-pipes.png";
import blockedDrainsImg from "@/assets/blocked-drains.png";
import boilerIssuesImg from "@/assets/boiler-issues.png";
import drainClearanceImg from "@/assets/drain-clearance.png";

const services = [
  {
    title: "Burst Pipes",
    description: "A burst pipe can cause serious damage within minutes, flooding your home and ruining floors, walls, and belongings. Our emergency team responds rapidly to minimize water damage.",
    bullets: [
      "24/7 emergency response for burst pipe repairs",
      "Fast water shut-off to prevent further damage",
      "Professional pipe replacement and repair",
      "Water damage assessment and prevention advice",
    ],
    image: burstPipesImg,
  },
  {
    title: "Blocked Drains",
    description: "Blocked drains can cause serious issues, from slow water flow to complete backups. Our team clears blockages fast using professional tools and techniques.",
    bullets: [
      "Grease, fat and food buildup in kitchen sinks",
      "Hair, soap and toiletries clogging bathroom drains",
      "Tree roots and debris blocking external drains",
      "Heavy scale deposits restricting water flow",
    ],
    image: blockedDrainsImg,
  },
  {
    title: "Boiler Issues",
    description: "No hot water or heating? We diagnose and fix boiler problems quickly to restore your comfort. Our methods include comprehensive checks and repairs.",
    bullets: [
      "Boiler breakdowns and error code diagnosis",
      "Pilot light and ignition issues",
      "Pressure problems and leaking boilers",
      "Full replacements for severely damaged units",
    ],
    image: boilerIssuesImg,
  },
  {
    title: "Drain Clearance & Maintenance",
    description: "Prevention is key to avoiding costly drain emergencies. Our maintenance services help keep your drains clean by:",
    bullets: [
      "Carrying out regular drain descaling and grease removal",
      "Performing CCTV inspections to identify problems",
      "Providing scheduled maintenance plans for properties",
      "Routine drain cleaning to prevent blockages",
    ],
    image: drainClearanceImg,
  },
  {
    title: "Leaking Taps & Toilets",
    description: "A dripping tap or running toilet wastes water and money. We provide quick, effective repairs to stop leaks and save you from rising bills.",
    bullets: [
      "Washer and valve replacements",
      "Toilet cistern repairs and adjustments",
      "Complete tap overhauls and upgrades",
      "Water-saving fixture recommendations",
    ],
    image: null,
  },
  {
    title: "Overflowing Systems",
    description: "Overflowing tanks and systems need immediate attention to prevent water damage and disruption. Our team handles all overflow emergencies.",
    bullets: [
      "Ball valve and float repairs",
      "Tank and cistern overflow fixes",
      "System pressure adjustments",
      "Preventative maintenance solutions",
    ],
    image: null,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-[var(--space-section)] bg-background">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
            Emergency Services
          </span>
          <h2 className="text-[length:var(--text-h2)] font-bold mb-4 sm:mb-6 text-primary">
            We Handle All Plumbing Emergencies
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From burst pipes to blocked drains – we're equipped to handle any emergency, day or night.
          </p>
        </div>

        {/* Services List - Alternating Layout */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div
                  className={`order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[4/3] w-full rounded-xl sm:rounded-2xl object-cover"
                    />
                  ) : (
                    <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-muted border-2 border-dashed border-border flex items-center justify-center">
                      <span className="text-muted-foreground text-sm sm:text-base">
                        Image Placeholder
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div
                  className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-foreground"
                      >
                        <span className="text-emergency-red mt-1.5 flex-shrink-0">
                          •
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;