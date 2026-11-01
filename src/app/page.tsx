import { Navbar } from "@/app/navbar";
import { Hero } from "@/app/hero";
import { About } from "@/app/about/page";
import { Services } from "@/app/services/page";
import { Projects } from "@/app/projects/page";
import { VideosSection } from "@/app/video/page";
import { Founder } from "@/app/founder/page";
import { WhyUs } from "@/app/whyus/page";
import { Contact } from "@/app/contact/page";
import { Footer } from "@/app/footer";
import { FloatingActions } from "@/app/floating-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
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
      <Footer />
      <FloatingActions />
    </div>
  );
}