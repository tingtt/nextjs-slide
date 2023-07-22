module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'refactor',
        'test',
        'revert',
        'docs',
        'ci',
        'slide',
      ],
    ],
  },
}
