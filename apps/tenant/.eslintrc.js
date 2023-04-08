module.exports = {
  root: true,
  extends: ['custom'],
  rules: {
    'arrow-body-style': 1,
    'react/display-name': 0,
    'import/no-duplicates': 1,
    'no-extra-boolean-cast': 1,
    'react/no-children-prop': 0,
    'react/self-closing-comp': 2,
    '@next/next/no-img-element': 0,
    'react/no-unescaped-entities': 0,
    'import/no-useless-path-segments': 1,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        vars: 'all',
        args: 'none',
      },
    ],
  },
};
