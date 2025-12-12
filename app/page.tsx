import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ConsultingSection } from "@/components/consulting-section"
import { AgendaSection } from "@/components/agenda-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FaqSection } from "@/components/faq-section"
import { NvidiaCertificationSection } from "@/components/nvidia-certification-section"
import HowToBecomeSection from "@/components/how-to-become-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <ConsultingSection />
      <AgendaSection />
      <FaqSection />
    </main>
  )
}
