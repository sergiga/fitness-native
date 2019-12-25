module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@api/*": "./communications/",
          "@components/*": "./components/",
          "@entities/*": "./model/entities/",
          "@hooks/*": "./hooks/",
          "@navigators/*": "./navigators/",
          "@pages/*": "./pages/",
          "@repos/*": "./model/repositories/",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
};
