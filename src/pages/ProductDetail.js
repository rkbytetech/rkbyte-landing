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
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="text-gray-600 mt-2">
          Return to{" "}
          <Link className="text-rkaccent" to={`/category/${slug}`}>
            category page
          </Link>.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gray-950 text-white min-h-screen py-20">
      <div className="container mx-auto px-6">

        {/* HERO SECTION */}
        <div className="md:flex gap-12 items-center mb-20">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6">
              {product.title}
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              {product.short}
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-rkaccent text-black px-6 py-3 rounded-lg font-semibold hover:bg-rkaccent/90 transition"
              >
                Request Demo
              </Link>

              <a
                href="mailto:founder@rkbyte.com"
                className="border border-gray-600 px-6 py-3 rounded-lg hover:border-rkaccent hover:text-rkaccent transition"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-2xl mt-10 md:mt-0">
            <img
              src={product.img || "/product-placeholder.png"}
              alt={product.title}
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* FEATURES SECTION */}
        {product.features && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-rkaccent mb-8">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-rkaccent/40 transition"
                >
                  <h3 className="text-lg font-semibold">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA SECTION */}
        <div className="bg-rkaccent text-black rounded-xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h3>
          <p className="mb-6 text-lg">
            Contact RKbyte today to discuss implementation, pricing, and
            customization.
          </p>

          <Link
            to="/contact"
            className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
        </div>

      </div>
    </section>
  );
}