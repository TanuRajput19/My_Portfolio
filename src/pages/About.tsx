import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, Globe, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', icon: Globe, technologies: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', icon: Server, technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'] },
    { category: 'Database', icon: Database, technologies: ['MongoDB', 'MySQL', 'Mongoose'] },
    { category: 'Tools', icon: Code2, technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', ] },
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey and expertise
          </p>
        </div>

        {/* Introduction */}
        <Card className="gradient-card mb-12 fade-in-up stagger-1">
          <CardContent className="p-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-4">Hello! I'm Tanu Rajput</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a <strong className="text-foreground">B.Tech graduate in Computer Science and Engineering</strong> with 
                  a passion for creating innovative web solutions. My journey in software development began during my college 
                  years, where I discovered my love for building applications that solve real-world problems.
                </p>
                <p>
                  As a <strong className="text-primary">MERN Stack Developer</strong>, I specialize in creating full-stack 
                  web applications using MongoDB, Express.js, React, and Node.js. I believe in writing clean, maintainable 
                  code and staying updated with the latest technologies and best practices.
                </p>
                <p>
                  My goal is to continue growing as a developer while contributing to meaningful projects that make a 
                  positive impact. I'm always eager to learn new technologies and collaborate with other passionate 
                  developers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Overview */}
        <div className="mb-12 fade-in-up stagger-2">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Technical <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon;
              return (
                <Card key={skillGroup.category} className={`gradient-card fade-in-up stagger-${index + 3}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Experience Highlights */}
        <Card className="gradient-card mb-12 fade-in-up stagger-3">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">What I Bring to the Table</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable, and well-documented code
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Modern UI/UX</h3>
                <p className="text-sm text-muted-foreground">
                  Creating responsive and intuitive user interfaces
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Full-Stack</h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end development from database to deployment
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Interests */}
        <Card className="gradient-card fade-in-up stagger-4">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Beyond Coding</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or learning about emerging trends in web development. I believe that continuous learning is key to 
                staying relevant in the ever-evolving tech landscape.
              </p>
              <p>
                I also enjoy mentoring aspiring developers and sharing knowledge through technical writing and 
                community participation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;