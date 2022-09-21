import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
//deploy
// https://vitejs.dev/config/
export default defineConfig({
  base: "/DeFi-Holding-Site/",
  plugins: [svgr(), react()],
});
