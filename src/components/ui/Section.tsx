interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export const Section = ({ children, className = '', dark = false, id }: SectionProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-28 xl:py-32 ${dark ? 'bg-primary-900 text-stone-50' : ''} ${className}`}>
      {children}
    </section>
  );
};
