import { fromRollup } from "@web/dev-server-rollup";
import rollupJson from "@rollup/plugin-json";
const json = fromRollup(rollupJson);

export default {
  input: "src/**/*",
  mimeTypes: {
    "src/**/*.json": "js",
  },
  plugins: [json()],
};
