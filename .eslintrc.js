module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  globals: {
    MSG: 'readonly',
    HTTP_STATUS: 'readonly',
    ERROR: 'readonly',
    SUCCESS: 'readonly'
  }
}
