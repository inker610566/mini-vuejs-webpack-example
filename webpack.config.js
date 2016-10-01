module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'val!raw',
                exclude: /node_modules/
            }
        ]
    },
    vue: {
        loaders: {
            js: 'val!raw'
        }
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue',
        }
    }
}
