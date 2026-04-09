import { ContactForm } from '@/components/blocks/ContactForm'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTABanner } from '@/components/blocks/CTABanner'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export const metadata = {
  title: 'Contact & Booking | Blade & Co.',
  description:
    'Request a booking at Blade & Co. in downtown Manhattan. Client-side booking request form with fast confirmation by text or email.',
}

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight">
            Book your chair at Blade & Co.
          </h1>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Downtown Manhattan. Easy booking requests—fast confirmation. Tell us your service and
            preferred time window, and we’ll reply during business hours with the best available
            slot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium"
            >
              Start Booking Request
            </a>
            <a
              href="tel:+12125550198"
              className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition-colors"
            >
              Call the Shop
            </a>
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <ContactForm
            headline="Booking request"
            subheadline="Client-side form. We’ll confirm by text/email."
            contactInfo={[
              { label: 'Address', value: 'Downtown Manhattan, New York, NY' },
              { label: 'Hours', value: 'Mon–Fri: 10am–8pm • Sat: 10am–6pm • Sun: 11am–5pm' },
              { label: 'Phone', value: '+1 (212) 555-0198' },
              { label: 'Email', value: 'book@bladeandco.nyc' },
            ]}
          />

          <div className="mt-8 rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold">
              What to include in your notes (optional, but helpful)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              If you want a specific outcome—like a low taper that grows cleanly for three weeks, a
              beard shape that tightens the jawline, or a style that holds through a long workday—add
              a sentence or two. Reference photos are welcome. The more context you give, the faster
              we can confirm the right slot length.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold tracking-tight">
              Find us downtown
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Steps from major subway lines—easy in, easy out. If you’re coming from the office,
              request a weekday lunch or after-work window and we’ll confirm the best available
              chair.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4">
              <div className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6">
                <div className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  Neighborhood access
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Subway-friendly location with nearby parking garages. If you’re running late, call
                  the shop—if we can still deliver the service properly, we’ll make it work.
                </p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card/80 backdrop-blur p-6">
                <div className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  Shop atmosphere
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Low light, warm brass, leather seating—quiet-luxe. It’s built for a reset between
                  meetings, dates, and weekends.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-muted p-6">
            <ParallaxScroll
              images={[
                '/images/bladeco-1.jpg',
                '/images/bladeco-2.jpg',
                '/images/bladeco-3.jpg',
                '/images/bladeco-4.jpg',
                '/images/bladeco-5.jpg',
                '/images/bladeco-6.jpg',
              ]}
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Image placeholders: add real shop photos later by replacing files in <code>/public/images</code>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="Booking questions"
            subheadline="Fast answers before you hit send."
            items={[
              {
                question: 'How quickly do you confirm requests?',
                answer: 'Typically within the same day during business hours.',
              },
              {
                question: 'Can I request a specific barber?',
                answer:
                  'Yes—add it in notes. We’ll confirm based on availability and the service length.',
              },
              {
                question: 'What if I’m unsure what to book?',
                answer:
                  'Choose Signature Haircut and describe your goal. We’ll recommend the right service length when we confirm.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        headline="Walk out sharper—today."
        description="Send a booking request and we’ll lock in your chair."
        ctaLabel="Send Booking Request"
        ctaHref="#booking"
      />
    </div>
  )
}
