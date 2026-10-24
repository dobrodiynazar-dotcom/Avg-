import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  outputFileTracingRoot: repoRoot,
  turbopack: {
    root: repoRoot,
  },
};

export default withPayload(nextConfig);
