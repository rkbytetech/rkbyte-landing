import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = data.categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Category not found</h2>
        <p className="text-gray-600 mt-2">Try navigating from the homepage categories.</p>
      </div>
    );
  }

  const products = data.products.filter(p => p.category === slug);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-xl p-8 shadow">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{category.title}</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">{category.description}</p>
              <div className="mt-4 flex gap-3">
                <a href="#products" className="bg-rkaccent text-black px-4 py-2 rounded">View Products</a>
                <a href="/contact" className="border border-gray-300 px-4 py-2 rounded">Request a Quote</a>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <img src={category.heroImg || "/category-hero-placeholder.svg"} alt={category.title} className="w-56 h-40 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <section id="products" className="container mx-auto px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Solutions in {category.title}</h2>

        {products.length === 0 ? (
          <div className="p-6 bg-white rounded shadow">
            <p className="text-gray-600">No products listed yet for this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
