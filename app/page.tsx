import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import MissionSection from '@/components/MissionSection';
import ServiceCards from '@/components/ServiceCards';
import DonateSection from '@/components/DonateSection';
import FoundationSection from '@/components/FoundationSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection />
      <MissionSection />
      <ServiceCards />
      <DonateSection />
      <FoundationSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
