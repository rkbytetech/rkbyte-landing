// src/pages/BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts.json";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <p className="text-center py-20">Post not found.</p>;

  return (
    <section className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Post Image */}
        <img
          src={post.image || "/blog-placeholder.jpg"}
          alt={post.title}
          className="rounded-xl shadow mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          {post.date} • {post.author}
        </p>

        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
