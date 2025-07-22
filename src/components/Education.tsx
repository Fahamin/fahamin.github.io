import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Uttara University",
      location: "Uttara, Dhaka",
      period: "2016 - 2019",
      gpa: "3.68/4.0",
      description: "Focused on software engineering, ",
      highlights: [
        "Pactice Programming",
        "Programming Contest",
        "Learning  Moible App Development"
      ]
    },
   
  ];

 
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in mobile technology
            </p>
          </div>

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
      </div>
    </section>
  );
};

export default Education;