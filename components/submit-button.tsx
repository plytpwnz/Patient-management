import React from 'react';
import { Button } from './ui';
import Image from 'next/image';

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

export const SubmitButton: React.FC<ButtonProps> = ({ isLoading, className, children }) => {
  return (
    <Button type="submit" disabled={isLoading} className={className ?? 'shad-primary-btn w-full'}>
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};
