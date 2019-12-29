module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@api": "./app/communications/",
          "@components": "./app/components/",
          "@entities": "./app/model/entities/",
          "@hooks": "./app/hooks/",
          "@navigators": "./app/navigators/",
          "@pages": "./app/pages/",
          "@managers": "./app/model/managers/",
        },
      }
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
};
