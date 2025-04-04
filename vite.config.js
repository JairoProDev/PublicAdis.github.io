import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: true,
    }
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["font-awesome"],
        },
      },
    },
  },
});
