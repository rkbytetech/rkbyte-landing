// src/pages/Terms.js
import React from "react";

export default function Terms() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 text-gray-900">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Top-right teal glow */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-rkaccent/10 blur-3xl" />

        {/* Left-side subtle glow */}
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-rkaccent/5 blur-3xl" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#111827 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}
      <section
  className="relative border-b border-gray-100 bg-cover bg-center"
  style={{
    backgroundImage: "url('/legal-bg.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/45" />

  <div className="relative max-w-4xl mx-auto px-6 py-20">

    <div className="flex items-center gap-3 mb-5">
      <span className="h-px w-10 bg-rkaccent" />

      <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent">
        Legal
      </p>
    </div>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
      Terms of Service
    </h1>

    <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
      These terms explain the conditions that apply when you access or
      use the RKbyte website and its services.
    </p>

    <p className="text-sm text-gray-500 mt-7">
      Last updated: <span className="text-gray-700">October 2026</span>
    </p>

  </div>
</section>

      {/* =====================================================
          TERMS CONTENT
      ===================================================== */}
      <section className="relative max-w-4xl mx-auto px-6 py-16">

        <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12">

          <div className="space-y-12 text-gray-600 leading-relaxed">

            {/* =================================================
                01 — ACCEPTANCE
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing or using{" "}
                <strong className="text-gray-900">
                  rkbyte.com
                </strong>
                , you acknowledge that you have read, understood, and agree
                to be bound by these Terms of Service.
              </p>

              <p className="mt-4">
                If you do not agree with these terms, please discontinue use
                of the website.
              </p>
            </section>

            {/* =================================================
                02 — USE OF WEBSITE
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Use of the Website
              </h2>

              <p>
                The RKbyte website is provided to share information about our
                products, technologies, services, projects, and capabilities.
              </p>

              <p className="mt-4">
                You agree to use the website only for lawful purposes and in a
                manner that does not interfere with its operation, security,
                or availability.
              </p>

              <p className="mt-4">
                You must not attempt to gain unauthorized access to any part
                of the website, its systems, servers, databases, or associated
                services.
              </p>
            </section>

            {/* =================================================
                03 — PRODUCTS & SERVICES
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Products and Services
              </h2>

              <p>
                Information presented on this website is provided for general
                informational purposes. Product specifications, features,
                availability, pricing, and configurations may change without
                prior notice.
              </p>

              <p className="mt-4">
                Certain RKbyte solutions may be customized according to
                application requirements. Any commercial engagement,
                quotation, project scope, technical specification, or service
                agreement will be governed by the terms agreed upon between
                RKbyte and the customer.
              </p>
            </section>

            {/* =================================================
                04 — INTELLECTUAL PROPERTY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Intellectual Property
              </h2>

              <p>
                Unless otherwise stated, the content available on this
                website, including text, graphics, logos, images, product
                designs, branding, layouts, and other materials, is owned by
                or licensed to RKbyte.
              </p>

              <p className="mt-4">
                You may not reproduce, distribute, modify, publish, or use
                RKbyte content for commercial purposes without prior written
                permission.
              </p>
            </section>

            {/* =================================================
                05 — THIRD PARTY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Services and Links
              </h2>

              <p>
                The website may contain links to third-party websites,
                platforms, or services. These resources are provided for
                convenience and informational purposes.
              </p>

              <p className="mt-4">
                RKbyte does not control and is not responsible for the
                availability, content, security, privacy practices, or
                policies of third-party websites.
              </p>
            </section>

            {/* =================================================
                06 — INFORMATION ACCURACY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Accuracy of Information
              </h2>

              <p>
                We aim to keep the information on this website accurate and
                current. However, RKbyte does not guarantee that all content
                is complete, accurate, or continuously up to date.
              </p>

              <p className="mt-4">
                Technical information should be confirmed with RKbyte before
                being relied upon for a specific project, purchase, or
                implementation.
              </p>
            </section>

            {/* =================================================
                07 — LIABILITY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>

              <p>
                To the extent permitted by applicable law, RKbyte shall not
                be responsible for indirect, incidental, consequential, or
                business losses arising from the use of, or inability to use,
                this website.
              </p>

              <p className="mt-4">
                This website and its content are provided on an
                “as available” basis without guarantees that the website will
                always operate without interruption or error.
              </p>
            </section>

            {/* =================================================
                08 — CHANGES
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Changes to These Terms
              </h2>

              <p>
                RKbyte may update these Terms of Service from time to time to
                reflect changes to our website, services, or applicable
                requirements.
              </p>

              <p className="mt-4">
                Any updated version will be published on this page together
                with a revised “Last updated” date.
              </p>
            </section>

            {/* =================================================
                09 — CONTACT
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Contact Us
              </h2>

              <p>
                If you have questions regarding these Terms of Service, you
                can contact RKbyte using the details below.
              </p>

              <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-6">

                <p className="font-semibold text-gray-900 text-lg">
                  RKbyte
                </p>

                <p className="text-gray-500 mt-1">
                  Technology & Automation
                </p>

                <a
                  href="mailto:founder@rkbyte.com"
                  className="inline-block mt-4 text-rkaccent font-semibold hover:underline"
                >
                  founder@rkbyte.com
                </a>

              </div>
            </section>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="relative bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">

          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-rkaccent mb-4">
            Need Help?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Questions about our terms?
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            If you have any questions about these terms or our services,
            feel free to get in touch with the RKbyte team.
          </p>

          <a
            href="mailto:founder@rkbyte.com"
            className="inline-flex items-center justify-center mt-7 px-6 py-3 rounded-lg bg-rkaccent text-black font-semibold hover:opacity-90 transition"
          >
            Contact RKbyte
          </a>

        </div>
      </section>

    </main>
  );
}