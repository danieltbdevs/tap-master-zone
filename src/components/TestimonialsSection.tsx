import { Star, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "Renee M",
    text: "I had an awesome experience with this plumbing service. They showed up on time, were super professional, and fixed my leaky tap quickly. I'd definitely recommend them for any home plumbing needs.",
    timeAgo: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Destiny C",
    text: "Our office needed urgent plumbing repairs, and this company came through. They arrived fast, worked efficiently, and didn't disrupt our workday. Excellent service. Thanks Fast Response team!",
    timeAgo: "5 months ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Alan D",
    text: "We had a major plumbing issue at our factory, and these guys were fantastic. Their team is skilled and got everything running smoothly again in no time. Top-notch industrial plumbing service.",
    timeAgo: "8 months ago",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground">
            What our clients say
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base sm:text-lg">
            Our high quality service is based on the quality of our team members. All technicians are certified and licensed plumbers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              {/* Header with Avatar, Name, Time, and Google Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.timeAgo}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars with Verified Badge */}
              <div className="flex items-center gap-1.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <BadgeCheck className="w-5 h-5 text-blue-500 ml-1" />
              </div>

              {/* Testimonial Text */}
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
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
