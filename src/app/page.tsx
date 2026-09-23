import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { SolutionsCards } from "@/components/sections/SolutionsCards";
import { WhyContheo } from "@/components/sections/WhyContheo";
import { Cases } from "@/components/sections/Cases";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <SolutionsCards />
      <WhyContheo />
      <Cases />
      <Testimonials />
      <CTAFinal />
      <Footer />
    </main>
  );
}
