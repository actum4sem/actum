import { Suspense } from "react";
import Testimonials from "./components/testimonials";
import VideoSection from "./components/video_section";
import Team from "./components/team";

export default function AboutPage() {
  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <VideoSection />
      <Testimonials />
      <Suspense fallback={<p>Loading team...</p>}>
        <Team />
      </Suspense>
    </main>
  );
}