import { HeroWaves } from '@/components/blocks/HeroWaves'
import { LogoCloud } from '@/components/blocks/LogoCloud'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <HeroWaves
        headline="Blade & Co. — Manhattan’s moody barbershop with a golden edge."
        highlightText="golden edge"
        subheadline="Precision haircuts, beard work, and hot towel shaves in a low-lit, leather-and-brass space downtown. Book in minutes—walk out sharper."
        primaryCta={{ label: 'Book an Appointment', href: '/contact#booking' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <LogoCloud
            headline="Trusted by downtown regulars and first-timers alike"
            logos={[
              { name: 'Manhattan Weekly', imageUrl: '/logos/manhattan-weekly.svg' },
              { name: 'GQ City Guide', imageUrl: '/logos/gq-city-guide.svg' },
              { name: 'Downtown Dossier', imageUrl: '/logos/downtown-dossier.svg' },
              { name: 'The Grooming Edit', imageUrl: '/logos/the-grooming-edit.svg' },
              { name: 'NYC Local', imageUrl: '/logos/nyc-local.svg' },
            ]}
          />
          <p className="mt-6 text-muted-foreground max-w-3xl">
            Blade &amp; Co. is a neighborhood shop with a premium standard—consistent results, every
            chair. If you’re new to the area or you’ve tried a dozen places, our promise is simple:
            clean lines, natural texture, and an unhurried experience.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <FeaturesCards3D
            badge="The standard"
            headline="Premium grooming, built on craft"
            subheadline="Old-school technique with modern taste—clean lines, natural texture, and a calm experience."
            features={[
              {
                title: 'Consult-first approach',
                description:
                  'We map face shape, growth patterns, and your styling routine before the first snip—so the cut looks right on day one and day twenty.',
              },
              {
                title: 'Hot towel ritual',
                description:
                  'Steam, towel, and pre-shave oils for comfort—especially on sensitive skin. It’s not a gimmick; it’s part of the finish.',
              },
              {
                title: 'Beard architecture',
                description:
                  'Shape, symmetry, and neckline discipline—designed to look sharp as it grows out, not just fresh for a day.',
              },
              {
                title: 'Texture & finish',
                description:
                  'Matte, natural, or polished—product matched to hair type and lifestyle, with quick guidance you can replicate at home.',
              },
              {
                title: 'Downtown punctuality',
                description:
                  'On-time chairs, clean stations, and a smooth flow from check-in to checkout. We respect your calendar.',
              },
              {
                title: 'Quiet-luxe atmosphere',
                description:
                  'Low light, warm brass, and curated playlists—no chaos, no rush. Just a focused appointment and a sharp result.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <PricingTable
            headline="Service pricing"
            subheadline="Simple menu with options for the full ritual. Request a time window and we’ll confirm availability."
            tiers={[
              {
                name: 'Cut',
                price: '$70',
                period: 'per visit',
                features: [
                  'Consultation & shape plan',
                  'Clean neckline & around ears',
                  'Finish styling + product guidance',
                ],
                ctaLabel: 'Book Cut',
                ctaHref: '/contact#booking',
              },
              {
                name: 'Cut + Beard',
                price: '$110',
                period: 'per visit',
                features: [
                  'Signature haircut',
                  'Beard trim & shape',
                  'Hot towel on request (when time allows)',
                ],
                ctaLabel: 'Book Cut + Beard',
                ctaHref: '/contact#booking',
                highlighted: true,
              },
              {
                name: 'Ritual',
                price: '$140',
                period: 'per visit',
                features: [
                  'Signature haircut',
                  'Beard detailing',
                  'Hot towel shave ritual',
                  'Soothing finish for sensitive skin',
                ],
                ctaLabel: 'Book Ritual',
                ctaHref: '/contact#booking',
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
            Tips are appreciated, never expected. If you’re combining services or you have a special
            request (long hair, major restyle, beard reset), add a note in your booking request so
            we can confirm the right appointment length.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <TestimonialsAnimated
            headline="Downtown reviews, real results"
            subheadline="Consistent cuts, clean fades, and beards that hold their shape."
            testimonials={[
              {
                quote:
                  'Best fade I’ve had in NYC—clean lines, no overworking, and the shop vibe is unreal.',
                name: 'Marcus L.',
                role: 'Financial District',
              },
              {
                quote:
                  'The hot towel shave is the real deal. Smooth, zero irritation, and they take their time.',
                name: 'Ethan R.',
                role: 'SoHo',
              },
              {
                quote:
                  'They listened. Walked in with messy growth, walked out with a cut that fits my face.',
                name: 'Daniel K.',
                role: 'Tribeca',
              },
              {
                quote: 'Beard trim was surgical—shape stayed sharp for weeks.',
                name: 'Omar S.',
                role: 'West Village',
              },
              {
                quote:
                  'On time, professional, and the finish styling actually lasts through the day.',
                name: 'Noah P.',
                role: 'Lower Manhattan',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Questions before you book"
            subheadline="Quick answers about timing, hair types, and what to choose for a first visit."
            items={[
              {
                question: 'Do you do walk-ins?',
                answer:
                  'We prioritize appointments to stay on time. Same-day openings happen—send a booking request and we’ll confirm quickly with the best available slot.',
              },
              {
                question: 'Can you work with curly or thick hair?',
                answer:
                  'Yes. We tailor technique and finishing products to your texture and growth pattern. Bring a reference photo if you have one—then we’ll adapt it to your face shape.',
              },
              {
                question: 'What should I book for a first visit?',
                answer:
                  'Start with the Signature Haircut or Beard Trim & Shape. If you want the full reset, choose Cut + Beard or Ritual and add notes about your goals.',
              },
              {
                question: 'How often should I come in?',
                answer:
                  'Most clients book every 2–4 weeks depending on fade tightness, hair growth, and beard shape. We’ll recommend a cadence after your first visit.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Ready for a sharper look?"
        description="Book your chair in downtown Manhattan. We’ll confirm your time and service details."
        ctaLabel="Book Now"
        ctaHref="/contact#booking"
      />
    </div>
  )
}
