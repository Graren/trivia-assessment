module.exports = {
  root: true,
  extends: ["eslint:recommended", "@react-native-community", "plugin:import/errors"],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  }
};
