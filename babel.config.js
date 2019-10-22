module.exports = {
    presets: [
        '@vue/app',
    ],
    env: {
        test: {
            presets: ['@babel/env'],
            plugins: [
                '@babel/transform-runtime',
            ],
        },
    },
};
