import Header from "@/components/Header";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallbackFormSection from "@/components/CallbackFormSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Star, Shield, Clock, CheckCircle, MapPin, BadgeCheck, PoundSterling, Zap, Wrench } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import handymanHero from "@/assets/handyman-hero.png";
import homeRepairsImg from "@/assets/home-repairs.png";
import furnitureAssemblyImg from "@/assets/furniture-assembly.png";
import paintingDecoratingImg from "@/assets/painting-decorating.png";
import doorsWindowsImg from "@/assets/doors-windows.png";
import flooringImg from "@/assets/flooring.png";
import gardenOutdoorImg from "@/assets/garden-outdoor.png";

// Handyman Services Data
const handymanServices = [{
  title: "Home Repairs",
  description: "From squeaky doors to broken fixtures, we handle all general household repairs quickly and professionally.",
  bullets: ["Door adjustments & repairs", "Lock repairs & replacements", "Shelving installation", "General household fixes"],
  image: homeRepairsImg
}, {
  title: "Furniture Assembly",
  description: "Save time and frustration with our expert flat-pack furniture assembly service for any brand or complexity.",
  bullets: ["Flat-pack assembly", "Wardrobes & storage units", "Beds & bedroom furniture", "Office desks & chairs"],
  image: furnitureAssemblyImg
}, {
  title: "Painting & Decorating",
  description: "Transform your space with our professional painting and decorating services for any room in your home.",
  bullets: ["Interior wall painting", "Touch-ups & repairs", "Feature walls", "Wallpaper hanging"],
  image: paintingDecoratingImg
}, {
  title: "Flooring Installation",
  description: "Expert flooring installation and repairs to give your home a fresh, updated look.",
  bullets: ["Laminate flooring", "Vinyl & LVT installation", "Floor repairs", "Threshold & trim fitting"],
  image: flooringImg
}, {
  title: "Doors & Windows",
  description: "Professional door and window services to improve security, efficiency, and appearance of your property.",
  bullets: ["Door hanging & fitting", "Lock installation", "Draught-proofing", "Handle replacements"],
  image: doorsWindowsImg
}, {
  title: "Garden & Outdoor",
  description: "Keep your outdoor spaces in top condition with our garden maintenance and repair services.",
  bullets: ["Fence repairs & installation", "Shed assembly", "Decking repairs", "Outdoor maintenance"],
  image: gardenOutdoorImg
}];

// Handyman Features Data
const handymanFeatures = [{
  icon: Clock,
  title: "Same-Day Availability",
  description: "Flexible scheduling to fit your busy lifestyle"
}, {
  icon: Shield,
  title: "Experienced Professionals",
  description: "Skilled handymen with years of experience"
}, {
  icon: BadgeCheck,
  title: "Multi-Skilled Technicians",
  description: "One call covers all your property needs"
}, {
  icon: PoundSterling,
  title: "Transparent Pricing",
  description: "No hidden fees, no surprises – honest quotes"
}, {
  icon: Zap,
  title: "Flexible Scheduling",
  description: "Book at times that work for you"
}, {
  icon: Star,
  title: "5-Star Reviews",
  description: "Trusted by 200+ local homeowners"
}];

// Handyman FAQs
const handymanFaqs = [{
  question: "What types of jobs do you handle?",
  answer: "We handle all property maintenance and repair tasks including home repairs, furniture assembly, painting & decorating, flooring installation, door & window fitting, and garden maintenance. No job is too small or too big for our experienced team."
}, {
  question: "Do you provide your own tools and materials?",
  answer: "Yes, our handymen arrive fully equipped with professional tools and a well-stocked van. For specific materials like paint colours or flooring types, we can either source them for you or you can provide your preferred materials."
}, {
  question: "How do I get a quote?",
  answer: "Getting a quote is easy! Simply call us or fill out our callback form with details of your job. For most jobs, we can provide an accurate quote over the phone. For larger projects, we'll arrange a free on-site assessment."
}, {
  question: "Can you work on commercial properties?",
  answer: "Absolutely! We serve both residential and commercial clients throughout Peterborough. Whether it's office repairs, retail maintenance, or property management support, we've got you covered."
}, {
  question: "What areas do you cover?",
  answer: "We cover all of Peterborough and surrounding areas including Werrington, Hampton, Bretton, Orton, Stanground, Fletton, Woodston, Longthorpe, Castor, Eye, and Yaxley. Not sure if we cover your area? Just call to confirm."
}];

// Handyman Service Areas
const areas = ["Peterborough City Centre", "Werrington", "Hampton", "Bretton", "Orton", "Stanground", "Fletton", "Woodston", "Longthorpe", "Castor", "Eye", "Yaxley"];

// About Section Services List
const aboutServices = ["Home Repairs", "Furniture Assembly", "Painting & Decorating", "Flooring Installation", "Doors & Windows", "Garden & Outdoor"];
const Handymen = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div className="container relative px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider animate-pulse">
                  Professional Handyman Services
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  Peterborough
                  <span className="text-gradient block">Professional Handymen</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                  Reliable property maintenance and repairs – no job is too small or too big.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button variant="emergency" size="lg" className="group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg" asChild>
                  <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    <span className="sm:hidden">CALL NOW</span>
                    <span className="hidden sm:inline">CALL FOR SERVICE</span>
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-2" asChild>
                  <a href="#callback">Request Callback</a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-emergency-red to-red-700 border-2 border-background" />)}
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                    </div>
                    <span className="text-muted-foreground">200+ Reviews</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start pt-2">
                {["Vetted & Insured", "Fully Insured", "Same-Day Service"].map(badge => <span key={badge} className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary text-[10px] sm:text-xs font-medium">
                    <CheckCircle className="w-3 h-3 text-emergency-red" />
                    {badge}
                  </span>)}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative z-10">
                <img src={handymanHero} alt="Professional Handyman" className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-emergency-red/20 to-transparent rounded-3xl blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Professional Handyman Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From small repairs to complete property maintenance – we've got you covered with our comprehensive range of handyman services.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-24">
            {handymanServices.map((service, index) => <div key={index} className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full aspect-[4/3] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>

                <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emergency-red/10 text-emergency-red">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm font-semibold">Handyman Service</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emergency-red/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emergency-red" />
                        </div>
                        <span className="text-sm sm:text-base">{bullet}</span>
                      </li>)}
                  </ul>
                  <Button variant="emergency" className="mt-2 text-sm sm:text-base" asChild>
                    <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      Book This Service
                    </a>
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  Trusted Local Handymen
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  When you need property maintenance done right, you need someone you can trust to arrive on time and complete the job professionally. That's us.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {handymanFeatures.map((feature, index) => <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-emergency-red/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emergency-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">Same</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Day Service</div>
                </div>
                <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center hover-lift">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-emergency-red mb-1 sm:mb-2">100%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction</div>
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

      <HowItWorksSection />
      <TestimonialsSection />

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-2">
          <div className="relative z-10">
            <img alt="T&G Services Handyman Team" className="w-full max-w-md mx-auto lg:max-w-none rounded-2xl" src="/lovable-uploads/ebb75191-461a-43d8-b47e-21f6d1cb3bd6.png" />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-emergency-red/20 to-transparent rounded-3xl blur-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-black text-emergency-red">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
              <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                Searching for Handymen Near Me?
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
                <p>
                  At T&G Services, we understand that property maintenance can be stressful and time-consuming. That's why our team of experienced handymen is here to take care of all your repair and maintenance needs.
                </p>
                <p>
                  Whether it's assembling furniture, fixing a door, painting a room, or tackling that growing to-do list, we've got you covered. Our skilled professionals arrive fully equipped and ready to work.
                </p>
              </div>

              <Button variant="emergency" size="lg" className="px-6 sm:px-8" asChild>
                <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="sm:hidden">CALL NOW</span>
                  <span className="hidden sm:inline">CALL FOR SERVICE</span>
                </a>
              </Button>

              <div className="pt-4 sm:pt-6">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Our Handyman Services Include:</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {aboutServices.map((service, index) => <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emergency-red flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{service}</span>
                    </div>)}
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
              <div className="space-y-4 sm:space-y-6">
                <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider">
                  Coverage Area
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Serving Peterborough & Surrounding Areas
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  We cover all of Peterborough and surrounding villages. Not sure if we cover your area? Just call – we'll confirm instantly.
                </p>
                
                <div className="flex justify-center lg:justify-start">
                  <Button variant="emergency" size="lg" className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base" asChild>
                    <a href="tel:01234567890">
                      <Phone className="w-4 h-4 mr-2" />
                      Check Coverage
                    </a>
                  </Button>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {areas.map((area, index) => <div key={index} className="flex items-center gap-1.5 sm:gap-2 bg-secondary/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emergency-red flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{area}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary uppercase tracking-wide">
                Handyman Services Peterborough
              </h3>
            </div>
            <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77766.98663990066!2d-0.3047699!3d52.5695235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f055400b0de5%3A0x9c99c869d3e6823!2sPeterborough%2C%20UK!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus" width="100%" height="300" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Peterborough Service Area Map" className="w-full sm:h-[400px]" />
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <a href="https://www.google.com/maps/place/Peterborough,+UK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs sm:text-sm font-medium">
                View larger map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-28">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Got questions? We've got answers. Here are some of the most common questions about our handyman services.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {handymanFaqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl sm:rounded-2xl px-4 sm:px-6 border-0">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4 sm:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      <CallbackFormSection />
      <Footer />
    </div>;
};
export default Handymen;