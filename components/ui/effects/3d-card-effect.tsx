'use client';

import * as React from 'react';

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

export type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Optional: enable/disable the hover tilt effect */
  enabled?: boolean;
};

/**
 * Lightweight, build-safe 3D card primitives.
 * Some templates expect these named exports.
 */
export function CardContainer({
  className,
  enabled = true,
  style,
  ...props
}: CardContainerProps) {
  return (
    <div
      className={cn('group/card-container perspective-[1000px]', className)}
      style={style}
      {...props}
      data-3d-enabled={enabled ? 'true' : 'false'}
    />
  );
}

export type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;

export function CardBody({ className, style, ...props }: CardBodyProps) {
  return (
    <div
      className={cn(
        'relative h-full w-full rounded-xl border border-neutral-200 bg-white shadow-sm transition-transform duration-200 will-change-transform dark:border-neutral-800 dark:bg-neutral-950',
        'group-data-[3d-enabled=true]/card-container:group-hover/card-container:[transform:rotateX(6deg)_rotateY(-6deg)]',
        className
      )}
      style={style}
      {...props}
    />
  );
}

export type CardItemProps<T extends React.ElementType = 'div'> = {
  as?: T;
  translateZ?: number;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as'>;

export function CardItem<T extends React.ElementType = 'div'>(
  props: CardItemProps<T>
) {
  const { as, className, style, translateZ = 0, ...rest } = props;
  const Comp = (as ?? 'div') as React.ElementType;

  return (
    <Comp
      className={cn(
        'transition-transform duration-200 will-change-transform',
        'group-data-[3d-enabled=true]/card-container:group-hover/card-container:[transform:translateZ(var(--tz))]',
        className
      )}
      style={{ ...(style as React.CSSProperties), ['--tz' as any]: `${translateZ}px` }}
      {...(rest as any)}
    />
  );
}
