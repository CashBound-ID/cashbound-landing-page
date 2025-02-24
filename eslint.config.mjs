import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import baseEslintConfig from "@fit-hub-indonesia/eslint/react.js";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
const PROHIBITED = ["jsx-a11y", "react-hooks", "react"];

const config = compat.extends("next/core-web-vitals").reduce((result, item) => {
  let current = { ...item };
  if (typeof current === "object" && typeof item?.plugins === "object") {
    current.plugins = Object.keys(item.plugins).reduce(
      (accPlugin, pluginConfig) => {
        if (!PROHIBITED.includes(pluginConfig)) {
          accPlugin[pluginConfig] = item.plugins[pluginConfig];
        }
        return accPlugin;
      },
      {},
    );
  }
  result.push(current);
  return result;
}, []);

const eslintConfig = [...baseEslintConfig([
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(react|react-router-dom)'],
            ['^@?\\w'],
            ['@/app', '@/context', '@/modules', '@/repository'],
            ['@/components', '@/hooks'],
            ['@/utils', '@/constant', '@/model', '@/types'],
            [
              '^\\u0000',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ]
          ]
        }
      ]
    }
  },
]), ...config];

export default eslintConfig;
