import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  GitBranch,
  Monitor,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 80, description: 'Building dynamic UIs with hooks and context' },
        { name: 'JavaScript (ES6+)', level: 85, description: 'Modern JS features and async programming' },
        { name: 'TypeScript', level: 60, description: 'Type-safe development and better code quality' },
        { name: 'HTML5 & CSS3', level: 92, description: 'Semantic markup and modern styling' },
        { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS framework' },
        { name: 'Responsive Design', level: 90, description: 'Mobile-first approach and cross-device compatibility' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 80, description: 'RESTful APIs and middleware' },
        { name: 'RESTful APIs', level: 80, description: 'API design and implementation' },
        { name: 'Authentication', level: 80, description: 'JWT, OAuth, and security practices' },
        { name: 'Middleware', level: 70, description: 'Custom middleware and third-party integrations' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 88, description: 'NoSQL database design and aggregation' },
        { name: 'Mongoose', level: 85, description: 'ODM for MongoDB with schema validation' },
        { name: 'MySQL', level: 75, description: 'Relational database design and queries' },
       
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Code2,
      skills: [
        { name: 'Git & GitHub', level: 70, description: 'Version control and collaboration' },
        { name: 'VS Code', level: 85, description: 'IDE customization and productivity' },
        { name: 'Postman', level: 75, description: 'API testing and documentation' },
        { name: 'npm ', level: 70, description: 'Package management and scripts' },
      
      ]
    }
  ];

  const additionalSkills = [
    { icon: Smartphone, title: 'Responsive Design', description: 'Mobile-first approach' },
    { icon: GitBranch, title: 'Version Control', description: 'Git workflows and collaboration' },
    { icon: Monitor, title: 'UI/UX Principles', description: 'User-centered design thinking' },
    { icon: Layers, title: 'Full-Stack Integration', description: 'End-to-end development' }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
            in various technologies and tools
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className={`gradient-card fade-in-up stagger-${categoryIndex + 1}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-foreground">{skill.name}</h3>
                          <span className="text-sm text-primary font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills */}
        <Card className="gradient-card mb-12 fade-in-up stagger-3">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Additional <span className="text-primary">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.title} className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* MERN Stack Highlight */}
        <Card className="gradient-card fade-in-up stagger-4">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-primary">MERN</span> Stack Expertise
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
                Specialized in the MERN stack (MongoDB, Express.js, React, Node.js) for 
                building scalable, modern web applications from database to deployment.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'MongoDB', color: 'bg-green-500/20 text-green-400', description: 'NoSQL Database' },
                  { name: 'Express.js', color: 'bg-gray-500/20 text-gray-300', description: 'Backend Framework' },
                  { name: 'React', color: 'bg-blue-500/20 text-blue-400', description: 'Frontend Library' },
                  { name: 'Node.js', color: 'bg-green-600/20 text-green-500', description: 'Runtime Environment' }
                ].map((tech) => (
                  <div key={tech.name} className="space-y-2">
                    <div className={`w-20 h-20 ${tech.color} rounded-full flex items-center justify-center mx-auto text-2xl font-bold`}>
                      {tech.name.charAt(0)}
                    </div>
                    <h3 className="font-semibold">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;