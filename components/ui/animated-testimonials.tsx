'use client';

import * as React from 'react';

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Build-safe fallback implementation.
 * Some templates import { AnimatedTestimonials } from this path.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, idx) => (
          <figure
            key={`${t.name}-${idx}`}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <blockquote className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-neutral-900 dark:text-neutral-50">
              {t.name}
              {t.title ? (
                <span className="ml-2 font-normal text-neutral-500 dark:text-neutral-400">
                  {t.title}
                </span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
