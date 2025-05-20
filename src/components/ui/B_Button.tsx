import React from 'react';
import clsx from 'clsx';
import { Spinner } from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, isLoading = false, children, ...props }, ref) => {

    return (
      <button
        ref={ref}
        className={clsx(
          // 'relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200',
          // 'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          // {
          //   'btn-primary': variant === 'primary',
          //   'btn-secondary': variant === 'secondary',
          //   'btn-outline': variant === 'outline',
          //   'btn-danger': variant === 'danger',
          //   'w-full': fullWidth,
          //   'px-4 py-2 text-sm': size === 'sm',
          //   'px-6 py-3 text-base': size === 'md',
          //   'px-8 py-4 text-lg': size === 'lg',
          // },
          // 'transform hover:scale-[1.02] active:scale-[0.98]',
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Spinner />}
        {children}
      </button>
    );
  }
);
