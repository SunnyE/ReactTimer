module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/8.tests.jsx'],
        preprocessors: {
            'app/tests/**/*.tests.jsx': ['webpack', 'sourcemap']
        },
        reporters:['mocha'],

    });
}