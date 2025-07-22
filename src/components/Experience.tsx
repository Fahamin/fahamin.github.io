import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead mobile development team, architecting and developing scalable mobile applications using Flutter and Android Native technologies.",
      achievements: [
        "Led a team of 5 developers to deliver 3 major mobile applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and established coding standards"
      ],
      technologies: ["Flutter", "Kotlin", "Firebase", "Git", "Agile"]
    },
    {
      title: "Mobile App Developer",
      company: "InnovateApps Inc.",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained mobile applications for various clients, focusing on performance optimization and user experience.",
      achievements: [
        "Delivered 15+ mobile applications for different industries",
        "Reduced app loading time by 40% through optimization techniques",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["Android Native", "Java", "Kotlin", "SQLite", "REST APIs"]
    },
  
    {
      title: "Junior Android Developer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2018 - 2019",
      type: "Full-time",
      description: "Started my professional journey developing Android applications and learning industry best practices.",
      achievements: [
        "Contributed to 3 production Android applications",
        "Learned advanced Android development patterns",
        "Participated in code reviews and team collaboration"
      ],
      technologies: ["Android", "Java", "XML", "Git", "Gradle"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey building innovative mobile solutions across various industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                          <div className="flex items-center gap-4 text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <Badge variant={exp.type === "Full-time" ? "default" : "secondary"}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;