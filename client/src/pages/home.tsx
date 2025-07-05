import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import CentresSection from "@/components/centres-section";
import SpotlightSection from "@/components/spotlight-section";
import DiscoverSection from "@/components/discover-section";
import NewsletterSection from "@/components/newsletter-section";
import PressSection from "@/components/press-section";
import DigitalInitiativesSection from "@/components/digital-initiatives-section";
import type { Article, Centre, PressRelease } from "@shared/schema";

export default function Home() {
  const { data: articles } = useQuery<Article[]>({
    queryKey: ["/api/articles"],
  });

  const { data: centres } = useQuery<Centre[]>({
    queryKey: ["/api/centres"],
  });

  const { data: pressReleases } = useQuery<PressRelease[]>({
    queryKey: ["/api/press-releases"],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CentresSection centres={centres} />
        <SpotlightSection articles={articles} />
        <DiscoverSection articles={articles} />
        <NewsletterSection />
        <PressSection pressReleases={pressReleases} />
        <DigitalInitiativesSection />
      </main>
      <Footer />
    </div>
  );
}