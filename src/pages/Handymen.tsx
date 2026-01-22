import { Phone, PhoneCall, Clock, Shield, BadgeCheck, PoundSterling, Zap, Star, Wrench, Hammer, PaintBucket, Home, DoorOpen, TreePine, MapPin, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import Footer from "@/components/Footer";
import technicianImage from "@/assets/technician-hero.png";

// Handyman Services Data
const handymanServices = [
  {
    icon: Home,
    title: "Home Repairs",
    description: "From squeaky doors to broken fixtures, we handle all general home repairs quickly and professionally.",
    bullets: ["Door adjustments & repairs", "Lock fitting & repairs", "Shelving installation", "General fixture repairs"],
  },
  {
    icon: Wrench,
    title: "Furniture Assembly",
    description: "Flat-pack frustration? Let us handle it. We assemble all types of furniture efficiently and correctly.",
    bullets: ["Flat-pack assembly", "Wardrobes & beds", "Office furniture", "Outdoor furniture"],
  },
  {
    icon: PaintBucket,
    title: "Painting & Decorating",
    description: "Refresh your space with professional painting services, from touch-ups to complete room makeovers.",
    bullets: ["Interior painting", "Feature walls", "Touch-up work", "Wallpaper removal"],
  },
  {
    icon: Hammer,
    title: "Flooring Installation",
    description: "Quality flooring installation and repairs to transform your home's look and feel.",
    bullets: ["Laminate flooring", "Vinyl installation", "Floor repairs", "Threshold fitting"],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "Expert fitting and repairs for doors and windows to improve security and energy efficiency.",
    bullets: ["Door hanging", "Lock installation", "Draught-proofing", "Window repairs"],
  },
  {
    icon: TreePine,
    title: "Garden & Outdoor",
    description: "Keep your outdoor space in top shape with our garden and exterior maintenance services.",
    bullets: ["Fence repairs", "Shed assembly", "Decking repairs", "Outdoor fixtures"],
  },
];

// Why Choose Us Features
const features = [
  {
    icon: Clock,
    title: "Same-Day Availability",
    description: "Flexible scheduling to fit your busy life",
  },
  {
    icon: Shield,
    title: "Vetted & Insured",
    description: "Fully insured professionals you can trust",
  },
  {
    icon: BadgeCheck,
    title: "Multi-Skilled Technicians",
    description: "One call handles multiple jobs",
  },
  {
    icon: PoundSterling,
    title: "Transparent Pricing",
    description: "No hidden fees, honest quotes upfront",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Quality work completed on time",
  },
  {
    icon: Star,
    title: "5-Star Reviews",
    description: "Trusted by 200+ local homeowners",
  },
];

// FAQ Data
const faqs = [
  {
    question: "What type of jobs do you handle?",
    answer: "We handle all property maintenance and repair tasks including furniture assembly, painting, flooring, door hanging, shelving, fence repairs, and general fixes. No job is too small!",
  },
  {
    question: "Do you provide your own tools and materials?",
    answer: "Yes, our handymen come fully equipped with professional tools. We can also source materials for you, or you can provide them yourself – whichever works best for you.",
  },
  {
    question: "How do I get a quote?",
    answer: "Simply call us or request a callback. For most jobs, we can provide an accurate quote over the phone. For larger projects, we offer free on-site assessments.",
  },
  {
    question: "Can you work on commercial properties?",
    answer: "Absolutely! We serve both residential and commercial clients across Peterborough. From office repairs to retail maintenance, we've got you covered.",
  },
  {
    question: "What if I'm not satisfied with the work?",
    answer: "Your satisfaction is our priority. All work comes with a satisfaction guarantee. If something isn't right, we'll come back and fix it at no extra cost.",
  },
];

// Service Areas
const areas = ["Peterborough City Centre", "Werrington", "Hampton", "Bretton", "Orton", "Stanground", "Fletton", "Woodston", "Longthorpe", "Castor", "Eye", "Yaxley"];

// Handyman Services List
const handymanServicesList = [
  "Home Repairs",
  "Furniture Assembly",
  "Painting & Decorating",
  "Flooring Installation",
  "Door Hanging",
  "Lock Installation",
  "Shelving & Storage",
  "Kitchen Fitting",
  "Fence Repairs",
  "Shed Assembly",
  "Decking Repairs",
  "Picture Hanging",
  "TV Mounting",
  "Curtain Rails",
  "General Maintenance",
];

const Handymen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-amber-950/20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <span className="inline-block text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider">
                  Professional Property Services
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                  Peterborough
                  <span className="block text-amber-500">Trusted Handymen</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Reliable property maintenance and repairs – no job too small. From furniture assembly to home repairs, we've got you covered.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base gap-2"
                  asChild
                >
                  <a href="tel:+441234567890">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-bold">Call Now</span>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base gap-2"
                >
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold">Request Callback</span>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-4">
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  <span className="text-xs sm:text-sm font-medium">Vetted & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  <span className="text-xs sm:text-sm font-medium">Fully Qualified</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-500/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  <span className="text-xs sm:text-sm font-medium">Same-Day Service</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-500/20 border-2 border-background flex items-center justify-center">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">200+ happy customers</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-2xl" />
                <img
                  src={technicianImage}
                  alt="Professional Handyman"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-surface-dark">
        <div className="container px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3 sm:mb-4">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Professional Handyman Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From quick fixes to complete projects, our skilled handymen handle it all with precision and care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {handymanServices.map((service, index) => (
              <div key={index} className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-lift">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 sm:mb-6">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="inline-block text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3 sm:mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Trusted Local Handymen
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  When you need reliable property maintenance, you need someone you can trust to do the job right. That's us.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
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
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 mb-1 sm:mb-2">Same</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Day Service</div>
                </div>
                <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 mb-1 sm:mb-2">15+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Services Offered</div>
                </div>
                <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 mb-1 sm:mb-2">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 mb-1 sm:mb-2">4.9</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Star Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Shared Component */}
      <HowItWorksSection />

      {/* Testimonials - Shared Component */}
      <TestimonialsSection />

      {/* About Section */}
      <section className="py-[var(--space-section)] bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <img
                alt="T&G Services Professional Handyman"
                className="w-full h-auto max-w-full rounded-lg shadow-xl"
                src="/lovable-uploads/d6ce01fa-362f-45e9-adf4-bbc346cc5699.png"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-[length:var(--text-3xl)] lg:text-[length:var(--text-4xl)] font-bold text-foreground uppercase tracking-tight">
                Searching for Handymen Near Me?
              </h2>
              
              <p className="text-muted-foreground text-[length:var(--text-lg)]">
                Are you searching for Handymen Near Me? Looking for a professional handyman in your area that can help with property maintenance and repairs?
              </p>
              
              <p className="text-muted-foreground text-[length:var(--text-base)]">
                T&G Services offers you experienced professional technicians that can resolve all types of property maintenance challenges. From furniture assembly to painting, flooring to fence repairs – no job is too small.
              </p>
              
              <p className="text-muted-foreground text-[length:var(--text-base)]">
                We offer Handyman Services from the small and simple jobs to the large and complex. Our track record and references are outstanding. We serve the residential and commercial sector in Peterborough and the surrounding areas.
              </p>

              <Button 
                size="lg" 
                className="w-full sm:w-auto gap-2 min-h-[48px] text-sm sm:text-base px-4 sm:px-6 bg-amber-500 hover:bg-amber-600 text-white" 
                asChild
              >
                <a href="tel:+441234567890">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="font-bold hidden sm:inline">CALL US FOR A FREE QUOTE</span>
                  <span className="font-bold sm:hidden">CALL FOR QUOTE</span>
                </a>
              </Button>

              {/* Services List */}
              <div className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Handyman Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-amber-500">
                  <ul className="space-y-1">
                    {handymanServicesList.slice(0, 8).map((service, index) => (
                      <li key={index} className="hover:underline cursor-pointer">• {service}</li>
                    ))}
                  </ul>
                  <ul className="space-y-1">
                    {handymanServicesList.slice(8).map((service, index) => (
                      <li key={index} className="hover:underline cursor-pointer">• {service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="bg-gray-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              {/* Content */}
              <div className="space-y-4 sm:space-y-6">
                <span className="inline-block text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider">
                  Coverage Area
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Serving Peterborough & Surrounding Areas
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  We cover all of Peterborough and surrounding villages. Not sure if we cover your area? Just call – we'll confirm instantly.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base bg-amber-500 hover:bg-amber-600 text-white" 
                    asChild
                  >
                    <a href="tel:+441234567890">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>

              {/* Areas List */}
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {areas.map((area, index) => (
                    <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-secondary/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-8 sm:mt-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-500 uppercase tracking-wide">
                Handyman Services Peterborough
              </h3>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77766.98663990066!2d-0.3047699!3d52.5695235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f055400b0de5%3A0x9c99c869d3e6823!2sPeterborough%2C%20UK!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peterborough Service Area Map"
                className="w-full sm:h-[400px]"
              />
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/Peterborough,+UK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:underline text-xs sm:text-sm font-medium"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-28 bg-surface-dark">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs sm:text-sm font-semibold text-amber-500 uppercase tracking-wider mb-3 sm:mb-4">
                FAQs
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Common Questions
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card rounded-lg sm:rounded-xl px-4 sm:px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Callback Form - Shared Component */}
      <CallbackFormSection />

      {/* Footer - Shared Component */}
      <Footer />
    </div>
  );
};

export default Handymen;
