import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Ty, TTooltip } from '../../components/ui/tippy/Tippy';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  firstChild?: React.ReactNode;
  lastChild?: React.ReactNode;
  className?: string;
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, label, lastChild, firstChild, ...props }, ref) => {
    return (
      <div className={clsx(
        'flex items-center gap-2',
        'w-full px-2 border rounded-lg',
        'dark:bg-white/10 dark:border-white/20 dark:text-white dark:placeholder-white/50',
        'bg-black/10 border-black/20 text-black placeholder-black/50',
        'focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
        'transition-all duration-200',
        // 'error',
        error &&'error',
        // !error && 'border-red-500 dark:border-red-500 ring-red-500/50',
        className
      )}>
        {firstChild}
        <input
          ref={ref}
          className='w-full h-full py-2.5 bg-transparent border-none outline-none'
          {...props}
        />
        {lastChild}
        { error && <ExclamationCircleIcon className="icon IError w-5 h-5" /> }
        {/* {error && (<p className="mt-1 text-sm text-red-500">{error}</p>)} */}
      </div>
    );
  }
);


type TSuperInputProps = {
  TyP: TTooltip;
  InputP: InputProps;
};
export const SuperInput = (
  {TyP, InputP}: TSuperInputProps
) => {
  return (
    <Ty {...TyP} show={InputP.error !== undefined} >
      <Input {...InputP} />
    </Ty>
  );
};


// Password:-
import { ExclamationCircleIcon, EyeSlashIcon, EyeIcon, KeyIcon } from '@heroicons/react/24/outline';

export const Password = (
  {TyP, InputP}: TSuperInputProps
) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Ty {...TyP} show={InputP.error !== undefined} >
      <Input {...InputP}
        type={showPassword ? 'text' : 'password'}
        firstChild={
          <KeyIcon className="icon w-6.5 h-5 pe-2 border-inline-end border-black dark:border-white border-solid border-e-[0.1em]" />}
        lastChild={
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            { showPassword ? ( <EyeSlashIcon className="w-5 h-5" /> ) : ( <EyeIcon className="w-5 h-5" /> ) }
          </button>
        }
/>
</Ty>

);
};
