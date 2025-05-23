import path from "path";

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };



  const config = {
    plugins: [react()],
    resolve: {
      base: "/",
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
    },
  };
  return defineConfig(config);
};
