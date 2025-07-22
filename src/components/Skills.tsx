import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "Android Native (Kotlin/Java)", level: 90 },
        { name: "Flutter & Dart", level: 80 },
        { name: "Jetpack Compose", level: 80 },
        
      ]
    },
    {
      title: "Backend Impl & DB",
      skills: [
        { name: "Firebase", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "SQLite", level: 80 },
        { name: "Room", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "Android Studio", level: 95 },
        { name: "VS Code", level: 70 },
        { name: "Xcode", level: 80 }
      ]
    }
  ];

  const technologies = [
    "Android Studio","Jetpack Compose","Clen Architecture","Hilt & Koin","MVVM", "Flutter", "Kotlin", "Dart", "Java", "Firebase","Room",
    "REST APIs", "Coroutines", "Github", "Figma", "OOP","Flow", 
    "Bloc", "Retrofit", "GetX", "Riverpod"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive skill set covering the entire mobile development stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-gradient-card shadow-card">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;