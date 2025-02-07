/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.js"],
  },
}));
