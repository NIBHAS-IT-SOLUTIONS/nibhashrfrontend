// generate-sitemap.js
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');

const sitemap = new SitemapStream({ hostname: 'https://nibhashr.com' });

// Your SPA routes here
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/vacancies', changefreq: 'weekly', priority: 0.7 },
  { url: '/placements-for-jobseekers', changefreq: 'weekly', priority: 0.7 },
  { url: '/Doctorplacements', changefreq: 'weekly', priority: 0.7 },
  { url: '/candidatecorner', changefreq: 'weekly', priority: 0.7 }
];

(async () => {
  for (const link of links) {
    sitemap.write(link);
  }
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());
  console.log('✅ Sitemap successfully generated at /public/sitemap.xml');
})();
