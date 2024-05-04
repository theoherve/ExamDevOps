import { defineConfig } from 'vite';

export default defineConfig({
    preview: {
        port: 4173,
        strictPort: true,
       },
    server: {
        port: 4173,
        strictPort: true,
        host: true,
        origin: "http://0.0.0.0:4173",
       },
});