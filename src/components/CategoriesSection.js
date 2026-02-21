import React from "react";
import { Link } from "react-router-dom";
import data from "../data/products.json";

export default function CategoriesSection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Explore Our Solutions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.categories.map((cat) => (
          <Link
            to={`/category/${cat.slug}`}
            key={cat.slug}
            className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col items-center text-center p-6"
          >
            <div className="h-28 w-28 flex items-center justify-center bg-gray-100 rounded-full mb-6">
              <img
                src={cat.heroImg || "/category-hero-placeholder.svg"}
                alt={cat.title}
                className="h-16 w-16 object-contain group-hover:scale-110 transition"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {cat.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              {cat.description}
            </p>
            <span className="mt-4 text-rkaccent font-medium group-hover:underline">
              Learn More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
