// Components
import { Hero, AboutMe, Experience, Services, Protfolio, Testimonials, Contact, FloatingNavbar } from "./components"

export const App = () => {
  return <div>
    <FloatingNavbar />
    <Hero />
    <AboutMe />
    <Experience />
    <Services />
    <Protfolio />
    <Testimonials />
    <Contact />
  </div>;
};
