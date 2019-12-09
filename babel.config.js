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
          "@navigators": "./app/navigators",
        },
      },
    ],
  ],
};
