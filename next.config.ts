import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	eslint: {
		ignoreDuringBuilds: true,
	},
	reactStrictMode: true,
	compress: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com" },
			{ protocol: "https", hostname: "source.unsplash.com" },
		],
	},
};

export default nextConfig;
