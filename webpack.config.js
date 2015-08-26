module.exports = {
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        path: '.',
        filename: "bundle.js"
    },
    devtool: "#inline-source-map",
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
    devServer: {
        contentBase: "./",
        noInfo: true,
        inline: true,
        historyApiFallback: true
    }
};
