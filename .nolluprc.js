module.exports = {
    "hot": process.env.NODE_ENV === 'development',
    "contentBase": "./public",
    "historyApiFallback": true,
    "port": 9001,
    "proxy": {
        "/api": "http://localhost:8080"
    }
}