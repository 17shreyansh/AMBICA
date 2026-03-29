import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 sm:px-8 sm:py-4 font-sans font-medium text-xs sm:text-[11px] tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary-900 text-stone-50 hover:bg-primary-800',
    secondary: 'bg-accent-600 text-stone-50 hover:bg-accent-700',
    outline: 'border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-stone-50'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
