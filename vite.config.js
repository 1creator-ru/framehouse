const { resolve } = require('path')

export default {
    build: {
        minify: false,
        rollupOptions: {
            input: require('fast-glob').sync([
                './**/*.html', '!node_modules', '!dist', '!assets',
            ]).map(entry => resolve(__dirname, entry)),
            output: {
                assetFileNames: `assets/[name].[ext]`,
                manualChunks(id) {
                    if (id.includes('vendor')) {
                        return 'vendor';
                    }
                },
            },
        },
    }
}