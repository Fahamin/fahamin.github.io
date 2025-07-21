import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Mobile App Developer
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Passionate about creating exceptional mobile experiences with 
                Android Native and Flutter technologies. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="block text-background/80 hover:text-background transition-colors"
                >
                  Experience
                </button>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-background/80">
                <li>Android Development</li>
                <li>Flutter Development</li>
                <li>UI/UX Design</li>
                <li>App Consultation</li>
                <li>Code Review</li>
                <li>Maintenance</li>
              </ul>
            </div>
          </div>

          <hr className="border-background/20 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Mobile App Developer. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-2 mt-2 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-400" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;