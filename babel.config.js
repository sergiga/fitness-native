module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@components": "./app/components",
          "@store": "./app/store",
        },
      },
    ],
  ],
};
