import Hero from "@/app/components/sections/Hero"
import About from "@/app/components/sections/About"
import Services from "@/app/components/sections/Services"
import Footnote from "@/app/components/sections/Footnote"

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
