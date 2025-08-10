import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/tanu.jpeg';
import biotechImg from "../assets/biotech.png";
import ChatImg from "../assets/chat-app.png";
import JobhubImg from "../assets/JobPortal.png";
import Typewriter from '@/components/Typewriter';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 fade-in-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="text-muted-foreground">Hi, I am</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    <Typewriter 
                      text="Tanu Rajput" 
                      speed={150} 
                      delay={1000}
                      className="inline-block"
                    />
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground">
                  I am a{' '}
                  <span className="text-primary font-semibold">MERN Stack Developer</span>
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate B.Tech graduate in Computer Science and Engineering with expertise in 
                MongoDB, Express.js, React, and Node.js. I create scalable web applications and 
                love turning ideas into digital reality through clean, efficient code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
               <a 
  href="/Tanu_CV.pdf"  // yaha apne CV file ka path ya external link daal do
  download 
>
  <Button className="gradient-btn px-8 py-3 text-lg">
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </Button>
</a>
                <a 
  href="https://github.com/TanuRajput19" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button variant="outline" className="px-8 py-3 text-lg hover:bg-primary/20">
    <Github className="mr-2 h-5 w-5" />
    View GitHub
  </Button>
</a>
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-sm rounded-full border border-border hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Tanu Rajput - MERN Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-3">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-muted-foreground">Scroll down</span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </div>
          </div> */}
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects showcasing my MERN stack development skills
            </p>
          </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      name: "Chat Application",
      description:
        "A real-time chat app with WebSocket integration and user authentication.",
      image: ChatImg,
      github: "https://github.com/TanuRajput19/Chat-Application",
      live: "https://chat-application-frontend-z3kb.onrender.com", // Deployed Link
      tech: ["React", "Socket", "MongoDB", "Express.js", "Jswebtoken", "TailwindCSS"],
    },
    {
      name: "Biotech Sales & Services",
      description:
        "A professional biotech company website with modern UI/UX and responsive design.",
      image: biotechImg,
      github: "https://github.com/TanuRajput19/biotech_sales",
      live: "https://biotech-salesfrontend.onrender.com",
      tech: ["React", "TailwindCSS", "CSS", "JS"],
    },
    {
      name: "Job Portal",
      description:
        "A job portal platform connecting employers and job seekers with advanced filters.",
      image: JobhubImg,
      github: "https://github.com/YourGitHubUsername/job-portal",
      live: "https://job-hub-frontend.onrender.com/",
      tech: ["React", "Express", "TailwindCSS", "MongoDB"],
    },
  ].map((project, index) => (
    <div
      key={index}
      className={`gradient-card rounded-xl p-6 fade-in-up stagger-${index + 1}`}
    >
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>

      {/* Tech Stack + Links */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {/* GitHub Button */}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="h-4 w-4" />
          </Button>

          {/* Live Demo Button */}
          <Button
            size="sm"
            variant="ghost"
            onClick={() => window.open(project.live, "_blank")}
          >
            🔗
          </Button>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
};

export default Home;