import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

// Top-level await and dynamic import are supported
// const flags = await import('./flags.js').then((m) => m.default ?? m)

const nextConfig: NextConfig = {
  logging: {
    browserToTerminal: true,
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
