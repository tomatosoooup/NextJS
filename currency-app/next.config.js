/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Add the PostCSS loader for CSS files
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "style-loader", // Inject styles into the DOM
        },
        {
          loader: "css-loader", // Translate CSS into CommonJS
        },
        {
          loader: "postcss-loader", // Process CSS with PostCSS
          options: {
            postcssOptions: {
              plugins: [
                require("tailwindcss"), // Include Tailwind CSS
                require("autoprefixer"), // Add vendor prefixes
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, "./app"), // Specify the directory containing your CSS files
    });

    return config;
  },
};

// const withTM = require("next-transpile-modules")([
//   "three",
//   "@react-three/fiber",
//   "@react-three/drei",
// ]);

module.exports = nextConfig;
