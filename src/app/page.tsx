import { AudienceSection } from "@/components/AudienceSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InstructorSection } from "@/components/InstructorSection";
import { LearnSection } from "@/components/LearnSection";
import { MobilePurchaseBar } from "@/components/MobilePurchaseBar";
import { ModalitySection } from "@/components/ModalitySection";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearnSection />
        <EquipmentSection />
        <AudienceSection />
        <InstructorSection />
        <ModalitySection />
        <FinalCta />
      </main>
      <Footer />
      <MobilePurchaseBar />
    </>
  );
}
