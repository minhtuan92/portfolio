import angular from 'angular-eslint';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    ignores: ['environments/**', 'dist/**', 'node_modules/**', '.angular/**']
  },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended, angular.configs.tsRecommended],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        project: ['tsconfig.app.json', 'tsconfig.spec.json']
      }
    },
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      prettier: prettierPlugin
    },
    processor: angular.processInlineTemplates,
    rules: {
      ...prettierConfig.rules,
      'class-methods-use-this': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      'prettier/prettier': 'error'
    }
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'angular', endOfLine: 'auto' }]
    }
  }
]);
