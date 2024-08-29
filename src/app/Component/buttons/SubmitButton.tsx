import { useFormStatus } from 'react-dom';
import { ReactNode } from 'react';

interface SubmitButtonProps {
  children: ReactNode;
  className?: string;
}

export default function SubmitButton({ children, className = '' }: SubmitButtonProps) {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={
        "bg-blue-500 disabled:bg-blue-400 text-white disabled:text-gray-200 py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center " +
        className
      }
    >
      {pending && <span>Saving...</span>}
      {!pending && children}
    </button>
  );
}
