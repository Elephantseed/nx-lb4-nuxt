module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  // eslint-disable-next-line @typescript-eslint/camelcase
  node: { fs: "empty", child_process: "empty", readline: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader"
          }
        ]
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader"
          }
        ]
      }
    ]
  }
};
