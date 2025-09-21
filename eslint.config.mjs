import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier"; // importa la flat config di prettier

export default withNuxt()
  .clone()
  .append(prettierConfig) // disabilita le regole eslint in conflitto con prettier
  .append({
    files: ["**/*.js", "**/*.ts", "**/*.vue"],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      // Qui puoi aggiungere regole custom ESLint o sovrascrivere quelle di Nuxt/Prettier
      // Esempio:
      // 'no-console': 'warn',
      // 'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    },
  });
