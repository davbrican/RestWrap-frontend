module.exports = {
    configureWebpack: config => {
        config.devServer = {
            host: "0.0.0.0", 
            port: 8081
        }
    }
}