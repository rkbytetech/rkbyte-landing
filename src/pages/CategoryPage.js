import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/products.json";

export default function CategoryPage(){
  const { slug } = useParams();
  const cat = data.categories.find(c=>c.slug===slug);
  const products = data.products.filter(p=>p.category===slug);
  if(!cat) return <div className="container py-20">Category not found</div>;
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{cat.title}</h1>
      <p className="text-gray-600 mt-2">{cat.description}</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {products.map(p=>(
          <div key={p.slug} className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.short}</p>
            <Link to={`/category/${slug}/${p.slug}`} className="mt-4 inline-block text-rkaccent">Learn more →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
