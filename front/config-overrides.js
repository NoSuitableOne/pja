const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css',
            }
        ],
        config
    );

    //css-module & less
    config = rewireLess.withLoaderOptions({
        modifyvars: {},
    })(config, env);

    return config;
};
