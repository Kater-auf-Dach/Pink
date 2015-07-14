module.exports = {
    dev: {
        option: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            src: ["source/img/**/*.{png,jpg,gif,svg}"]
        }]
    },
    prod: {
        option: {
            optimizationLevel: 3
        },
        files: [{
            expand: true,
            src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
    }
};
