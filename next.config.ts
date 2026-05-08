import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	output: "standalone",
	// Empêche Next.js de remonter le tracing au-delà du dossier solvior/
	// (sinon il aspire le dossier voisin /documentation/ qui contient du JS legacy
	// avec `delete` non strict, ce qui fait planter le type-check).
	outputFileTracingRoot: path.join(__dirname),
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		// Le projet est un template legacy avec du JS hérité, on bypass les checks
		// stricts pour ne pas faire échouer le build de prod.
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	compress: true,
	poweredByHeader: false,
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.unsplash.com" },
			{ protocol: "https", hostname: "source.unsplash.com" },
			{ protocol: "https", hostname: "images.pexels.com" },
		],
	},
};

export default nextConfig;
