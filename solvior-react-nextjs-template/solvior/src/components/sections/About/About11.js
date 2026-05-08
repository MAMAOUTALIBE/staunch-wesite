import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About11 = () => {
	return (
		<section className="tj-about-info section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-lg-6 col-md-12">
						<div className="pricing-left-content">
							<div className="sec-heading mb-0">
								<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
									À propos de STAUNCH
								</span>
								<h2 className="sec-title text-anim">
									Un cabinet 360° aux côtés des entrepreneurs et entreprises
								</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="desc mb-30 wow fadeInUp" data-wow-delay="0.3s">
							<p>
								STAUNCH est un cabinet de conseil et d'accompagnement entrepreneurial
								basé à Conakry. Notre nom — qui signifie « indéfectible » en anglais —
								incarne notre engagement total : nous restons aux côtés de nos clients,
								à toutes les étapes de leur projet, en Guinée et en Afrique de l'Ouest.
							</p>
							<p>
								Né de l'évolution naturelle du pôle coaching MB-JALLOH, notre cabinet
								propose une réponse 360° : coaching, conseil, implantation, facilitation
								institutionnelle et réseautage stratégique.
							</p>
						</div>
						<div className="about-btn wow fadeInUp" data-wow-delay="0.5s">
							<ButtonPrimary text={"En savoir plus"} url={"/contact"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About11;
