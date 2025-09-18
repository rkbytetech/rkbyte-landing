import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryCard({cat}){
  return (
    <Link to={`/category/${cat.slug}`}>
      <motion.div whileHover={{scale:1.03}} className="p-6 rounded-xl bg-white shadow hover:shadow-lg">
        <h3 className="font-semibold text-lg">{cat.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{cat.description}</p>
      </motion.div>
    </Link>
  );
}
