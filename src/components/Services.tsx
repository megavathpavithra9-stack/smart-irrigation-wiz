import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Gauge, Sprout, Zap } from "lucide-react";
import dripImage from "@/assets/drip-irrigation.jpg";
import pivotImage from "@/assets/pivot-irrigation.jpg";
import smartImage from "@/assets/smart-irrigation.jpg";

const services = [
  {
    icon: Droplets,
    title: "Drip Irrigation Systems",
    description: "Precision water delivery directly to plant roots, maximizing efficiency and minimizing waste.",
    image: dripImage,
    benefits: ["Up to 90% water efficiency", "Reduced soil erosion", "Lower energy costs"],
  },
  {
    icon: Gauge,
    title: "Center Pivot Systems",
    description: "Large-scale automated irrigation for extensive agricultural operations with optimal coverage.",
    image: pivotImage,
    benefits: ["Automated operation", "Uniform water distribution", "Scalable for large areas"],
  },
  {
    icon: Zap,
    title: "Smart Irrigation Control",
    description: "IoT-enabled systems with real-time monitoring and automated adjustments based on weather and soil data.",
    image: smartImage,
    benefits: ["Real-time monitoring", "Weather-based automation", "Remote control capability"],
  },
  {
    icon: Sprout,
    title: "Sustainable Design",
    description: "Eco-friendly irrigation solutions that balance productivity with environmental conservation.",
    image: null,
    benefits: ["Reduced carbon footprint", "Water conservation", "Soil health optimization"],
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Irrigation Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From design to implementation, we deliver cutting-edge irrigation systems tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
            >
              {service.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
              )}
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
