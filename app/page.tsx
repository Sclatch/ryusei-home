import { FaGithub, FaServer } from "react-icons/fa";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <About />
      <Services />
    </main>
  );
}
