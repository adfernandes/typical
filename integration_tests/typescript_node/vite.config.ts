import { defineConfig } from 'vite-plus';

export default defineConfig({
  fmt: {
    ignorePatterns: ['**/*.md'],
    singleQuote: true,
  },
  lint: {
    categories: {
      correctness: 'deny',
      perf: 'deny',
      restriction: 'deny',
      suspicious: 'deny',
    },
    jsPlugins: [
      {
        name: 'vite-plus',
        specifier: 'vite-plus/oxlint-plugin',
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        rules: {
          'no-case-declarations': 'deny',
          'no-fallthrough': 'deny',
          'no-prototype-builtins': 'deny',
          'no-redeclare': 'deny',
          'no-undef': 'deny',
          'no-useless-assignment': 'deny',
        },
        env: {
          node: true,
        },
      },
      {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        rules: {
          'constructor-super': 'allow',
          'getter-return': 'allow',
          'no-class-assign': 'allow',
          'no-const-assign': 'allow',
          'no-dupe-class-members': 'allow',
          'no-dupe-keys': 'allow',
          'no-func-assign': 'allow',
          'no-import-assign': 'allow',
          'no-new-native-nonconstructor': 'allow',
          'no-obj-calls': 'allow',
          'no-setter-return': 'allow',
          'no-this-before-super': 'allow',
          'no-unreachable': 'allow',
          'no-unsafe-negation': 'allow',
          'no-with': 'allow',
          'prefer-const': 'deny',
          'prefer-rest-params': 'deny',
          'prefer-spread': 'deny',
        },
      },
    ],
    plugins: ['oxc', 'typescript', 'unicorn'],
    rules: {
      'no-console': 'allow',
      'no-undefined': 'allow',
      'no-array-constructor': 'deny',
      'typescript/ban-ts-comment': 'deny',
      'typescript/no-unsafe-function-type': 'deny',
      'unicorn/no-array-for-each': 'allow',
      'vite-plus/prefer-vite-plus-imports': 'deny',
    },
  },
});
