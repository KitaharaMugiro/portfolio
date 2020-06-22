require("dotenv").config();

module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
  // assetPrefix: process.env.BASE_URL || ""
};
