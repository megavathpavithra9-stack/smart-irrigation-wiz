import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-card border-border shadow-[var(--shadow-strong)] overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left Side - CTA Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Transform Your Irrigation System?
                  </h2>
                  <p className="text-lg text-primary-foreground/90 mb-8">
                    Let's discuss how our engineering solutions can optimize your water management 
                    and boost your agricultural efficiency.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="accent" 
                      size="lg"
                      className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      View Projects
                    </Button>
                  </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className="p-8 md:p-12 bg-card flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">Email</div>
                        <div className="text-muted-foreground">info@irrigationeng.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group cursor-pointer">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground mb-1">Office</div>
                        <div className="text-muted-foreground">
                          123 Agricultural Drive<br />
                          Suite 200, Farmland City, ST 12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Note */}
          <div className="text-center mt-12 text-muted-foreground">
            <p className="text-sm">
              Serving agricultural communities nationwide • Licensed Professional Engineers • 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
