import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Renee M",
    text: "I had an awesome experience with this plumbing service. They showed up on time, were super professional, and fixed my leaky tap quickly. I'd definitely recommend them for any home plumbing needs.",
  },
  {
    name: "Destiny C",
    text: "Our office needed urgent plumbing repairs, and this company came through. They arrived fast, worked efficiently, and didn't disrupt our workday. Excellent service. Thanks Fast Response team!",
  },
  {
    name: "Alan D",
    text: "We had a major plumbing issue at our factory, and these guys were fantastic. Their team is skilled and got everything running smoothly again in no time. Top-notch industrial plumbing service.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
            What our clients say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Our high quality service is based on the quality of our team members. All technicians are certified and licensed plumbers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center space-y-3 sm:space-y-4 p-4 sm:p-0">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Name */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground">{testimonial.name}</h3>
              
              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
