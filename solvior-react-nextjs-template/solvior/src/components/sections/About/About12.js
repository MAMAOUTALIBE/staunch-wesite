import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About12 = () => {
	return (
		<section className="tj-history section-space">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-xl-5">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								Notre méthodologie{" "}
							</span>
							<h2 className="sec-title text-anim">
								Découvrez le framework qui guide notre{" "}
								<span>accompagnement.</span>
							</h2>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Notre méthodologie MB-JALLOH repose sur 3 piliers — DIAGNOSE,
								DESIGN, DÉVELOPPER — applicables aussi bien aux individus qu'aux
								entreprises. Elle combine des outils internationaux éprouvés
								(MBTI, Big Five, StrengthsFinder) à une connaissance fine du
								tissu entrepreneurial guinéen.
							</p>
							<p>
								L'objectif : transformer une intuition en plan d'action concret
								et mesurable, et accompagner sa mise en œuvre dans la durée.
							</p>
						</div>
						<div
							className="history-btn mt-30 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<ButtonPrimary text={"En savoir plus"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;
