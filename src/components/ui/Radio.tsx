import React from 'react';
import clsx from 'clsx';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <div className="relative">
        <input
          type="radio"
          className={clsx(
            'peer sr-only',
            className
          )}
          {...props}
        />
        <div className={clsx(
          'w-5 h-5 border-2 rounded-full transition-all duration-200',
          'border-primary bg-transparent',
          'peer-checked:border-primary',
          'peer-focus:ring-2 peer-focus:ring-primary/20',
          'after:content-[""] after:block after:opacity-0',
          'after:absolute after:top-1/2 after:left-1/2',
          'after:w-2.5 after:h-2.5 after:rounded-full',
          'after:bg-primary',
          'after:transform after:-translate-x-1/2 after:-translate-y-1/2',
          'peer-checked:after:opacity-100'
        )} />
      </div>
      {label && <span className="text-muted-06">{label}</span>}
    </label>
  );
};
