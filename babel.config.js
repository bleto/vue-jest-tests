module.exports = {
    presets: [
        '@vue/app',
    ],
    env: {
        test: {
            presets: ['@babel/env'],
            plugins: [
                // 'dynamic-import-node',
                '@babel/transform-runtime', // https://babeljs.io/docs/en/babel-plugin-transform-runtime
            ],
        },
    },
};
