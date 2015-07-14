module.exports = {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      caseSensitive: true,
      keepClosingSlash: false
    },
    files: {
        "build/index.html": "source/index.html",
        "build/blog.html": "source/blog.html",
        "build/post.html": "source/post.html",
        "build/form.html": "source/form.html"
    }
};
