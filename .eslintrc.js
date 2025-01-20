module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off'
  },
  settings: {
    next: {
      rootDir: '.'
    }
  }
} 