import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools() // Enables Vue devtools integration
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 8080, // Use port 8080
        open: true, // Auto open browser
        proxy: {
            '/api': {
                target: 'http://localhost:80', // Proxy backend API
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, 'Api')
            }
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor': ['vue', 'vue-router']
                }
            }
        }
    },
    base: '/' // Add base to prevent incorrect routing
})
