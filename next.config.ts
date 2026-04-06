import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            "*.ino": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.txt": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.glsl": {
                loaders: ["raw"],
                as: "*.js",
            },
            "*.md": {
                loaders: ["raw"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;