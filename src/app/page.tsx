import { Hero } from "@/components/landing/hero";
import { FeaturedSection } from "@/components/landing/featured-section";
import { TimelinePreview } from "@/components/landing/timeline-preview";
import { HallPreview } from "@/components/landing/hall-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <TimelinePreview />
      <HallPreview />
    </>
  );
}
