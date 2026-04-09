import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'

export const metadata = {
  title: 'Pricing | Blade & Co.',
  description:
    'Transparent pricing for haircuts, beard trims, and hot towel shaves at Blade & Co. in downtown Manhattan. Request a time window and get confirmed fast.',
}

export default function PricingPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight">
            Transparent pricing. Premium results.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            No surprises—choose your service and we’ll confirm availability. Tips appreciated, never
            expected. If you’re unsure what to choose, book the closest match and describe your goal
            in the notes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact#booking"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium"
            >
              Request a Time
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition-colors"
            >
              Browse Services
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <PricingTable
            headline="Service pricing"
            subheadline="Simple menu with options for the full ritual."
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
          <p className="mt-6 text-sm text-muted-foreground max-w-4xl">
            Looking for something specific (long hair, major restyle, or a beard reset)? Add details
            in your booking request so we can confirm enough time for the result you want.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FeaturesGrid
            badge="Add-ons"
            headline="Add-ons"
            subheadline="Small upgrades that keep you sharper longer."
            features={[
              { title: 'Scalp refresh', description: '$15' },
              { title: 'Neckline razor cleanup', description: '$10' },
              { title: 'Beard conditioning', description: '$15' },
              { title: 'Event-ready styling', description: '$20' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight">
            Policies (short and respectful)
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            We keep the schedule tight so every client gets unhurried attention. These guidelines
            help us stay on time without turning the shop into a rush job.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Late arrivals',
                desc: 'A short grace window may be possible. If we can’t complete the service properly, we’ll reschedule.',
              },
              {
                title: 'Cancellations',
                desc: 'Please cancel with notice so another client can take the chair.',
              },
              {
                title: 'No-shows',
                desc: 'Repeated no-shows may require pre-confirmation for future bookings.',
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6 hover:shadow-md transition-shadow"
              >
                <div className="font-[family-name:var(--font-heading)] text-xl font-semibold">
                  {p.title}
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Pricing questions"
            subheadline="What clients ask most."
            items={[
              {
                question: 'Do prices vary by barber?',
                answer:
                  'Pricing is consistent across the shop. Specialty requests may require extra time—confirmed before we begin.',
              },
              {
                question: 'Do you accept tips?',
                answer: 'Yes—cash or digital. Tips are always optional.',
              },
              {
                question: 'Can I combine services?',
                answer:
                  'Absolutely. Request what you want and we’ll confirm the best slot length.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Lock in your time window."
        description="Send a booking request with your service and preferred time—our team will confirm quickly."
        ctaLabel="Request Booking"
        ctaHref="/contact#booking"
      />
    </div>
  )
}
