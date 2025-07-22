import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. I'll get back to you within 24 hours.",
    });
    // FormSubmit will handle the actual submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fahamin383@gmail.com",
      href: "mailto:fahamin383@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01639467698",
      href: "tel:+8801639467698"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Badda-Dhaka-1212",
      href: "#"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "9 AM TO 10 PM",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Fahamin" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fahamin-fahim-384958153/" },
    { icon: Twitter, label: "Facebook", href: "https://www.facebook.com/fahamin.hasanfahim" },
    { icon: Globe, label: "Portfolio", href: "https://fahamin.github.io/" }
  ];

  const services = [
    "Android Native App Development",
    "Flutter Cross-Platform Development",
    "App Store Optimization",
    "Mobile UI/UX Design",
    "API Integration",
    "App Maintenance & Support"
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Contact Information */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Services Offered */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Services Offered</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connect With Me */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">Available for Hire</h3>
                <p className="text-sm mb-4 opacity-90">
                  Currently accepting new projects and collaborations
                </p>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Open for Work
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;