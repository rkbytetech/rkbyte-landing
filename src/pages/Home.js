import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard";
import productsData from "../data/products.json";

export default function Home(){
  const categories = productsData.categories;
  return (
    <div>
      <section className="bg-gradient-to-b from-[#061011] to-[#071214] text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-bold leading-tight">
              RKbyte <span className="text-rkaccent">Smart Automation.</span><br/> Real Impact.
            </motion.h1>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-6 text-gray-200 max-w-lg">
              Affordable IoT-powered automation systems for labs, farms, industry, and homes.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="bg-rkaccent text-black px-5 py-3 rounded shadow">Get Early Access</a>
              <a href="/category/biotech" className="border border-gray-600 px-5 py-3 rounded">Explore Products</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} className="bg-white p-6 rounded-xl shadow-xl">
              <img src="/og-image.svg" alt="RKbyte" className="w-full h-auto rounded" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map(cat=> <CategoryCard key={cat.slug} cat={cat} />)}
        </div>
      </section>
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {productsData.products.slice(0,3).map(p=>(
            <motion.div key={p.slug} whileHover={{y:-6}} className="p-6 border rounded-lg bg-white">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.short}</p>
              <a href={`/category/${p.category}/${p.slug}`} className="mt-4 inline-block text-rkaccent">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
