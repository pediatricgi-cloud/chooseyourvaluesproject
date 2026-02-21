'use client';

import { FormEvent, useState } from 'react';
import { PrimaryButton, SelectInput, TextInput } from '@/components/FormControls';


export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="space-y-8">
      <section>
        <h1 className="section-title">Join the campaign</h1>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          Add your voice. This Version 1 form is frontend-only and demonstrates the signup flow.
        </p>
      </section>

      <section className="max-w-2xl rounded-xl border-2 border-ink bg-white p-6 shadow-poster">
        <form className="space-y-4" onSubmit={handleSubmit} aria-label="Join campaign form">
          <TextInput label="Name (optional)" name="name" type="text" placeholder="Alex Rivera" />
          <TextInput label="Email" name="email" type="email" required placeholder="you@example.com" />
          <TextInput label="City / State (optional)" name="location" type="text" placeholder="Columbus, OH" />
          <SelectInput label="How do you want to help?" name="helpType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option value="host-signs">Host signs</option>
            <option value="volunteer">Volunteer</option>
            <option value="design">Design</option>
            <option value="donate">Donate</option>
            <option value="clergy-faith-leader">Clergy / faith leader</option>
            <option value="other">Other</option>
          </SelectInput>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>

        {submitted && (
          <p className="mt-4 rounded border border-sage bg-sage/10 p-3 text-sm font-semibold text-sage" role="status">
            Thanks for joining! We&apos;ll be in touch soon.
          </p>
        )}
      </section>

      <section>
        <h2 className="text-lg font-black text-civic">Social channels (placeholder)</h2>
        <div className="mt-2 flex gap-3 text-sm font-semibold text-civic">
          <a href="#" className="hover:text-ember">Instagram</a>
          <a href="#" className="hover:text-ember">X / Twitter</a>
          <a href="#" className="hover:text-ember">Facebook</a>
        </div>
      </section>
    </div>
  );
}
