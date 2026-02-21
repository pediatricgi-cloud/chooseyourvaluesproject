import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

export function TextInput({ label, ...props }: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm font-semibold text-civic">
      {label}
      <input
        {...props}
        className="mt-1 w-full rounded border-2 border-civic/40 bg-white px-3 py-2 text-ink focus:border-ember focus:outline-none"
      />
    </label>
  );
}

export function SelectInput({ label, children, ...props }: { label: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block text-sm font-semibold text-civic">
      {label}
      <select
        {...props}
        className="mt-1 w-full rounded border-2 border-civic/40 bg-white px-3 py-2 text-ink focus:border-ember focus:outline-none"
      >
        {children}
      </select>
    </label>
  );
}

export function PrimaryButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="rounded bg-civic px-4 py-2 text-sm font-bold uppercase tracking-wide text-paper transition hover:bg-ember disabled:cursor-not-allowed disabled:opacity-70"
    >
      {children}
    </button>
  );
}
