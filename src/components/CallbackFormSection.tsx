import { useState } from "react";
import { Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CallbackFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Request Received!",
      description: "We'll call you back within 10 minutes.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="callback-form" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold text-emergency-red uppercase tracking-wider mb-4">
                Get Help Fast
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Help Fast? Request a Call Back
              </h2>
              <p className="text-muted-foreground">
                Submit your details and we'll call you back within 10 minutes.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="h-12 bg-secondary/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="07xxx xxxxxx"
                    required
                    className="h-12 bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="postcode" className="text-sm font-medium">
                  Postcode
                </label>
                <Input
                  id="postcode"
                  name="postcode"
                  placeholder="PE1 1AA"
                  className="h-12 bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="issue" className="text-sm font-medium">
                  Describe Your Issue (Optional)
                </label>
                <Textarea
                  id="issue"
                  name="issue"
                  placeholder="e.g., Burst pipe in kitchen, water everywhere..."
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="emergency"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    Request Call Back
                  </>
                )}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll call you back within 10 minutes, 24/7.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackFormSection;
