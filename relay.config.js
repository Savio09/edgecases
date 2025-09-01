module.exports = {
  src: './',
  schema: './schema.graphql',
  language: 'typescript',
  artifactDirectory: './__generated__',
  exclude: [
    '**/node_modules/**',
    '**/__generated__/**',
    '.next/**',
    'dist/**',
  ],
};
