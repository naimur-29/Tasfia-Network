// src/pages/HomePage.tsx
import { PackagesSection } from "../components/PackagesSection"; // Import the new section
import { AboutUsSection } from "../components/AboutUsSection";
import { ContactUsSection } from "../components/ContactUsSection";
import HeroSection from "../components/HeroSection";

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* Contact Us Section */}
      <ContactUsSection />
    </>
  );
}
