import React from "react";

export default function ProductMiniCard({ product }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={product.img || "/product-placeholder.png"}
        alt={product.title}
        className="w-20 h-20 object-contain bg-white p-2 rounded"
      />
      <div>
        <h4 className="font-semibold">{product.title}</h4>
        <p className="text-sm text-gray-600">{product.short}</p>
      </div>
    </div>
  );
}
