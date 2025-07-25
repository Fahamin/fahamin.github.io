import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import ExperienceEducation from '@/components/ExperienceEducation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ExperienceEducation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
