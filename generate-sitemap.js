const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rkbyte.com";

// Load data
const productsData = require("./src/data/products.json");
const products = productsData.products;

const posts = require("./src/data/posts.json");

function today() {
  return new Date().toISOString().split("T")[0];
}

function generateSitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/contact",
    "/blog"
  ];

  const productRoutes = products.map((product) => ({
    url: `/products/${product.slug}`,
    lastmod: today()
  }));

  const blogRoutes = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.date
  }));

  const staticRouteObjects = staticRoutes.map((route) => ({
    url: route,
    lastmod: today()
  }));

  const allRoutes = [...staticRouteObjects, ...productRoutes, ...blogRoutes];

  const urls = allRoutes
    .map((routeObj) => {
      return `
  <url>
    <loc>${siteUrl}${routeObj.url}</loc>
    <lastmod>${routeObj.lastmod}</lastmod>
    <priority>${routeObj.url === "" ? "1.00" : "0.80"}</priority>
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

  console.log("✅ Sitemap with <lastmod> generated successfully!");
}

generateSitemap();