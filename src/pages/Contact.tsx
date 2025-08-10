import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send,
  Clock,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'tanu.rajput12003@gmail.com',
      link: 'mailto:tanu.rajput12003@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6398180816',
      link: '6398180816',
      description: 'Available Mon-Fri, 9 AM - 6 PM'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhampur,Bijnor, India',
      link: 'https://maps.app.goo.gl/781GaUP5WifuLyab7?g_st=aw',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/TanuRajput19',
      description: 'View my code and projects'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'www.linkedin.com/in/tanu-rajput-633466270',
      description: 'Connect professionally'
    },
   
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact <span className="text-primary">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="gradient-card mb-8 fade-in-up stagger-1">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={info.title} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <a 
                            href={info.link}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {info.value}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card fade-in-up stagger-2">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <IconComponent className="h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {social.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card fade-in-up stagger-3">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-bold">Send a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="gradient-btn w-full py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Response Time */}
                <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-primary mr-2" />
                    <span className="text-muted-foreground">
                      I typically respond within 24 hours
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <Card className="gradient-card mt-16 fade-in-up stagger-4">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">What's your typical response time?</h3>
                <p className="text-muted-foreground text-sm">
                  I usually respond to emails and messages within 24 hours during weekdays.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do you work on freelance projects?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, I'm open to freelance opportunities and interesting projects.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's your preferred project size?</h3>
                <p className="text-muted-foreground text-sm">
                  I enjoy both small-scale projects and large applications, depending on the requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Are you available for remote work?</h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! I'm experienced with remote collaboration and modern development workflows.
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Contact;