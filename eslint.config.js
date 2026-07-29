import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintConfigPrettier from 'eslint-config-prettier'

const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.json5'],
    plugins: { json },
    language: 'json/json5',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: ['markdown/recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
    rules: {
      'css/no-invalid-at-rules': RULES.OFF, // Desactivado para permitir at-rules propias de Tailwind (@tailwind, @apply, @layer, etc.)
      'css/no-invalid-properties': RULES.OFF, // Para que no chille con las variables de @theme
      'css/use-baseline': RULES.OFF, // Para permitir scrollbar-width y scrollbar-color
    },
  },
  {
    extends: [eslintPluginAstro.configs.recommended],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      'astro/no-set-html-directive': 'error',
    },
  },
  eslintConfigPrettier,
])
