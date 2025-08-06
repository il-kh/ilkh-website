const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {

  turbopack: {
    // Add any Turbopack-specific options here
  },

  // Still support MDX for future use, but .md content works independently
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],

  // Allow static export for Netlify/Decap CMS compatibility
  output: "export",

  // Important for Decap CMS to serve correctly from /admin/
  trailingSlash: true,

  // Prevent errors with next/image when exporting statically
  images: {
    unoptimized: true,
  },
};

module.exports = withMDX(nextConfig);
