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
            { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: ["style", "css"] },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },
    devServer: {
        contentBase: "./",
        noInfo: true,
        inline: true
    }
};
