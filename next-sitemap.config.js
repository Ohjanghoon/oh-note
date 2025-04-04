/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://oh-note.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.8,
  robotsTxtOptions: {
    additionalSitemaps: ["https://oh-note.vercel.app/sitemap-0.xml"],
  },
};
