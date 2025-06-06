
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-popover'],
          telegram: ['@/lib/telegram', '@/hooks/useTelegram']
        }
      }
    }
  },
  // Оптимизация для Telegram Mini App
  define: {
    __TELEGRAM_MINI_APP__: JSON.stringify(process.env.VITE_IS_TELEGRAM_MINI_APP === 'true')
  }
}));
