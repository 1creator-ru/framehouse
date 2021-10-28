const { resolve } = require('path')

export default {
    build: {
        minify: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'test/index.html')
            },
            output: {
                assetFileNames: `assets/[name].[ext]`,
                // vendor: ['vendor', 'bootstrap', 'swiper'],
                manualChunks(id) {
                    if (id.includes('vendor')) {
                        return 'vendor';
                    }
                }
            },
        },
    }
}