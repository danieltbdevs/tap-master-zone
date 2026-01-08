import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much will it cost?",
    answer: "We provide transparent, upfront pricing before any work begins. There are no hidden fees or surprise charges. For most emergency jobs, we can give you an accurate quote over the phone.",
  },
  {
    question: "How quickly can someone get here?",
    answer: "Our average response time in Peterborough is 30 minutes. For urgent emergencies like burst pipes or major leaks, we prioritize dispatch to get to you as fast as possible.",
  },
  {
    question: "Do you operate on weekends and holidays?",
    answer: "Yes! We're a true 24/7 emergency service. We work weekends, bank holidays, Christmas Day – whenever you need us. Emergency rates may apply outside regular hours.",
  },
  {
    question: "Is your work guaranteed?",
    answer: "Absolutely. All our work comes with a satisfaction guarantee. We're Gas Safe registered, fully insured, and stand behind the quality of our repairs.",
  },
  {
    question: "What areas do you cover?",
    answer: "We cover all of Peterborough and surrounding areas including Werrington, Hampton, Bretton, Orton, Stanground, and nearby villages. If you're unsure, just call and we'll confirm.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-surface-dark">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block text-xs sm:text-sm font-semibold text-emergency-red uppercase tracking-wider mb-3 sm:mb-4">
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
  );
};

export default FAQSection;
