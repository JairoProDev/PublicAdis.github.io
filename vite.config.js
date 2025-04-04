import { defineConfig } from "vite";

export default defineConfig({
  base: "/PublicAdis.github.io/",
  server: {
    port: 5173,
    open: true,
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
