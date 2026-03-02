
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Qualification from '@/components/Qualification';
import Services from '@/components/Services';

import TechStack from '@/components/TechStack';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About></About>
      <TechStack></TechStack>
      <Qualification></Qualification>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
     

      {/* <About />
        <TechStack />
        <Qualification />
        <Projects />
        <Services />
        <Contact />
      */}
    </div>
  );
}