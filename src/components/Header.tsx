import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
          FAHAMIN
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Portfolio
          </button>
         
          <button
            onClick={() => {
              localStorage.setItem('activeTab', 'experience'); // ✅ Set education tab in storage
              scrollToSection('experience-education');        // ✅ Scroll to correct section
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>

          <button
            onClick={() => {
              localStorage.setItem('activeTab', 'education'); // ✅ Set education tab in storage
              scrollToSection('experience-education');        // ✅ Scroll to correct section
            }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://firebasestorage.googleapis.com/v0/b/api-master-3fb49.appspot.com/o/cv%2FFahamin_CV.pdf?alt=media&token=cd2f8dc2-7859-462a-af81-b78723506eac"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>

          <Button onClick={() => scrollToSection('contact')}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button className="w-full" onClick={() => scrollToSection('contact')}>
                Hire Me
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;