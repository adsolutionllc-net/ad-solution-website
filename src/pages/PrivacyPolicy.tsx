import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#071a33] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="mb-6 text-3xl font-bold text-[#071a33]">
          Privacy Policy
        </h2>

        <p className="text-lg leading-8 text-[#18365c]">
          No mobile information will be shared with third parties or
          affiliates for marketing or promotional purposes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;