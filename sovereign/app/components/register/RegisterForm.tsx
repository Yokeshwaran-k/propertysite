"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

interface PropertyMatchForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  postcode: string;
  address: string;
  buyOrRent: "buy" | "rent";
  propertyType: string;
  minPrice: string;
  maxPrice: string;
  minBedrooms: string;
  message: string;
  consentProperties: boolean;
  consentValuation: boolean;
}

const initialState: PropertyMatchForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  postcode: "",
  address: "",
  buyOrRent: "buy",
  propertyType: "",
  minPrice: "",
  maxPrice: "",
  minBedrooms: "",
  message: "",
  consentProperties: false,
  consentValuation: false,
};

const PRICE_OPTIONS = [
  "£100,000",
  "£150,000",
  "£200,000",
  "£250,000",
  "£300,000",
  "£400,000",
  "£500,000",
  "£750,000",
  "£1,000,000+",
];

const BEDROOM_OPTIONS = ["1", "2", "3", "4", "5+"];

export default function PropertyMatchingForm() {
  const [form, setForm] = useState<PropertyMatchForm>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function updateField<K extends keyof PropertyMatchForm>(
    field: K,
    value: PropertyMatchForm[K]
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!form.firstName || !form.lastName || !form.phone || !form.email) {
      setError("Please fill in your contact details.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/enquiries/property-matching", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      console.error(err);
      setError("Something went wrong sending your details. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full bg-neutral-100 border border-neutral-100 focus:border-neutral-400 focus:outline-none px-4 py-3 text-sm text-neutral-700 transition-colors";
  const selectClasses = `${inputClasses} appearance-none bg-no-repeat bg-right pr-10`;
  const labelClasses = "block text-sm text-neutral-700 mb-2";
  const sectionHeadingClasses =
    "text-sm font-semibold tracking-widest text-amber-500 uppercase border-b border-neutral-200 pb-3";

  const chevronBg = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23404040'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E\")",
    backgroundPosition: "right 0.75rem center",
    backgroundSize: "1.1em",
  };

  if (success) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-neutral-700">
            Thanks — we&apos;ve received your requirements.
          </h2>
          <p className="mt-2 text-[15px] text-neutral-500">
            We&apos;ll be in touch with matching properties shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          {/* SECTION: Contact details */}
          <h2 className={sectionHeadingClasses}>Your Contact Details</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="firstName" className={labelClasses}>
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="lastName" className={labelClasses}>
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="phone" className={labelClasses}>
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="postcode" className={labelClasses}>
                Postcode
              </label>
              <input
                id="postcode"
                type="text"
                value={form.postcode}
                onChange={(e) => updateField("postcode", e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="address" className={labelClasses}>
              Address:
            </label>
            <textarea
              id="address"
              rows={4}
              value={form.address}
              onChange={(e) => updateField("address", e.target.value)}
              className={`${inputClasses} resize-y`}
            />
          </div>

          {/* SECTION: Property requirements */}
          <h2 className={`${sectionHeadingClasses} mt-12`}>
            Your Property Requirements
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="buyOrRent" className={labelClasses}>
                Do you wish to buy or rent?
              </label>
              <select
                id="buyOrRent"
                value={form.buyOrRent}
                onChange={(e) =>
                  updateField("buyOrRent", e.target.value as "buy" | "rent")
                }
                className={selectClasses}
                style={chevronBg}
              >
                <option value="buy">Looking to Buy</option>
                <option value="rent">Looking to Rent</option>
              </select>
            </div>

            <div>
              <label htmlFor="propertyType" className={labelClasses}>
                Type of Property Required:
              </label>
              <input
                id="propertyType"
                type="text"
                value={form.propertyType}
                onChange={(e) => updateField("propertyType", e.target.value)}
                className={inputClasses}
                placeholder="e.g. Flat, House, Bungalow"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="minPrice" className={labelClasses}>
                Minimum Price
              </label>
              <select
                id="minPrice"
                value={form.minPrice}
                onChange={(e) => updateField("minPrice", e.target.value)}
                className={selectClasses}
                style={chevronBg}
              >
                <option value="">Minimum Price</option>
                {PRICE_OPTIONS.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="maxPrice" className={labelClasses}>
                Maximum Price
              </label>
              <select
                id="maxPrice"
                value={form.maxPrice}
                onChange={(e) => updateField("maxPrice", e.target.value)}
                className={selectClasses}
                style={chevronBg}
              >
                <option value="">Maximum Price</option>
                {PRICE_OPTIONS.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="minBedrooms" className={labelClasses}>
                Minimum Bedrooms
              </label>
              <select
                id="minBedrooms"
                value={form.minBedrooms}
                onChange={(e) => updateField("minBedrooms", e.target.value)}
                className={selectClasses}
                style={chevronBg}
              >
                <option value="">Please select</option>
                {BEDROOM_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="message" className={labelClasses}>
              Message:
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={`${inputClasses} resize-y`}
            />
          </div>

          {/* SECTION: Consent */}
          <h2 className={`${sectionHeadingClasses} mt-12`}>
            Your Explicit Consent
          </h2>

          <div className="mt-6 space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p>
              You must be 18 years or older to register for our property
              matching service through this website (&quot;Service&quot;).
            </p>
            <p>
              From time to time we will send you information about
              properties that we feel may be of interest to you and/or
              provide you with information about our valuation services.
            </p>
            <p>
              If you would like to receive information from us, please
              indicate this by selecting the appropriate box(es) below:
            </p>
          </div>

          <div className="mt-4 space-y-3">
            <label className="flex items-start gap-2.5 text-sm text-neutral-700">
              <input
                type="checkbox"
                checked={form.consentProperties}
                onChange={(e) =>
                  updateField("consentProperties", e.target.checked)
                }
                className="mt-0.5 w-4 h-4 border-neutral-300 accent-amber-500"
              />
              I would like to hear about properties which you think might be
              of interest.
            </label>

            <label className="flex items-start gap-2.5 text-sm text-neutral-700">
              <input
                type="checkbox"
                checked={form.consentValuation}
                onChange={(e) =>
                  updateField("consentValuation", e.target.checked)
                }
                className="mt-0.5 w-4 h-4 border-neutral-300 accent-amber-500"
              />
              I would like to hear about your valuation services.
            </label>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            Our{" "}
            <Link
              href="/privacy-policy"
              className="text-amber-500 hover:text-amber-600 underline"
            >
              Privacy Policy and Notice
            </Link>{" "}
            describes how we use your data, who we might share it with and
            what rights you have.
          </p>

          {error && (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-sm text-neutral-500">
              This site is protected by reCAPTCHA and the Google{" "}
              
                <a href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-600 underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              
                <a href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-600 underline"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white text-xs font-semibold tracking-widest uppercase px-10 py-4"
          >
            {submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}