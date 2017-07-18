const webpack = require("webpack");

module.exports = function (config) {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["mocha"],
    files: ["__tests__/index.ts"],
    preprocessors: { "__tests__/index.ts": ["webpack", "sourcemap"] },

    webpack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  configFileName: "tsconfig.json",
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          "__IVI_DEV__": true,
          "__IVI_BROWSER__": true,
        }),
        new webpack.SourceMapDevToolPlugin({
          test: /\.(ts|js)$/,
        }),
      ],
      resolve: {
        extensions: [".ts", ".js"],
      },
      performance: {
        hints: false
      },
    },

    webpackMiddleware: {
      stats: "errors-only",
      noInfo: true
    },

    reporters: ["mocha"],

    colors: true,
    autoWatch: true,

    client: {
      mocha: {
        reporter: "html",
        ui: "bdd",
      }
    },

    mime: {
      "text/x-typescript": ["ts"],
    },
  });
};
