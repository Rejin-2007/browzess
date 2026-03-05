import AboutIntro from "@/components/AboutIntro";
import ContactCTA from "@/components/ContactCTA";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <ServicesPreview />
      <ContactCTA />
    </div>
  );
}
