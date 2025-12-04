import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // شيلنا componentTagger عشان ما يعملش مشاكل وقت الـ build
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog"],
        },
      },
    },
    // تحسين الأداء
    minify: mode === "production" ? "esbuild" : false,
    // تحسين للإنتاج
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  // تحسين SEO
  define: {
    __SITE_URL__: JSON.stringify("http://shiracartashlih.com"),
    __SITE_NAME__: JSON.stringify("شراء سيارات تشليح"),
  },
}));
