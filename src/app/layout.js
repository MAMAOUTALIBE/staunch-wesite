import SmoothScroller from "@/components/shared/others/SmoothScroller";
import { Lato, Libre_Franklin } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "venobox/dist/venobox.min.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./assets/css/solvior-icons.css";
import "./globals.scss";
export const metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://staunch.gn"),
	title: {
		default: "STAUNCH — Cabinet de Conseil en Guinée",
		template: "%s | STAUNCH",
	},
	description:
		"STAUNCH est un cabinet de conseil basé à Conakry, Guinée. Coaching, formation, conseil aux entreprises, implantation en Guinée et facilitation institutionnelle. Pôle coaching MB-JALLOH.",
	keywords: [
		"cabinet conseil Guinée",
		"coaching entrepreneurial Conakry",
		"implantation entreprise Guinée",
		"conseil aux entreprises Afrique",
		"MB-JALLOH",
		"Mohamed Bashir Jalloh",
		"consulting Guinée",
		"formation Conakry",
	],
	authors: [{ name: "STAUNCH", url: "https://staunch.gn" }],
	creator: "STAUNCH",
	publisher: "STAUNCH",
	robots: { index: true, follow: true },
	openGraph: {
		type: "website",
		locale: "fr_FR",
		url: "https://staunch.gn",
		title: "STAUNCH — Votre partenaire indéfectible en Guinée",
		description:
			"Cabinet de conseil et accompagnement entrepreneurial. Coaching, formation, implantation en Guinée.",
		siteName: "STAUNCH",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "STAUNCH - Cabinet de Conseil",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "STAUNCH — Cabinet de Conseil en Guinée",
		description: "Votre partenaire indéfectible pour entreprendre en Guinée",
		images: ["/images/og-image.png"],
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	alternates: {
		canonical: "https://staunch.gn",
	},
};

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-body", // optional: set a CSS variable
});

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--tj-ff-heading",
});
export default function RootLayout({ children }) {
	return (
		<html
			lang="fr"
			data-scroll-behavior="smooth"
			className={`${lato.variable} ${libreFranklin.variable}`}
		>
			<body>
				{children}
				<SmoothScroller />
			</body>
		</html>
	);
}
