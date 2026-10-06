// src/pages/BlogPost.js
import React from "react";
import { useParams } from "react-router-dom";
import posts from "../data/posts.json";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="bg-white min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-600 text-lg">
          Post not found.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Post Image */}
        <img
          src={post.image || "/blog-placeholder.jpg"}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-10"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-gray-500 mb-10">
          {post.date} • {post.author}
        </p>

        {/* Blog Content */}
        <article className="text-lg text-gray-700 leading-relaxed">

          {post.content.map((item, index) => {

            {/* NEW STRUCTURED CONTENT */}
            if (typeof item === "object" && item !== null) {
              return (
                <section key={index} className="mb-10">

                  {/* Section Heading */}
                  {item.heading && (
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5">
                      {item.heading}
                    </h2>
                  )}

                  {/* Section Paragraphs */}
                  {item.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="mb-5"
                    >
                      {paragraph}
                    </p>
                  ))}

                </section>
              );
            }

            {/* OLD CONTENT FORMAT */}
            return (
              <p key={index} className="mb-5">
                {item}
              </p>
            );
          })}

        </article>
      </div>
    </section>
  );
}