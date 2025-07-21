import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "Complete e-commerce solution with payment integration, user authentication, and real-time notifications.",
      image: portfolio2,
      technologies: ["Flutter", "Firebase", "Stripe", "Provider"],
      category: "Flutter",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Social Media Platform",
      description: "Native Android social networking app with chat features, media sharing, and social interactions.",
      image: portfolio3,
      technologies: ["Kotlin", "Room", "Retrofit", "Material Design"],
      category: "Android Native",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Productivity app with offline sync, team collaboration, and advanced task scheduling features.",
      image: portfolio1,
      technologies: ["Flutter", "Hive", "Bloc", "Notifications"],
      category: "Flutter",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      description: "Health and fitness app with workout tracking, nutrition planning, and progress analytics.",
      image: portfolio1,
      technologies: ["Kotlin", "SQLite", "Charts", "Sensors"],
      category: "Android Native",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "Community-driven recipe app with photo sharing, ratings, and personalized recommendations.",
      image: portfolio2,
      technologies: ["Flutter", "Firebase", "Image Picker", "GetX"],
      category: "Flutter",
      liveDemo: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Expense Tracker",
      description: "Personal finance management app with budget tracking, expense categorization, and financial insights.",
      image: portfolio3,
      technologies: ["Kotlin", "Room", "Charts", "Biometric Auth"],
      category: "Android Native",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent mobile applications built with modern technologies and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-hover transition-all duration-300 bg-gradient-card">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.category === "Flutter" ? "default" : "secondary"}>
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;