import { defineConfig } from "vite";

export default defineConfig({
  base: "/PublicAdis.github.io/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
