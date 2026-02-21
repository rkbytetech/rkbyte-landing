import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const img = product.img || "/product-placeholder.png";

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md overflow-hidden flex flex-col"
    >
      <div className="h-44 md:h-36 lg:h-44 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={img} alt={product.title} className="object-contain h-full w-full" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-1">{product.short}</p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            to={`/category/${product.category}/${product.slug}`}
            className="text-sm inline-flex items-center gap-2 hover:text-rkaccent"
          >
            Learn more <ArrowRight size={14} />
          </Link>

          <a
            href="/contact#contact"
            className="bg-rkaccent text-black px-3 py-2 rounded text-sm shadow-sm"
            aria-label={`Request demo for ${product.title}`}
          >
            Request Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
