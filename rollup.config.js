import merge from "deepmerge";
import json from "@rollup/plugin-json";
import { createSpaConfig } from "@open-wc/building-rollup";

const spaConfig = createSpaConfig({
  injectServiceWorker: true,
  workbox: {
    skipWaiting: false,
  },
});

export default merge(spaConfig, {
  output: {
    sourcemap: false,
  },
  input: "./index.html",
  plugins: [json()],
});
