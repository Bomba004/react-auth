import React from 'react';
import clsx from 'clsx';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '', ...props }) => {
  return (
    <label className="inline-flex items-center cursor-pointer gap-2">
      <div className="relative">
        <input
          type="checkbox"
          className={clsx(
            'peer sr-only',
            className
          )}
          {...props}
        />
        <div className={clsx(
          'w-5 h-5 border-2 rounded transition-all duration-200',
          'border-primary bg-transparent',
          'peer-checked:bg-primary peer-checked:border-primary',
          'peer-focus:ring-2 peer-focus:ring-primary/20',
          'after:content-[""] after:block after:opacity-0',
          'after:w-2 after:h-3 after:mt-0 after:ml-1 after:rtl:mr-[25%]',
          'after:border-white after:border-r-2 after:border-b-2',
          'after:transform after:rotate-45',
          'peer-checked:after:opacity-100',
          
          'dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50',
          'bg-black/10 border-black/20 text-black placeholder-black/50',
        )} />
      </div>
      {label && <span className="text-muted-06">{label}</span>}
    </label>
  );
};
