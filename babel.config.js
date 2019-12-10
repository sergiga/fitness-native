module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@api": "./app/communications",
          "@components": "./app/components",
          "@entities": "./app/model/entities",
          "@hooks": "./app/hooks",
          "@navigators": "./app/navigators",
          "@pages": "./app/pages",
          "@repos": "./app/model/repositories",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ],
};
