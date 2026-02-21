import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/products.json";

export default function ProductDetail() {
  const { slug, productSlug } = useParams();
  const product = data.products.find(p => p.slug === productSlug && p.category === slug);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <p className="text-gray-600 mt-2">Return to <Link to={`/category/${slug}`}>category page</Link>.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow p-8">
        <div className="md:flex gap-8">
          <div className="md:w-1/3">
            <img src={product.img || "/product-placeholder.png"} alt={product.title} className="w-full object-contain" />
          </div>
          <div className="md:flex-1">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 mt-4">{product.short}</p>

            {product.features && (
              <ul className="list-disc ml-6 mt-4 text-gray-700">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            )}

            <div className="mt-6 flex gap-3">
              <a href="/contact#contact" className="bg-rkaccent text-black px-4 py-2 rounded">Request Demo</a>
              <a href="mailto:founder@rkbyte.com" className="border px-4 py-2 rounded">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
