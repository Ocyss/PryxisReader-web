// eslint.config.mjs
// https://github.com/antfu/eslint-config
import antfu from "@antfu/eslint-config";
import perfectionistNatural from "eslint-plugin-perfectionist/configs/recommended-natural";
import recommendedConfig from "eslint-plugin-prettier/recommended";

export default antfu(
  {
    rules: {
      "antfu/if-newline": "off",
      "antfu/top-level-function": "off",
      "import/order": "off",
      "style/arrow-parens": "off",
      "style/brace-style": "off",
      "style/indent": "off",
      "style/indent-binary-ops": "off",
      "style/jsx-closing-tag-location": "off",
      "style/jsx-indent": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/member-delimiter-style": "off",
      "style/no-trailing-spaces": "off",
      "style/operator-linebreak": "off",
      "style/quotes": "off",
      "style/semi": "off",
    },
    solid: true,
    typescript: {
      tsconfigPath: "tsconfig.json",
    },
  },
  perfectionistNatural,
  recommendedConfig,
  {
    ...recommendedConfig,
    files: ["*.md"],
    ignores: ["index.html"],
    rules: {
      ...recommendedConfig.rules,
      "prettier/prettier": ["error", { parser: "angular" }],
    },
  },
);
