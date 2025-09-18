import React from "react";

export default function Terms() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Acceptance of Terms</h2>
            <p>
              By using rkbyte.com, you agree to these Terms of Service. If you disagree, please stop
              using our site immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Use of Website</h2>
            <p>
              You may use our site for informational and communication purposes only. You must not
              attempt to disrupt or misuse our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Intellectual Property</h2>
            <p>
              All content (text, graphics, logos) is property of RKbyte or its licensors. You may not
              reproduce content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Limitation of Liability</h2>
            <p>
              RKbyte shall not be liable for indirect or consequential damages arising from your use
              of this site, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-gray-900">Contact</h2>
            <p>
              For questions, email{" "}
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
