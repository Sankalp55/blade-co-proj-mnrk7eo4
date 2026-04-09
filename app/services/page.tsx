import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'

export const metadata = {
  title: 'Services | Blade & Co.',
  description:
    'Explore haircuts, fades, beard trims, hot towel shaves, and add-ons at Blade & Co. in downtown Manhattan. Request a time window and get confirmed fast.',
}

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight">
              Cuts, shaves, and beard work—done with intention.
            </h1>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Choose a classic service or build a ritual. Every appointment starts with a real
              consultation—face shape, growth pattern, and how you actually style day-to-day—then we
              execute with steady pacing and clean detailing. The goal is a result that looks sharp
              now and still makes sense as it grows out.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact#booking"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium"
              >
                Book a Service
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition-colors"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-10 rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6">
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
                What every service includes
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>• Consultation and shape plan before we start</li>
                <li>• Clean-up around ears and neckline (where applicable)</li>
                <li>• Finish styling with product matched to your hair type</li>
                <li>• Quick at-home routine guidance (no hard sell)</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-muted p-8">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold">
              The menu (most booked)
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Signature Haircut',
                  desc: 'Consultation, precision cut, wash (optional), and finish styling. Clean around ears/neckline included.',
                },
                {
                  title: 'Skin Fade / Taper',
                  desc: 'Detailed blend work with a crisp finish. Ideal for tight sides and sharp silhouettes.',
                },
                {
                  title: 'Beard Trim & Shape',
                  desc: 'Length control, cheek/neck cleanup, and shape tailored to your jawline.',
                },
                {
                  title: 'Hot Towel Shave',
                  desc: 'Prep oils, hot towels, straight razor shave, and soothing finish for comfort.',
                },
                {
                  title: 'Style & Finish',
                  desc: 'Blow-dry, texture, and product selection matched to your hair type and routine.',
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-5 hover:shadow-md transition-shadow"
                >
                  <div className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                    {s.title}
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Add-ons"
            headline="Add-ons that elevate"
            subheadline="Stack your appointment with small upgrades that make a big difference—especially before travel, events, or photo days."
            features={[
              {
                title: 'Scalp refresh',
                description: 'Quick cleanse and massage for a clean reset—great after long days or gym weeks.',
              },
              {
                title: 'Neckline razor cleanup',
                description: 'Ultra-crisp finish for photos and meetings. Clean, not overdone.',
              },
              {
                title: 'Beard conditioning',
                description: 'Softens coarse hair and reduces itch with a simple, skin-friendly finish.',
              },
              {
                title: 'Event-ready styling',
                description: 'Extra time for shape, hold, and polish—ideal for weddings and presentations.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight">
            How an appointment flows
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl leading-relaxed">
            A calm, consistent experience from hello to handshake. We keep the pace steady so the
            result stays balanced from every angle—no rushing the blend, no skipping the details.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Consult',
                desc: 'We align on length, silhouette, and maintenance—then confirm the plan before we begin.',
              },
              {
                title: 'Craft',
                desc: 'Precision work with checkpoints so the cut stays even across crown, sides, and back.',
              },
              {
                title: 'Detail',
                desc: 'Edges, neckline, and beard symmetry—clean and intentional, never harsh.',
              },
              {
                title: 'Finish',
                desc: 'Style, product guidance, and a quick routine you can repeat at home.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6 hover:shadow-md transition-shadow"
              >
                <div className="font-[family-name:var(--font-heading)] text-xl font-semibold">
                  {step.title}
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Service questions"
            subheadline="Quick answers before you book."
            items={[
              {
                question: 'Do you do walk-ins?',
                answer:
                  'We prioritize appointments to stay on time. Same-day openings happen—send a booking request and we’ll confirm quickly.',
              },
              {
                question: 'Can you work with curly or thick hair?',
                answer:
                  'Yes. We tailor technique and finishing products to your texture and growth pattern.',
              },
              {
                question: 'What should I book for a first visit?',
                answer:
                  'Start with the Signature Haircut or Beard Trim & Shape. Add a hot towel shave if you want the full ritual.',
              },
              {
                question: 'How often should I come in?',
                answer:
                  'Most clients book every 2–4 weeks depending on fade tightness and beard growth.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Pick your service. We’ll handle the rest."
        description="Send a booking request with your time window and notes—we’ll confirm quickly and keep your appointment unhurried."
        ctaLabel="Book a Service"
        ctaHref="/contact#booking"
      />
    </div>
  )
}
