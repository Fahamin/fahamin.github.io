import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, mobile computing, and human-computer interaction.",
      highlights: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 semesters",
        "Senior Capstone: Mobile Health Monitoring App"
      ]
    },
    {
      degree: "Associate Degree in Software Development",
      institution: "Community College of Technology",
      location: "San Jose, CA",
      period: "2012 - 2014",
      gpa: "3.9/4.0",
      description: "Foundation in programming fundamentals, data structures, and software development lifecycle.",
      highlights: [
        "Valedictorian",
        "Programming Competition Winner",
        "Student Government Technology Committee Member"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Associate Android Developer",
      issuer: "Google",
      date: "2023",
      credentialId: "ABC123XYZ",
      icon: Award
    },
    {
      title: "Flutter Certified Developer",
      issuer: "Google",
      date: "2022",
      credentialId: "FLT456DEF",
      icon: Award
    },
    {
      title: "AWS Mobile Developer Associate",
      issuer: "Amazon Web Services",
      date: "2021",
      credentialId: "AWS789GHI",
      icon: Award
    },
    {
      title: "Kotlin for Android Developers",
      issuer: "JetBrains",
      date: "2020",
      credentialId: "KOT101JKL",
      icon: Award
    }
  ];

  const courses = [
    "Advanced Android Development",
    "Flutter & Dart Complete Course",
    "Mobile UI/UX Design",
    "Firebase for Mobile Apps",
    "Clean Architecture in Mobile Apps",
    "Mobile App Security Best Practices"
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
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <cert.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{cert.title}</h4>
                        <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            Issued: {cert.date}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {cert.credentialId}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Courses */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              Additional Training
            </h3>
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">Completed Courses & Training</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((course, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;