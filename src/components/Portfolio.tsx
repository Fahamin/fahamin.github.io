import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import portfolio1 from '@/assets/map.png';
import portfolio2 from '@/assets/tv.png';
import portfolio3 from '@/assets/gps.png';
import portfolio4 from '@/assets/pre.png';
import portfolio5 from '@/assets/wo.png';
import portfolio6 from '@/assets/ss.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "GPS Map Camera",
      description: "The app automatically embeds GPS coordinates into the photos you take.",
      image: portfolio3,
      technologies: ["Kotlin", "CameraX", "Google Map ", "Jetpack Compose", "Sensors"],
      category: "Jetpack Compose",
      liveDemo: "https://play.google.com/store/apps/details?id=com.facerecognie.gpsmapcamera",
      github: "#"
    },
    {
      id: 2,
      title: "Android TV",
      description: "Android TV is the ultimate TV streaming companion, designed to elevate your entertainment",
      image: portfolio2,
      technologies: ["Kotlin", "Room", "Jetpack Compose", "Clean Architecture", "Material3"],
      category: "Jetpack Compose",
      liveDemo: "https://play.google.com/store/apps/details?id=com.hulu.peacoke.peacoketv",
      github: "#"
    },
    {
      id: 3,
      title: "Map Marker",
      description: "Whether you're a hiker, a traveler, or just someone who wants to keep track of your favorite places",
      image: portfolio1,
      technologies: ["Google Map", "Service","Room DB","CameraX", "kotlin"],
      category: "Android Native",
      liveDemo: "https://play.google.com/store/apps/details?id=com.map.marker.mapmarker",
      github: "#"
    },
    {
      id: 4,
      title: "Women Workout",
      description: "Health and fitness app with workout tracking, nutrition planning, and progress analytics.",
      image: portfolio5,
      technologies: ["Kotlin", "SQLite", "Charts", "Sensors"],
      category: "Android Native",
      liveDemo: "https://play.google.com/store/apps/details?id=com.livetv.configurator.nexus.kodiapps",
      github: "#"
    },
    {
      id: 5,
      title: "Pregnancy",
      description: "Pregnency Tracking with Tips & Baby Development with mother care.",
      image: portfolio4,
      technologies: ["Flutter", "Firebase", , "GetX"],
      category: "Flutter",
      liveDemo: "https://github.com/Fahamin/pregnancy",
      github: "https://github.com/Fahamin/pregnancy"
    },
     {
      id: 6,
      title: "speedvpn_flutter",
      description: "vpn",
      image: portfolio6,
      technologies: ["Flutter", "Firebase",  "Riverpod"],
      category: "Flutter",
      liveDemo: "https://github.com/Fahamin/speedvpn_flutter",
      github: "https://github.com/Fahamin/speedvpn_flutter"
    },

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
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full"
                        disabled={project.liveDemo === "#"}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        disabled={project.github === "#"}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://play.google.com/store/apps/dev?id=4873867663308251200" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
