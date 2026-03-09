import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Footnote from "./components/Footnote"

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <Hero />
      <About />
      <Services />
      <Footnote />
    </main>
  )
}
