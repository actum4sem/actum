import Testimonials from "./components/testimonials";
import VideoSection from "./components/video_section";
import Team from "./components/team";
import ContactSection from "./components/contact_section";

export default function AboutPage() {
  return (
    <main className="full-bleed grid grid-cols-subgrid">
      <VideoSection />
      <Testimonials />
      <Team />
      <ContactSection />
    </main>
  );
}
