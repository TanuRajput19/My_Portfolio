import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Knowledge Point',
      description: 'A full-stack MERN application featuring public pages like Home, Contact, and About. Registered users can access exclusive pages for current affairs, books, and podcasts. Clients can browse all content and purchase books, while admins have the ability to update daily current affairs and add new podcasts.',
      technologies: ['React', 'TailwindCSS','Supabase','Typescript'],
      features: [
        'Public pages: Home, Contact, About accessible to all users',
        'User registration and authentication for protected content access',
        'Exclusive access to current affairs, books, and podcast pages for logged-in users',
        'Clients can browse and purchase books',
        'Admin dashboard to update daily current affairs',
        'Admin can upload new podcasts regularly',
        'Role-based access control for clients and admins'
      ],
      duration: '2 months',
      teamSize: '1 (Personal Project)',
      status: 'In Development',
      demoUrl: '#',
      githubUrl: '#'
    },
   
 {
  title: 'Job Portal',
  description: 'A full-stack MERN application that connects job seekers with employers by providing job listings, application tracking, and user profile management. It features real-time notifications and role-based access for candidates and recruiters.',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  features: [
    'Job posting and management for recruiters',
    'Job search with filters and keyword matching',
    'Candidate profile creation and resume uploads',
    'Application tracking and status updates',
    'Real-time notifications using Socket.io',
    'Role-based authentication for candidates and employers'
  ],
  duration: '2 months',
  teamSize: ' (Personal Project)',
  status: 'Completed',
  demoUrl: 'https://job-hub-frontend.onrender.com',
  githubUrl: 'https://github.com/TanuRajput19/Job-Hub'
},
 {
      title: 'Customer Query Management',
      description: 'A comprehensive full-stack application developed with the MERN stack to efficiently manage customer queries, support tickets, and feedback with real-time updates and admin controls.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'User registration and role-based authentication',
        'Submit, track, and manage customer queries and tickets',
        'Real-time chat support between customers and agents',
        'Admin dashboard for query assignment and status updates',
        'Search and filter queries by status, priority, and date',
        'Email notifications and automated responses'
      ],
      duration: '1 months',
      teamSize: '1 (Personal Project)',
      status: 'Completed',
      demoUrl: '#',
      githubUrl: 'https://github.com/TanuRajput19/CQM'
    },
   {
  title: ' Sales & Services',
  description: 'A full-stack web application designed to streamline the sales and service processes for biotechnology products. It offers product catalogs, order management, customer support, and analytics to enhance business efficiency.',
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  features: [
    'Comprehensive product catalog with detailed descriptions',
    'Order placement and tracking system',
    'Customer inquiry and support management',
    'Admin dashboard for inventory and sales analytics',
    'Role-based authentication for sales agents and admins',
    'Responsive design for seamless use across devices'
  ],
  duration: '1 months',
  teamSize: ' developers',
  status: 'Completed',
  demoUrl: 'https://biotech-salesfrontend.onrender.com',
  githubUrl: 'https://github.com/TanuRajput19/biotech_sales'
}
,
  {
  title: 'Momo Town',
  description: 'A simple front-end website built with HTML, CSS, and JavaScript showcasing a variety of Chinese food items. Users can browse the menu, view prices, and place orders via WhatsApp, which directly contacts the owner with the order details.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  features: [
    'Interactive food menu with images and prices',
    'Add food items to order with quantity selection',
    'Dynamic price calculation for selected items',
    'Checkout button that opens WhatsApp with order summary',
    'Responsive design for mobile and desktop devices',
    'Easy order communication directly to the owner via WhatsApp'
  ],
  duration: '2 weeks',
  teamSize: '1 (Personal Project)',
  status: 'Completed',
  demoUrl: 'https://benevolent-griffin-d425b9.netlify.app',
  githubUrl: 'https://github.com/TanuRajput19/Food-Ordering'
}
,
   {
  title: 'Tour and Travel Website',
  description: 'A simple and visually appealing website created using HTML and CSS to showcase travel destinations, tour packages, and contact information. Designed to provide users with easy navigation and essential travel details.',
  technologies: ['HTML', 'CSS'],
  features: [
    'Beautiful homepage with featured travel destinations',
    'Tour packages section with descriptions and images',
    'Contact page with inquiry form',
    'Responsive layout for desktop and mobile devices',
    'Clean and user-friendly interface'
  ],
  duration: '1 week',
  teamSize: '1 (Personal Project)',
  status: 'Completed',
  demoUrl: 'https://peppy-brigadeiros-e1476a.netlify.app/',
  githubUrl: 'https://github.com/TanuRajput19/Tour-Travel-Website'
}
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="text-primary">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my full-stack development projects demonstrating my expertise 
            in the MERN stack and modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className={`gradient-card fade-in-up stagger-${(index % 4) + 1} h-full`}>
              <CardContent className="p-6 flex flex-col h-full">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <Badge variant="outline" className={`ml-4 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold mb-2 text-sm">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-primary text-xs">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Project Details */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{project.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full flex items-center justify-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="w-full flex items-center justify-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <Card className="gradient-card mt-16 fade-in-up stagger-4">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples
            </p>
            <a href="https://github.com/TanuRajput19" target="_blank" rel="noopener noreferrer">
              <Button className="gradient-btn px-8 py-3 flex items-center justify-center mx-auto">
                <Github className="mr-2 h-5 w-5" />
                Visit my GitHub
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
