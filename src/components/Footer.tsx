import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "Contact", href: "#contact" },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Complaints Procedure", href: "#" },
    { label: "Accessibility Statement", href: "#" },
  ];

  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-background text-foreground">
        <div className="container py-16">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            24/7 Emergency Help Available
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't wait – call now and speak directly to our emergency team
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+441234567890">
                <Phone className="w-5 h-5" />
                01234 567 890
              </a>
            </Button>
            <Button size="xl" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white" asChild>
              <a href="https://wa.me/441234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
          </div>
        </div>
      </div>

      {/* Main Footer - Dark Section */}
      <div className="bg-[#222222] text-white">
        {/* Main Footer Content */}
        <div className="border-t border-white/10">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <img 
                src={logo} 
                alt="Peterborough Emergency Plumbers" 
                className="h-16 w-auto drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]" 
              />
              <p className="text-gray-400 leading-relaxed">
                24 Hour Emergency Plumbing & Drainage Service - We guarantee that all customers receive quality service. All our plumbers are qualified engineers that you can trust, promising a level of professionalism and service that can be trusted every time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold uppercase tracking-wider">Links</h4>
              <nav className="flex flex-col space-y-3">
                {quickLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold uppercase tracking-wider">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Peterborough, Cambridgeshire, United Kingdom</span>
                </div>
                <a href="tel:+441234567890" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  01234 567 890
                </a>
                <a href="mailto:help@peterboroughplumbers.co.uk" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  help@peterboroughplumbers.co.uk
                </a>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Policy Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold uppercase tracking-wider">Legal</h4>
              <nav className="flex flex-col space-y-3">
                {policyLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className="text-emergency-red hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Certifications */}
              <div className="pt-4 space-y-3">
                <div className="bg-white/5 rounded-lg px-4 py-2 text-sm text-gray-300">
                  Gas Safe Registered
                </div>
                <div className="bg-white/5 rounded-lg px-4 py-2 text-sm text-gray-300">
                  Fully Insured
                </div>
                <div className="bg-white/5 rounded-lg px-4 py-2 text-sm text-gray-300">
                  5-Star Rated
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {currentYear} Peterborough Emergency Plumbers. All Rights Reserved.
              </p>
              <p className="text-xs text-gray-500 text-center md:text-right">
                Registered address: Peterborough Emergency Plumbers Ltd, registered as a company in England. VAT registration number pending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
