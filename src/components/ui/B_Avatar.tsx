import React from 'react';
import { clsx } from '@/utils/alias';

interface AvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: React.CSSProperties;
  src: string;
  alt: string;
}

export const Avatar = React.forwardRef<HTMLButtonElement, AvatarProps>(
  ({ className = '', src, alt, style}) => {

    return (
      <div className="avatar" style={style}>
        <img src={src} alt={alt} className={clsx("", className)} />
      </div>
    );
  }
);
