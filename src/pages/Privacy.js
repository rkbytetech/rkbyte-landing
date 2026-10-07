// src/pages/Privacy.js
import React from "react";

export default function Privacy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-50 text-gray-900">

      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-rkaccent/10 blur-3xl" />

        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-rkaccent/5 blur-3xl" />

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
          PRIVACY HERO
      ===================================================== */}
      <section
        className="relative bg-cover bg-center border-b border-gray-100"
        style={{
          backgroundImage: "url('/legal-bg.png')",
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/50" />

        <div className="relative max-w-4xl mx-auto px-6 py-20">

          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-rkaccent" />

            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-rkaccent">
              Privacy
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
            We respect your privacy and are committed to handling your
            information responsibly and transparently.
          </p>

          <p className="text-sm text-gray-500 mt-7">
            Last updated:{" "}
            <span className="text-gray-700">
              October 2026
            </span>
          </p>

        </div>
      </section>

      {/* =====================================================
          PRIVACY CONTENT
      ===================================================== */}
      <section className="relative max-w-4xl mx-auto px-6 py-16">

        <div className="bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm p-8 md:p-12">

          <div className="space-y-12 text-gray-600 leading-relaxed">

            {/* =================================================
                01 — INTRODUCTION
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>

              <p>
                RKbyte ("we", "us", or "our") respects your privacy and is
                committed to protecting the information you provide when using
                our website and services.
              </p>

              <p className="mt-4">
                This Privacy Policy explains what information we may collect,
                how we use it, and the choices available to you when you visit
                <strong className="text-gray-900">
                  {" "}rkbyte.com
                </strong>
                .
              </p>
            </section>

            {/* =================================================
                02 — INFORMATION WE COLLECT
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>

              <p>
                We may collect information that you voluntarily provide when
                communicating with us through our website, contact forms, or
                other communication channels.
              </p>

              <ul className="mt-5 space-y-3 list-disc pl-6">
                <li>
                  <strong className="text-gray-900">Contact information</strong>{" "}
                  such as your name, email address, phone number, or company
                  details when provided.
                </li>

                <li>
                  <strong className="text-gray-900">Enquiry information</strong>{" "}
                  such as messages, project requirements, and other information
                  you choose to submit.
                </li>

                <li>
                  <strong className="text-gray-900">Technical information</strong>{" "}
                  such as browser type, device information, IP address, and
                  pages visited when analytics or similar technologies are used.
                </li>
              </ul>
            </section>

            {/* =================================================
                03 — HOW WE USE INFORMATION
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>

              <p>
                Information collected through the website may be used for the
                following purposes:
              </p>

              <ul className="mt-5 space-y-3 list-disc pl-6">
                <li>Responding to enquiries and requests.</li>
                <li>
                  Understanding project requirements and communicating with
                  potential or existing customers.
                </li>
                <li>Providing and improving our products and services.</li>
                <li>Understanding website usage and improving the user experience.</li>
                <li>Maintaining website security and preventing misuse.</li>
              </ul>

              <p className="mt-5">
                RKbyte does not sell personal information to third parties.
              </p>
            </section>

            {/* =================================================
                04 — CONTACT FORMS
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Contact Forms and Enquiries
              </h2>

              <p>
                When you submit an enquiry through our website, the information
                you provide may be used to contact you regarding your request,
                project, product enquiry, or service requirement.
              </p>

              <p className="mt-4">
                We ask that you avoid submitting sensitive personal information
                that is not necessary for your enquiry.
              </p>
            </section>

            {/* =================================================
                05 — ANALYTICS & COOKIES
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Analytics and Cookies
              </h2>

              <p>
                We may use analytics tools and similar technologies to
                understand how visitors use our website and to improve its
                performance.
              </p>

              <p className="mt-4">
                Depending on the services enabled on the website, these
                technologies may collect information such as pages visited,
                approximate usage patterns, browser information, and technical
                identifiers.
              </p>

              <p className="mt-4">
                You can control or restrict cookies through your browser
                settings. Disabling certain cookies may affect some website
                functionality.
              </p>
            </section>

            {/* =================================================
                06 — THIRD PARTY SERVICES
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Third-Party Services
              </h2>

              <p>
                We may use trusted third-party services to operate and improve
                parts of our website and business processes.
              </p>

              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-6">

                <ul className="space-y-3">
                  <li>
                    <strong className="text-gray-900">
                      Google Analytics
                    </strong>{" "}
                    — for website usage and analytics, where enabled.
                  </li>

                  <li>
                    <strong className="text-gray-900">
                      Google Sheets
                    </strong>{" "}
                    — may be used to process and organize information submitted
                    through website forms.
                  </li>

                  <li>
                    <strong className="text-gray-900">
                      Zoho Mail
                    </strong>{" "}
                    — may be used for business email communication.
                  </li>
                </ul>

              </div>

              <p className="mt-5">
                Third-party providers may process information according to
                their own privacy policies and terms. We encourage you to
                review the relevant policies of services you interact with.
              </p>
            </section>

            {/* =================================================
                07 — DATA RETENTION
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Data Retention
              </h2>

              <p>
                We retain information only for as long as reasonably necessary
                for the purpose for which it was collected, to communicate with
                you, provide requested services, maintain business records, or
                meet applicable legal and operational requirements.
              </p>
            </section>

            {/* =================================================
                08 — DATA SECURITY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Data Security
              </h2>

              <p>
                We take reasonable measures to protect information submitted
                through our website from unauthorized access, misuse, loss, or
                disclosure.
              </p>

              <p className="mt-4">
                However, no method of transmission or electronic storage can be
                guaranteed to be completely secure.
              </p>
            </section>

            {/* =================================================
                09 — YOUR RIGHTS
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Your Choices and Rights
              </h2>

              <p>
                Depending on applicable law, you may have rights relating to
                the personal information we hold about you, including the
                ability to request access, correction, or deletion of your
                information.
              </p>

              <p className="mt-4">
                If you would like to make a privacy-related request, please
                contact us using the email address provided below.
              </p>
            </section>

            {/* =================================================
                10 — CHILDREN'S PRIVACY
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Children's Privacy
              </h2>

              <p>
                Our website is intended for general audiences and is not
                specifically directed toward children. We do not knowingly
                request personal information from children for purposes that
                are not appropriate or permitted by applicable law.
              </p>
            </section>

            {/* =================================================
                11 — POLICY UPDATES
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Changes to This Privacy Policy
              </h2>

              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to our website, services, technologies, or applicable
                requirements.
              </p>

              <p className="mt-4">
                Any updated version will be published on this page together
                with a revised “Last updated” date.
              </p>
            </section>

            {/* =================================================
                12 — CONTACT
            ================================================= */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy or how RKbyte
                handles your information, please contact us.
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
            Privacy Matters
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Have a question about your information?
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
            If you have questions about how your information is handled,
            contact the RKbyte team.
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