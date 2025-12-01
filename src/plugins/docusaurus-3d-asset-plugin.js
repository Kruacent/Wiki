module.exports = function(context, options) {
  return {
    name: 'docusaurus-3d-asset-plugin',

    configureWebpack(config, isServer) {
      return {
        module: {
          rules: [
            {
              test: /\.(glb|gltf)$/,
              use: [
                {
                  loader: require.resolve('file-loader'),
                  options: {
                    name: 'assets/models/[name].[ext]',
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};