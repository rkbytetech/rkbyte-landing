import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts.json";

export default function LatestBlog() {
  // Get latest 3 posts (sorted by date)
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="bg-gray-50 py-16" id="latest-blog">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Latest from the <span className="text-rkaccent">Blog</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Post Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={post.image || "/blog-placeholder.jpg"}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Post Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
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

        {/* Button to Blog Page */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="px-6 py-3 bg-rkaccent text-black font-semibold rounded-lg shadow hover:bg-rkaccent/90 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
