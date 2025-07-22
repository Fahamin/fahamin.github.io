import { Card } from '@/components/ui/card';
import { Code, Smartphone, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Specialized in creating exceptional mobile user experiences"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient development process with rapid prototyping"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Understanding your business needs and delivering solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate mobile app developer with 4+ years of experience creating innovative 
              solutions for Android or Jetpack Compose and cross-platform applications using Flutter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Professional Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I started my journey in mobile development with a passion for creating 
                applications that make a difference. Over the years, I've worked with 
                startups and established companies, delivering high-quality mobile solutions 
                that drive business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from native Android development using Kotlin (Jetpack Compose) and Java 
                to cross-platform development with Flutter and Dart. I believe in writing 
                clean, efficient code and creating intuitive user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">4+ Years Experience</span>
                </div>
                <div className="bg-accent/10 px-4 py-2 rounded-full">
                  <span className="text-accent font-medium">15+ Apps on Play Store</span>
                </div>
                <div className="bg-primary/10 px-4 py-2 rounded-full">
                  <span className="text-primary font-medium">Hire Me</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <h4 className="text-xl font-semibold mb-6">What I Bring to Your Project</h4>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm">{item.title}</h5>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;