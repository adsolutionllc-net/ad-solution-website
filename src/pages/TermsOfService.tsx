import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#071a33] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold text-[#071a33]">
          Terms of Service
        </h2>

        <p className="text-lg leading-8 text-[#18365c]">
          By clicking here, you agree to receive text communications regarding
          IT related services from AD Solution LLC. Standard terms and rates
          may apply. Message frequency may vary. Text STOP to opt out and HELP
          for support.
        </p>

        <p className="mt-8 text-lg leading-8 text-[#18365c]">
          By submitting this form, I confirm that I have read and agree to the
          Privacy Policy and Terms of Service.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;