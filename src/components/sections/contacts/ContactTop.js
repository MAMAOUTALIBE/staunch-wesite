import Link from "next/link";

const ContactTop = () => {
	return (
		<section className="tj-contact-area section-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								NOUS CONTACTER
							</span>
							<h2 className="sec-title text-anim">Nos coordonnées</h2>
						</div>
					</div>
				</div>
				<div className="row rg-30">
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="contact-icon">
								<i className="tji-email"></i>
							</div>
							<h3 className="contact-title">Écrivez-nous</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:contact@staunch.gn">contact@staunch.gn</Link>
								</li>
								<li>
									<Link href="mailto:mohamedbashir@mbjalloh.com">mohamedbashir@mbjalloh.com</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Appelez-nous</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+224629284597">+224 629 28 45 97</Link>
								</li>
								<li>
									<Link href="tel:+224610201313">+224 610 20 13 13</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="contact-icon">
								<i className="tji-location"></i>
							</div>
							<h3 className="contact-title">Notre bureau</h3>
							<p>Kipé, Conakry, République de Guinée</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">WhatsApp</h3>
							<ul className="contact-list">
								<li>
									<Link href="https://wa.me/27681834827">
										+27 68 183 4827
									</Link>
								</li>
								<li className="active">
									<Link href="/contact">Besoin d'aide ?</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTop;
