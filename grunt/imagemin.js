module.exports = {
    dev: {
        option: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            src: ['src/img/**/*.{png,jpg,gif,svg}']
        }]
    },
    dist: {
        option: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            src: ['build/img/**/*.{png,jpg,gif,svg}']
        }]
    }
};
