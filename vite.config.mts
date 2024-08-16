import eslintPlugin from '@nabla/vite-plugin-eslint';
import path, {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
    plugins: [eslintPlugin(), dts({include: 'src'})],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: true,
        copyPublicDir: false,
        sourcemap: true,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'TailwindPresetTestLib',
            formats: ['es'],
            fileName: format => `lib.${format}.js`,
        },
        emptyOutDir: true,
    },
});
