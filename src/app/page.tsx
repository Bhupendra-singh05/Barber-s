import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CustomersSection from "@/components/CustomersSection";
import BarbersSection from "@/components/BarbersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <CustomersSection />
        <BarbersSection />
        <TestimonialsSection />
        <PricingSection />
        <DownloadAppSection />
      </main>
      <Footer />
    </>
  );
}
