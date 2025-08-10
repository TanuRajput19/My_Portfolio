import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'MIT, Moradabad-AKTU',
      location: 'Moradabad, India',
      duration: '2022 - 2025',
      grade: 'CGPA: 8.22/10',
      highlights: [
        'Database Management Systems',
        'Software Engineering',
        'Web Technologies',
        'Computer Networks'
      ]
    },
    {
      diploma: 'Polytechnic',
      field: 'Computer Science and Engineering',
      institution: 'Government Polytechnic Bijnor-BTEUP',
      location: 'Bijnor, India',
      duration: '2019 - 2022',
      grade: '77%',
      highlights: [
       'Operating System',
       'Python Programming'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (12th)',
      field: 'Science (PCM)',
      institution: 'UP Board ',
      location: 'Dhampur, India',
      duration: '2018 - 2019',
      grade: '73%',
      highlights: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'Hindi',
        'English'
      ]
    },
    {
      degree: 'Secondary School Certificate (10th)',
      field: 'Science',
      institution: 'UP Board ',
      location: 'Dhampur, India',
      duration: '2016 - 2017',
      grade: '81%',
      highlights: [
        'Science',
        'Mathematics',
        'Social Science',
        'Hindi',
        'English'
      ]
    },
    {
      degree: 'Certification Course',
      field: ' MERN Stack Web Development',
      institution: 'Softpro India,Lucknow',
      location: 'Online',
      duration: 'Jul 2024 -Sep 2024',
      grade: 'Certificate of Excellence',
      highlights: [
        'MERN Stack Development',
        'Advanced JavaScript',
        'React Ecosystem',
        'Node.js & Express',
        'MongoDB Database Design'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-primary">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Academic journey that shaped my technical foundation
          </p>
        </div>

        {/* Education Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <Card key={index} className={`gradient-card fade-in-up stagger-${index + 1} h-full`}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.field}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {edu.grade}
                    </Badge>
                  </div>

                  {/* Institution Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Key Subjects/Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Subjects & Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-primary/30 text-foreground hover:bg-primary/10"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Achievements */}
        {/* <Card className="gradient-card mt-12 fade-in-up stagger-4">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Academic <span className="text-primary">Achievements</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dean's List</h3>
                <p className="text-sm text-muted-foreground">
                  Consistently maintained high academic performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Technical Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Led multiple academic projects in web development
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Coding Competitions</h3>
                <p className="text-sm text-muted-foreground">
                  Participated in various hackathons and coding contests
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};


export default Education;