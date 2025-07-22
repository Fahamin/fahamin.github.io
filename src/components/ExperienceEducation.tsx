import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Android Developer",
      company: "Navana Pharmaceuticals Ltd",
      location: "Rupyan Golden Age,Gulshan-2",
      period: "Mar-2024 - Present",
      type: "Full-time",
      description: "Architecting and developing scalable mobile applications using Flutter and Android Native technologies.",
     achievements: [
        "Delivered 5+ mobile applications for different Busniess",
        "Make More Faster App using Jetpack compose",
        "Doctor CRM App using Flutter"
      ],
      technologies: ["Flutter", "Kotlin", "Jetpack Compose", "Github", "Agile"]
    },
    {
      title: "Mobile App Developer",
      company: "Transcom Beverage Ltd.",
      location: "Gulshan Tower,Gulshan-2,Dhaka",
      period: "Jun-2021 - Feb-2024",
      type: "Full-time",
      description: "Developed and maintained mobile applications for various clients, focusing on performance optimization and user experience.",
      achievements: [
        "Delivered 3+ mobile applications for different industries",
        "Reduced app loading time by 40% through optimization techniques",
        "Collaborated with design team to implement pixel-perfect UIs"
      ],
      technologies: ["Android Native", "Java", "Kotlin", "SQLite", "REST APIs"]
    },
    {
      title: "Software Engineer",
      company: "Xoss Tecnology Ltd",
      location: "Niketon- Gulshan-1",
      period: "Feb-2021 - May-2021",
      type: "Full-time",
      description: "Provided mobile development services to startups and small businesses, delivering custom mobile solutions.",
     achievements: [
        "Making CV Maker App using Java Android",
         "Reduced app size to upload Play Store",
      ],
      technologies: ["Java", "Firebase", "Android"]
    },
   
  ];

  const education = [
    {
      degree: "BSC in Computer Science & Engineering",
      institution: "Uttara University",
      location: "Uttara, Dhaka",
      period: "2016 - 2019",
      gpa: "3.68/4.0",
      description: "Focused on software engineering, Programming,App Development",
      highlights: [
        "Programming Contest",
      ]
    },
   
  ];




  return (
    <section id="experience-education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My experience and educational background in mobile development
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-muted/50 p-1 rounded-lg flex gap-1">
              <Button
                variant={activeTab === 'experience' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('experience')}
                className="px-8 py-3"
              >
                <Building className="w-4 h-4 mr-2" />
                Experience
              </Button>
              <Button
                variant={activeTab === 'education' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('education')}
                className="px-8 py-3"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Education
              </Button>
            </div>
          </div>

          {/* Experience Content */}
          {activeTab === 'experience' && (
            <div className="space-y-8 animate-fade-in">
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
          )}

          {/* Education Content */}
          {activeTab === 'education' && (
            <div className="animate-fade-in">
              {/* Formal Education */}
              <div className="mb-16">
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  Formal Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <div>
                                <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                                <p className="text-lg text-muted-foreground">{edu.institution}</p>
                                <p className="text-sm text-muted-foreground">{edu.location}</p>
                              </div>
                              <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                  <Calendar className="w-4 h-4" />
                                  <span>{edu.period}</span>
                                </div>
                                <Badge variant="default">GPA: {edu.gpa}</Badge>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {edu.description}
                            </p>

                            <div>
                              <h5 className="font-semibold mb-2">Highlights:</h5>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                                {edu.highlights.map((highlight, highlightIndex) => (
                                  <li key={highlightIndex}>{highlight}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              

              {/* Additional Courses */}
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;