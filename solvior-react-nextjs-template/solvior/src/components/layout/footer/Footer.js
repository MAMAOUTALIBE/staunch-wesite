import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer = ({ footerType }) => {
	return (
		<footer className="tj-footer-area footer-1">
			{/* <!-- start: Brand Section --> */}
			{footerType === "inner" ? (
				""
			) : (
				<section className="tj-brand-section">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<BrandSlider1 />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* <!-- end: Brand Section --> */}

			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-1 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">Notre bureau</h4>
								</div>
								<div className="infos-item">
									<span>Siège - Guinée</span>
									<p>Kipé, Conakry, République de Guinée</p>
									<Link href="tel:+224629284597">+224 629 28 45 97</Link>
								</div>
								<div className="infos-item">
									<span>WhatsApp & Email</span>
									<p>contact@staunch.gn</p>
									<Link href="https://wa.me/27681834827">+27 68 183 4827</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Liens utiles</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/contact">Nous contacter</Link>
										</li>
										<li>
											<Link href="/contact">Confidentialité</Link>
										</li>
										<li>
											<Link href="/about">À propos</Link>
										</li>
										<li>
											<Link href="/careers">
												Carrières <span>New</span>
											</Link>
										</li>
										<li>
											<Link href="/blogs">Blog</Link>
										</li>
										<li>
											<Link href="/team">Notre équipe</Link>
										</li>
										<li>
											<Link href="/history">Méthodologie</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">Nos services</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">Coaching & Formation</Link>
										</li>
										<li>
											<Link href="/services/2">Accompagnement Startup</Link>
										</li>
										<li>
											<Link href="/services/3">Conseil aux Entreprises</Link>
										</li>
										<li>
											<Link href="/services/4">Implantation en Guinée</Link>
										</li>
										<li>
											<Link href="/services/5">Facilitation Institutionnelle</Link>
										</li>
										<li>
											<Link href="/services/6">Réseautage & Partenariats</Link>
										</li>
										<li>
											<Link href="/services">Tous nos services</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-4 footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">Abonnez-vous à notre newsletter</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Votre email"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										© 2026{" "}
										<Link href="/">
											{" "}
											STAUNCH{" "}
										</Link>{" "}
										Tous droits réservés. MB-JALLOH est un pôle de STAUNCH.
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="contact">Confidentialité</Link>
										</li>
										<li>
											<Link href="contact">Conditions d'utilisation</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer;
