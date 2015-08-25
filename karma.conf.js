module.exports = function(config) {
    config.set({
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/babel-core/browser-polyfill.js',
            'src/**/*.spec.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.spec.js': ['webpack', 'sourcemap']
        },

        // list of files to exclude
        exclude: [],

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.js|\.jsx$/,
                        exclude: /node_modules/,
                        loader: "babel-loader",
                        query: {
                            optional: [ "es7.decorators" ]
                        }
                    },
                    { test: /\.css$/, loader: "style!css" },
                    { test: /\.scss$/, loader: "style!css!sass" },
                    { test: /\.json$/, loader: "json-loader" }
                ]
            },
            watch: true
        },

        webpackServer: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
