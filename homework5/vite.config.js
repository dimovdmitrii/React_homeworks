// vite.config.js
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react"; // Закомментируй или удали
import reactSWC from "@vitejs/plugin-react-swc"; // <--- ВОТ ПРАВИЛЬНОЕ НАЗВАНИЕ
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr(), // Обязательно первым!
    reactSWC(), // Используем SWC плагин
  ],
});
