module.exports = {
  dist: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      caseSensitive: true,
      keepClosingSlash: false
    },
    files: {
      'build/index.html': 'src/index.html',
      'build/blog.html': 'src/blog.html',
      'build/post.html': 'src/post.html',
      'build/form.html': 'src/form.html'
    }
  }
};
