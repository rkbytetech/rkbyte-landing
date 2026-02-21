// src/pages/Home.js
import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import LatestBlog from "../components/LatestBlog";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <FeaturesSection />
      <LatestBlog />
      <CTASection />
    </div>
  );
}
