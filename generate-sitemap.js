const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rkbyte.com";

// Load your data correctly
const productsData = require("./src/data/products.json");
const products = productsData.products;

const posts = require("./src/data/posts.json");

function generateSitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/blog"
  ];

  const productRoutes = products.map(
    (product) => `/products/${product.slug}`
  );

  const blogRoutes = posts.map(
    (post) => `/blog/${post.slug}`
  );

  const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];

  const urls = allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${siteUrl}${route}</loc>
    <priority>${route === "" ? "1.00" : "0.80"}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(
    path.resolve(__dirname, "public/sitemap.xml"),
    sitemap
  );

  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();