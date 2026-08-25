export function PrivacyPolicyTermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-900 py-14 sm:py-16">
        <div className="container-x">
          <h1 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Privacy Policy & Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="container-x py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-10">

          {/* Privacy Policy */}
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Privacy Policy
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-navy-700">
              <p>
                No mobile information will be shared with third parties or
                affiliates for marketing or promotional purposes.
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section>
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Terms of Service
            </h2>

            <div className="mt-4 space-y-4 text-sm leading-7 text-navy-700">
              <p>
                By clicking here, you agree to receive text communications
                regarding IT related services from AD Solution LLC.
              </p>

              <p>
                Standard terms and rates may apply. Message frequency may vary.
              </p>

              <p>
                Text STOP to opt out and HELP for support.
              </p>

              <p>
                By submitting this form, I confirm that I have read and agree
                to the Privacy Policy and Terms of Service.
              </p>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}