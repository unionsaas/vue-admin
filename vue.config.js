module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir: 'dist',
    indexPath: 'index.html',
    assetsDir: 'assets',
    filenameHashing: true,
    devServer: {
        //open: false,
        //host: '0.0.0.0',
        port: 10508
    },
    configureWebpack: {
        plugins: [

        ]
    }
}