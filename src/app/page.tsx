
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Projects } from "@/components/site/projects";
import { VideosSection } from "@/components/site/videos";
import { Founder } from "@/components/site/founder";
import { WhyUs } from "@/components/site/whyus";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Website Navigation */}
      <Navbar />

      {/* Homepage Content */}
      <main className="flex-1">
        <Hero />

        <About />

        <Services />

        <Projects />

        <VideosSection />

        <Founder />

        <WhyUs />

        <Contact />
      </main>

      {/* Website Footer and Floating Actions */}
      <Footer />

      <FloatingActions />
    </div>
  );
}
