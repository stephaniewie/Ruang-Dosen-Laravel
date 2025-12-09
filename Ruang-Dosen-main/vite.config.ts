import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import tailwind from "tailwindcss";

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    // @ts-ignore
    plugins.push(screenGraphPlugin());
  }

  return {
    plugins,
    publicDir: "./static",
    base: "./",
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    server: {
      port: 3000,
    },
  };
});
