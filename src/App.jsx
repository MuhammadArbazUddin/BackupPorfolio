import About from "./components/About";
import CardVerticleSlider from "./components/CardVerticleSlider";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import WorkHead from "./components/WorkHead";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardVerticleSlider />
      <About />
      <WorkHead />
      <Work />
      <Features />
      <Footer />
    </>
  );
}
