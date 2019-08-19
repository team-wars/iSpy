module.exports = {
  entry : './src/client/index.js',
  devtool : 'inline-source-map', 
  devServer:{
    port: 8080,
    proxy:{
      context: [],
      target: 'http://localhost:3000',
    }
  },

}