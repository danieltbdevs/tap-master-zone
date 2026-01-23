import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <h1 className="text-8xl font-black text-accent">404</h1>
        <h2 className="text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          The page you're looking for doesn't exist. But don't worry – if you have a plumbing emergency, we're here to help!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="https://wa.me/233240786039" target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5" />
              Call Now – 24/7
            </a>
          </Button>
          <Button variant="heroSecondary" size="lg" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
