/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Добавляем правило для обработки CSS файлов
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader", // или MiniCssExtractPlugin.loader, если вы хотите вынести CSS в отдельные файлы
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
    });

    return config;
  },
};
