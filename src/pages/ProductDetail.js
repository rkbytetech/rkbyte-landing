import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/products.json";

export default function ProductDetail() {
  const { slug, productSlug } = useParams();

  const product = data.products.find(
    (p) => p.slug === productSlug && p.category === slug
  );

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Product not found</h2>

          <p className="text-gray-400 mb-6">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to={`/category/${slug}`}
            className="text-rkaccent hover:underline"
          >
            ← Back to {slug}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-950 text-white min-h-screen">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <p className="text-rkaccent font-semibold tracking-widest uppercase text-sm mb-5">
                {product.category} automation
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                {product.title}
              </h1>

              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mb-8">
                {product.short}
              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  to="/contact"
                  className="bg-rkaccent text-black px-7 py-3.5 rounded-lg font-semibold hover:bg-rkaccent/90 transition"
                >
                  Request a Demo
                </Link>

                <a
                  href="mailto:founder@rkbyte.com"
                  className="border border-gray-600 px-7 py-3.5 rounded-lg font-semibold hover:border-rkaccent hover:text-rkaccent transition"
                >
                  Contact Us
                </a>

              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-2xl p-5 md:p-8 shadow-2xl">

              <img
                src={product.img || "/product-placeholder.png"}
                alt={product.title}
                className="w-full max-h-[500px] object-contain"
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ====================================================== */}
      {product.overview && (
        <section className="py-20 border-t border-gray-800">

          <div className="container mx-auto px-6 max-w-5xl text-center">

            <p className="text-rkaccent font-semibold uppercase tracking-widest text-sm mb-4">
              Overview
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built to make your workflow smarter
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              {product.overview}
            </p>

          </div>

        </section>
      )}


      {/* =====================================================
          KEY FEATURES
      ====================================================== */}
      {product.features && product.features.length > 0 && (
        <section className="py-20">

          <div className="container mx-auto px-6">

            <div className="mb-12">

              <p className="text-rkaccent font-semibold uppercase tracking-widest text-sm mb-3">
                Capabilities
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Key Features
              </h2>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              {product.features.map((feature, index) => (

                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-7 hover:border-rkaccent/50 transition"
                >

                  <div className="w-10 h-10 rounded-lg bg-rkaccent/10 text-rkaccent flex items-center justify-center font-bold mb-5">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      {product.workflow && product.workflow.length > 0 && (
        <section className="py-20 bg-gray-900/40 border-y border-gray-800">

          <div className="container mx-auto px-6">

            <div className="text-center mb-14">

              <p className="text-rkaccent font-semibold uppercase tracking-widest text-sm mb-3">
                Workflow
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                How It Works
              </h2>

            </div>


            <div className="grid md:grid-cols-4 gap-6">

              {product.workflow.map((step, index) => (

                <div
                  key={index}
                  className="relative text-center"
                >

                  <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-rkaccent text-black flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          APPLICATIONS
      ====================================================== */}
      {product.applications && product.applications.length > 0 && (
        <section className="py-20">

          <div className="container mx-auto px-6">

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              <div>

                <p className="text-rkaccent font-semibold uppercase tracking-widest text-sm mb-3">
                  Applications
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  Designed for real-world use
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  Built to support organizations that need better visibility,
                  control and automation across their operations.
                </p>

              </div>


              <div className="grid sm:grid-cols-2 gap-4">

                {product.applications.map((application, index) => (

                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-lg p-5"
                  >
                    <span className="text-rkaccent mr-2">✓</span>
                    {application}
                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}
      {product.technology && product.technology.length > 0 && (
        <section className="py-20 bg-gray-900/40 border-y border-gray-800">

          <div className="container mx-auto px-6 text-center">

            <p className="text-rkaccent font-semibold uppercase tracking-widest text-sm mb-3">
              Technology
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Powered by connected technology
            </h2>

            <div className="flex flex-wrap justify-center gap-4">

              {product.technology.map((tech, index) => (

                <span
                  key={index}
                  className="px-5 py-3 rounded-full border border-gray-700 bg-gray-900 text-gray-300"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="py-20">

        <div className="container mx-auto px-6">

          <div className="bg-rkaccent text-black rounded-2xl px-8 py-14 md:px-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Ready to automate your operations?
            </h2>

            <p className="max-w-2xl mx-auto text-lg mb-8">
              Talk to RKbyte about implementation, customization and
              deployment of this solution.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Request a Demo
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}