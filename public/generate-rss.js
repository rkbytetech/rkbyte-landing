const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rkbyte.com";

const posts = require("./src/data/posts.json");

function generateRSS() {
  const rssItems = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((post) => {
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>RKbyte Blog</title>
    <link>${siteUrl}</link>
    <description>Smart Automation insights from RKbyte</description>
    <language>en-us</language>
    ${rssItems}
  </channel>
</rss>`;

  fs.writeFileSync(
    path.resolve(__dirname, "public/rss.xml"),
    rss
  );

  console.log("✅ RSS feed generated successfully!");
}

generateRSS();