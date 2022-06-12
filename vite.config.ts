import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Icons from 'unplugin-icons/vite'
import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@type": path.resolve(__dirname, "./src/types"),
      "@style": path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [
    react(),
    Pages(),
    AutoImport({
      imports: [
        "react",
        "react-router",
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/utils",
        "src/store",
      ],
      vueTemplate: false,
    }),
    Icons({ compiler: 'jsx', jsx: 'react' })
  ],
})
