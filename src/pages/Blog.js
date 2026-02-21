// src/pages/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";

export default function Blog() {
  return (
    <section className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          RKbyte Blog
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Post Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image || "/blog-placeholder.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {post.date} • {post.author}
                </p>
                <p className="text-gray-700 flex-grow">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 text-rkaccent font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
