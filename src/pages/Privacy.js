import React from "react";

export default function Privacy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Introduction</h2>
            <p>
              RKbyte ("we", "us", "our") is committed to protecting your privacy. This policy explains
              how we handle your information when you use rkbyte.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Personal details you provide (name, email, message).</li>
              <li>Usage data via analytics (IP, browser, pages visited).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Use of Information</h2>
            <p>
              We use your data to respond to enquiries, improve services, and for analytics.
              We never sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Third-Party Services</h2>
            <p>
              We rely on trusted services such as Google Analytics, Google Sheets, and Zoho Mail.
              Their policies apply in addition to ours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Contact</h2>
            <p>
              Questions? Email us at{" "}
              <a href="mailto:founder@rkbyte.com" className="text-rkaccent hover:underline">
                founder@rkbyte.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
