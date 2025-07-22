import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import devPhoto from '@/assets/fahim.jpg'; // ✅ Replace with your image

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left: Developer Image */}
          <div className="flex justify-center">
            <img
              src={devPhoto}
              alt="Developer Fahamin"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg aspect-square"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-xl md:text-2xl block text-muted-foreground mb-1">
                I’m
              </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                FAHAMIN
              </span>
              <br />
              <span className="text-foreground">Mobile Apps Developer</span>
            </h1>


            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Crafting beautiful, performant mobile applications with
              <span className="text-primary font-semibold"> Android Native</span> and
              <span className="text-accent font-semibold"> Flutter</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/Fahamin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/fahamin-fahim-384958153/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:fahamin383@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
