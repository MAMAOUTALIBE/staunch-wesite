export default function sitemap() {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://staunch.gn";
	const lastModified = new Date();
	return [
		{ url: baseUrl, lastModified, priority: 1.0 },
		{ url: `${baseUrl}/about`, lastModified, priority: 0.9 },
		{ url: `${baseUrl}/services`, lastModified, priority: 0.9 },
		{ url: `${baseUrl}/services/1`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/services/2`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/services/3`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/services/4`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/services/5`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/services/6`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/contact`, lastModified, priority: 0.8 },
		{ url: `${baseUrl}/blogs`, lastModified, priority: 0.7 },
		{ url: `${baseUrl}/team`, lastModified, priority: 0.6 },
		{ url: `${baseUrl}/history`, lastModified, priority: 0.6 },
		{ url: `${baseUrl}/faq`, lastModified, priority: 0.5 },
	];
}
