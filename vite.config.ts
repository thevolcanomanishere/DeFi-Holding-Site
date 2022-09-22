import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
//deploy 2
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
});
