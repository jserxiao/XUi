module.exports = {
    defaultSeverity: 'error',
    extends: [
      'stylelint-config-standard',
      'stylelint-config-standard-less',
      'stylelint-config-html',
      'stylelint-config-recommended-vue',
      'stylelint-config-recess-order'
    ],
    plugins: ['stylelint-order'],
    rules: {
    },
    ignoreFiles: [
      /* see .stylelintignore */
    ]
  }