import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const expertiseAreas = [
  "System Design & Engineering",
  "Hydraulic Analysis",
  "Water Resource Management",
  "Soil & Water Conservation",
  "Precision Agriculture",
  "Pump Station Design",
  "Drainage Systems",
  "Fertigation Systems",
  "Remote Monitoring",
  "Energy Efficiency Optimization",
  "Regulatory Compliance",
  "Project Management",
];

const statistics = [
  { value: "500+", label: "Projects Completed" },
  { value: "40%", label: "Average Water Savings" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const Expertise = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expertise That Drives Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of certified irrigation engineers combines decades of experience with 
              cutting-edge technology to deliver solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="prose prose-lg text-muted-foreground">
              <p>
                We specialize in creating irrigation systems that not only meet today's demands 
                but are designed to adapt to future challenges. Our approach combines traditional 
                engineering principles with innovative technology to maximize efficiency and sustainability.
              </p>
            </div>
          </div>

          {/* Right Column - Expertise Areas */}
          <div className="animate-fade-in">
            <div className="bg-card border border-border rounded-lg p-8 shadow-[var(--shadow-medium)]">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3">
                {expertiseAreas.map((area, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-secondary/80 transition-colors cursor-default"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
