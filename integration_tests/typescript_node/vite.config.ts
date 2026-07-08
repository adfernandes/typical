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
        },
      },
    ],
    plugins: ['oxc', 'typescript', 'unicorn'],
    rules: {
      'no-console': 'allow',
      'no-undefined': 'allow',
      'unicorn/no-array-for-each': 'allow',
    },
  },
});
