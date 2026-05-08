import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer2 = () => {
	return (
		<footer className="tj-footer-area footer-2 fix">
			<div className="footer-top-area">
				<div className="container">
					<div className="row line rg-50">
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-1 footer-info">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/primary-logo.png" alt="STAUNCH" />
									</Link>
								</div>
								<p className="desc">
									Cabinet 360° de conseil et d'accompagnement entrepreneurial
									basé à Conakry, Guinée. Pôle coaching : MB-JALLOH.
								</p>
								<div className="footer-social">
									<h5 className="title">Suivez-nous :</h5>
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
							</div>
						</div>
						<div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-2 footer-contact-infos">
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
						<div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer2-col-3 widget_nav_menu">
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
							<div className="footer-widget footer2-col-4 widget_nav_menu">
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
					</div>
				</div>
			</div>
			<div className="footer-copyright-area-2">
				<div className="container">
					<div className="row line">
						<div className="col-xl-4"></div>
						<div className="col-xl-8">
							<div className="copyright-2">
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
									<div className="copyright-menu">
										<ul>
											<li>
												<Link href="/contact">Confidentialité</Link>
											</li>
											<li>
												<Link href="/contact">Conditions d'utilisation</Link>
											</li>
										</ul>
									</div>
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

export default Footer2;
