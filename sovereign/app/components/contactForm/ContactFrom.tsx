"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

interface FormState {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  message: string;
  agreed: boolean;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  telephone: "",
  email: "",
  message: "",
  agreed: false,
};

export default function ConveyancingEnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.firstName || !form.lastName || !form.telephone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!form.agreed) {
      setError("Please agree to the Privacy & Data Protection Policy to continue.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setError("Something went wrong sending your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full bg-neutral-100 border border-neutral-100 focus:border-neutral-400 focus:outline-none px-4 py-3 text-md text-neutral-700 transition-colors";
  const labelClasses = "block text-md text-neutral-700 mb-2";

  if (success) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-neutral-700">
            Thanks — we&apos;ve received your enquiry.
          </h2>
          <p className="mt-2 text-[15px] text-neutral-500">
            A member of our team will be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-md font-semibold tracking-widest text-[var(--text-color)] uppercase">
          Looking For Conveyancing Assistance In Hackney?
        </h2>

        <p className="mt-3 text-[15px] text-neutral-600">
          We provide sales &amp; lettings services in Victoria Park, Hackney
          and surrounding areas.
        </p>

        <p className="mt-6 text-md text-neutral-500">* Required fields</p>

        <form onSubmit={handleSubmit} className="mt-2 border-t border-neutral-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="firstName" className={labelClasses}>
                First Name:<span className="text-amber-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="lastName" className={labelClasses}>
                Last Name:<span className="text-amber-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="telephone" className={labelClasses}>
                Telephone number:<span className="text-amber-500">*</span>
              </label>
              <input
                id="telephone"
                type="tel"
                required
                value={form.telephone}
                onChange={(e) => updateField("telephone", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address:<span className="text-amber-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className={labelClasses}>
              Message:
            </label>
            <textarea
              id="message"
              rows={8}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={`${inputClasses} resize-y`}
            />
          </div>

          <div className="mt-5 flex items-start gap-2.5">
            <input
              id="agreed"
              type="checkbox"
              required
              checked={form.agreed}
              onChange={(e) => updateField("agreed", e.target.checked)}
              className="mt-0.5 w-4 h-4 border-neutral-300 accent-amber-500"
            />
            <label htmlFor="agreed" className="text-md text-neutral-700">
              I agree to your{" "}
              <Link href="/privacy-policy" className="text-[var(--text-color)] hover:text-[var(--text-color)] no-underline">
                Privacy &amp; Data Protection Policy
              </Link>
              <span className="text-[var(--text-color)] ">*</span>
            </label>
          </div>

          {error && (
            <p className="mt-4 text-md text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-md text-neutral-500">
              This site is protected by reCAPTCHA and the Google{" "}
              
                <a href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color)] hover:text-[var(--text-color)] no-underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              
                <a href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color)] hover:text-[var(--text-color)] no-underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center justify-center bg-[var(--btn-background)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-xs font-semibold tracking-widest uppercase px-10 py-4"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}