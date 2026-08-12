import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceOsRoot = path.resolve(__dirname, "../../../ServiceOS/frontend/foundation");

/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  reactStrictMode: true,
  transpilePackages: ["@serviceos/ui-core", "@serviceos/ui-web", "@serviceos/app-shell-web"],
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@serviceos/app-shell-web/contract-shell": path.resolve(serviceOsRoot, "app-shell-web/src/ContractShell/index.ts"),
      "@serviceos/app-shell-web": path.resolve(serviceOsRoot, "app-shell-web/src/index.ts"),
      "@serviceos/ui-core": path.resolve(serviceOsRoot, "ui-core/src/index.ts"),
      "@serviceos/ui-web": path.resolve(serviceOsRoot, "ui-web/src/index.ts"),
      "lucide-react": path.resolve(__dirname, "node_modules/lucide-react/dist/esm/lucide-react.js"),
    };
    return config;
  },
};

export default nextConfig;
