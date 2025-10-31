import { Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Irrigation Engineering</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional irrigation engineering solutions combining innovation, 
              sustainability, and proven results to optimize water management systems.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="hover:text-foreground transition-colors cursor-pointer">System Design</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Installation</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Maintenance</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="hover:text-foreground transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Projects</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Irrigation Engineering. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
