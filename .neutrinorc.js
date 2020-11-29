const vue = require('@neutrinojs/vue');
const images = require('@neutrinojs/image-loader');

module.exports = {
  use: [
    vue({
      image: {
        limit: 8192,
        name:
          process.env.NODE_ENV === 'production'
            ? 'assets/[name].[hash:8].[ext]'
            : 'assets/[name].[ext]'
      }
    })
  ]
};
