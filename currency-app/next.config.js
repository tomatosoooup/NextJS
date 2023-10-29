/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/getCurrency",
        destination: "https://api.binance.com/api/v3/avgPrice?symbol=:path*", // Replace with your API's URL
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply headers to your custom route
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000", // Replace with your frontend domain
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};
