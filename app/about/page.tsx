import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/blocks/PageHeader';
import { Section } from '@/components/blocks/Section';
import { SplitFeatures } from '@/components/blocks/SplitFeatures';
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        headline="About"
        subheadline="A calm, detail-first barbershop experience."
      />

      <Section>
        <SplitFeatures
          headline="A better haircut starts with listening"
          subheadline="We can do modern looks, but we prioritize what fits your face and lifestyle—and we keep the experience calm."
          features={[
            {
              icon: '✂️',
              title: 'Craft over trends',
              description:
                'We’ll translate references into a cut that suits your head shape, hairline, and maintenance preferences.',
            },
            {
              icon: '🧼',
              title: 'Clean, consistent finishes',
              description:
                'Necklines, tapers, and blends are finished with intention—so it grows out better and looks sharp longer.',
            },
            {
              icon: '🗓️',
              title: 'Easy upkeep',
              description:
                'We’ll recommend a schedule and simple styling routine that matches your day-to-day.',
            },
          ]}
          cta={
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Book an appointment
            </Link>
          }
        />
      </Section>

      <Section>
        <TestimonialsAnimated />
      </Section>
    </main>
  );
}
