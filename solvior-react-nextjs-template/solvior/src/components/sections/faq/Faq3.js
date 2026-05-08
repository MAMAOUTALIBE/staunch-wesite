import Accordion from "@/components/shared/accordion/Accordion";

const Faq3 = () => {
	return (
		<section className="tj-faq-area section-space">
			<div className="container">
				<div className="row rg-50 justify-content-between">
					<div className="col-xl-5 col-lg-5">
						<div className="sec-heading mb-0 tj-sticky-top">
							<h2 className="sec-title text-anim">
								Quelle que soit votre stratégie, STAUNCH la pilote à vos côtés.
							</h2>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<Accordion>
							<div className="tj-faq">
								<div
									className="accordion tj-faq-style style-2"
									id="accordionExample"
								>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<h2 className="accordion-header active">
											<button
												className="accordion-button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-1"
												aria-expanded="false"
											>
												Quelle valeur ajoutée un cabinet de conseil apporte-t-il à une entreprise guinéenne ?
											</button>
										</h2>
										<div
											id="collapseOne-1"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Un cabinet comme STAUNCH apporte un regard externe et expert sur
													votre entreprise. Nous identifions les leviers de croissance,
													structurons votre stratégie et mobilisons notre réseau institutionnel
													guinéen pour accélérer votre développement. Notre approche 360° couvre
													coaching, conseil stratégique, implantation et facilitation —
													un seul partenaire, indéfectible, pour toutes vos problématiques.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-2"
												aria-expanded="false"
											>
												Comment savoir si mon entreprise a besoin d'un consultant ?
											</button>
										</h2>
										<div
											id="collapseOne-2"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Vous avez probablement besoin d'un consultant si vous faites
													face à une stagnation de croissance, des inefficacités opérationnelles,
													des choix stratégiques complexes, ou un manque d'expertise interne
													sur des sujets clés (fiscalité, levée de fonds, implantation).
													STAUNCH propose un premier diagnostic gratuit pour qualifier
													ensemble vos besoins et vous orienter vers la bonne intervention.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-3"
												aria-expanded="false"
											>
												Comment STAUNCH facture-t-il ses prestations ?
											</button>
										</h2>
										<div
											id="collapseOne-3"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Nos honoraires sont systématiquement adaptés à la nature et
													à l'envergure de votre projet : forfait par mission, package
													mensuel d'accompagnement, ou success fee sur les levées de fonds
													et les implantations. Toutes nos propositions commerciales sont
													transparentes, négociables, et précèdent toujours un échange
													préalable sans engagement.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.7s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-4"
												aria-expanded="false"
											>
												STAUNCH garantit-il des résultats ?
											</button>
										</h2>
										<div
											id="collapseOne-4"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Aucun cabinet sérieux ne peut garantir un succès à 100% — la
													réussite dépend autant de notre travail que de votre engagement.
													En revanche, STAUNCH garantit la qualité de sa méthodologie,
													la rigueur de son diagnostic et l'engagement total de ses
													consultants. Plus de 100 entrepreneurs accompagnés depuis 2019
													témoignent de l'impact concret de notre approche.
												</p>
											</div>
										</div>
									</div>
									<div
										className="accordion-item wow fadeInUp"
										data-wow-delay="0.9s"
									>
										<h2 className="accordion-header ">
											<button
												className="accordion-button collapsed"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne-5"
												aria-expanded="false"
											>
												Comment mesurer le succès d'une mission de conseil ?
											</button>
										</h2>
										<div
											id="collapseOne-5"
											className="accordion-collapse collapse"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Chaque mission STAUNCH démarre par la définition d'objectifs
													SMART et d'indicateurs de performance clairs : chiffre d'affaires,
													marge, financement obtenu, délais d'implantation, conformité
													réglementaire. Un reporting structuré vous est remis à chaque
													jalon, et un bilan complet est réalisé en fin de mission pour
													objectiver l'impact de notre intervention.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Accordion>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;
