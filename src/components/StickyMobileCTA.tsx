import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-background/95 backdrop-blur-lg border-t border-border p-4">
        <div className="flex gap-3">
          <Button variant="hero" size="lg" className="flex-1" asChild>
            <a href="tel:+441234567890">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button variant="heroSecondary" size="lg" className="flex-1" asChild>
            <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
