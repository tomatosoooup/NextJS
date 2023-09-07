/** @type {import('next').NextConfig} */

const nextConfig = {};

const path = require("path");
const withTM = require("next-transpile-modules")([
  "three",
  "@react-three/fiber",
  "@react-three/drei",
]);

module.exports = withTM({
  // Your next-transpile-modules configuration here...

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
});
