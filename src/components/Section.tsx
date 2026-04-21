import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export default function Section({ children, className, id, noPadding = false }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'relative w-full',
        !noPadding && 'py-24',
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1280px] mx-auto px-6 lg:px-16"
      >
        {children}
      </motion.div>
    </section>
  );
}
