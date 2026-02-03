import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginStylistic from '@stylistic/eslint-plugin';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginStorybook from 'eslint-plugin-storybook';

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReactHooks.configs['recommended-latest'],
  ...pluginStorybook.configs['flat/recommended'],
  {
    files: [
      'src/**/*.{js,jsx}'
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@stylistic': pluginStylistic
    },
    rules: {
      '@stylistic/array-bracket-spacing': 'warn',
      '@stylistic/arrow-parens': 'warn',
      '@stylistic/arrow-spacing': 'warn',
      '@stylistic/block-spacing': 'warn',
      '@stylistic/brace-style': 'warn',
      '@stylistic/comma-dangle': 'warn',
      '@stylistic/comma-spacing': 'warn',
      '@stylistic/comma-style': 'warn',
      '@stylistic/computed-property-spacing': 'warn',
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/eol-last': 'warn',
      '@stylistic/function-call-spacing': 'warn',
      '@stylistic/generator-star-spacing': 'warn',
      '@stylistic/indent': ['warn', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        StaticBlock: {
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: {
          CallExpression: true
        },
        ignoreComments: false
      }],
      '@stylistic/jsx-curly-newline': 'warn',
      '@stylistic/jsx-curly-spacing': ['warn', 'never'],
      '@stylistic/jsx-equals-spacing': 'warn',
      '@stylistic/jsx-pascal-case': 'warn',
      '@stylistic/jsx-quotes': 'warn',
      '@stylistic/jsx-self-closing-comp': 'warn',
      '@stylistic/jsx-tag-spacing': ['warn', {
        closingSlash: 'never',
        beforeSelfClosing: 'proportional-always',
        afterOpening: 'never',
        beforeClosing: 'proportional-always'
      }],
      '@stylistic/jsx-wrap-multilines': ['warn', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
        propertyValue: 'parens-new-line'
      }],
      '@stylistic/key-spacing': 'warn',
      '@stylistic/keyword-spacing': 'warn',
      '@stylistic/lines-between-class-members': ['warn', {
        enforce: [
          {
            blankLine: 'always',
            prev: 'field',
            next: 'method'
          },
          {
            blankLine: 'always',
            prev: 'method',
            next: 'method'
          }
        ]
      }],
      '@stylistic/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true
        },
        multilineDetection: 'brackets'
      }],
      '@stylistic/newline-per-chained-call': 'warn',
      '@stylistic/new-parens': 'error',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/no-multiple-empty-lines': ['warn', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }],
      '@stylistic/no-trailing-spaces': 'warn',
      '@stylistic/no-whitespace-before-property': 'warn',
      '@stylistic/object-curly-newline': ['warn', {
        multiline: true,
        consistent: true
      }],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/padded-blocks': ['warn', 'never'],
      '@stylistic/quote-props': ['warn', 'consistent'],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/rest-spread-spacing': 'warn',
      '@stylistic/semi': 'error',
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/space-before-blocks': 'warn',
      '@stylistic/space-before-function-paren': ['warn', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }],
      '@stylistic/space-in-parens': 'warn',
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': 'warn',
      '@stylistic/spaced-comment': 'warn',
      '@stylistic/template-curly-spacing': 'warn',
      '@stylistic/template-tag-spacing': ['warn', 'never'],
      '@stylistic/wrap-iife': ['error', 'inside'],
      '@stylistic/yield-star-spacing': 'warn',
      'array-callback-return': 'error',
      'no-control-regex': 'off',
      'no-empty': ['warn', {
        allowEmptyCatch: true
      }],
      'no-unused-private-class-members': 'warn',
      'no-unused-vars': 'off',
      'no-useless-constructor': 'warn',
      'no-useless-escape': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'warn'
    }
  },
  {
    ignores: [
      'dist/',
      'test/',
      '*.config.js'
    ]
  }
];
