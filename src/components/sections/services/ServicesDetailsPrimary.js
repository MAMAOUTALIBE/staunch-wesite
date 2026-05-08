"use client";
import Accordion from "@/components/shared/accordion/Accordion";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const { currentItem, items, currentId } = option || {};
	const { title, titleLarge, id, iconName, img } = currentItem || {};

	return (
		<section className="tj-service-area section-space">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post mb-0">
								<div
									className="tj-post-thumb hover:shine wow fadeInUp"
									data-wow-delay="0.1s"
								>
									<Image
										src="/images/service/tj-service-1.webp"
										alt="post-image"
										width={870}
										height={498}
										style={{ height: "auto" }}
									/>
								</div>
								<h3 className="tj-post-title text-anim">{titleLarge}</h3>
								<div className="tj-entry-content">
									<p className="wow fadeInUp" data-wow-delay="0.1s">
										STAUNCH vous accompagne sur l'ensemble du cycle de votre
										projet : de la formulation initiale des objectifs à leur
										exécution opérationnelle. Notre intervention démarre toujours
										par un diagnostic rigoureux de votre situation actuelle, de
										votre marché et de votre écosystème institutionnel.
										S'ensuit la co-construction d'objectifs SMART, alignés sur
										votre vision et déclinés en plans d'action mesurables.
									</p>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										Cette mission s'inscrit dans notre approche du conseil :
										coaching individuel, structuration stratégique, accompagnement
										à la levée de fonds, implantation et facilitation institutionnelle.
										Vous bénéficiez de l'expertise terrain de notre équipe, de
										notre connaissance fine du contexte guinéen et de notre réseau
										d'affaires en Afrique de l'Ouest.
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Aperçu de notre intervention</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Notre mission est de transformer votre projet en réussite
											concrète et durable. Indéfectibles à vos côtés, nous
											combinons rigueur méthodologique internationale et
											ancrage terrain en Guinée pour livrer des résultats à
											fort impact.
										</p>
									</div>
									<div
										className="service-check-list mt-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Vision stratégique claire et trajectoire 1-3-5 ans
													pour votre entreprise.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Compréhension fine du tissu économique et
													institutionnel guinéen.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Décisions data-driven adossées à un diagnostic
													rigoureux et chiffré.
												</span>
											</li>
											<li>
												<i className="tji-double-check"></i>
												<span>
													Méthodologie MB-JALLOH éprouvée pour transformer
													votre vision en réalisation.
												</span>
											</li>
										</ul>
									</div>
									<div className="service-images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<Image
														src="/images/service/tj-service-3.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div
													className="image-wrap hover:shine wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<Image
														src="/images/service/tj-service-4.webp"
														alt="service-image"
														width={420}
														height={395}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="check-list mb-40">
										<h4 className="text-anim">Caractéristiques clés</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Cette mission articule diagnostic, design stratégique
											et déploiement opérationnel. Chaque étape est jalonnée
											d'indicateurs de performance clairs, d'un reporting
											structuré et d'un point d'avancement régulier avec votre
											direction.
										</p>
										<p className="wow fadeInUp" data-wow-delay="0.3s">
											Notre méthodologie MB-JALLOH garantit la qualité de
											l'intervention : combinaison d'outils internationaux
											éprouvés (MBTI, Big Five, StrengthsFinder) et d'une
											expertise terrain unique sur l'écosystème guinéen et
											ouest-africain.
										</p>
									</div>
									<div className="row rg-30 justify-content-center">
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.5s"
											>
												<div className="tj-feature-icon">
													<i className="tji-quick"></i>
												</div>
												<h5 className="tj-feature-title">Approche</h5>
												<div className="desc">
													<p>
														Un seul interlocuteur pour toutes vos problématiques :
														stratégie, coaching, implantation, financement.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.7s"
											>
												<div className="tj-feature-icon">
													<i className="tji-results"></i>
												</div>
												<h5 className="tj-feature-title">Résultats mesurables</h5>
												<div className="desc">
													<p>
														Des KPIs définis dès le départ et un reporting
														régulier pour objectiver chaque jalon.
													</p>
												</div>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div
												className="tj-feature wow fadeInUp"
												data-wow-delay="0.9s"
											>
												<div className="tj-feature-icon">
													<i className="tji-personalization"></i>
												</div>
												<h5 className="tj-feature-title">Sur-mesure</h5>
												<div className="desc">
													<p>
														Chaque mission est calibrée à la taille, au secteur
														et aux ambitions de votre entreprise.
													</p>
												</div>
											</div>
										</div>
									</div>

									<div
										className="tj-post-thumb mt-30 mb-0 hover:shine wow fadeInUp"
										data-wow-delay="0.1s"
									>
										<Image
											src="/images/service/tj-service-2.webp"
											alt="post-image"
											width={870}
											height={498}
											style={{ height: "auto" }}
										/>
										<PopupVideo>
											<Link
												className="play-btn glightbox video-popup"
												href="https://www.youtube.com/watch?v=eEzD-Y97ges"
											>
												<i className="fa-sharp fa-solid fa-play"></i>
											</Link>
										</PopupVideo>
									</div>
									<h4 className="text-anim">Questions fréquentes</h4>
									<Accordion>
										<div className="tj-faq mt-30">
											<div
												className="accordion tj-faq-style"
												id="accordionExample"
											>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.1s"
												>
													<h2 className="accordion-header active">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-1"
															aria-expanded="false"
														>
															Quelle valeur un cabinet apporte-t-il à mon entreprise ?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-1"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																STAUNCH apporte un regard expert et un réseau institutionnel solide. Nous structurons votre stratégie, accompagnons votre exécution et mobilisons l'écosystème guinéen pour accélérer votre développement. Notre approche couvre coaching, conseil, implantation et facilitation — un partenariat indéfectible pour transformer vos ambitions en résultats.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.3s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-2"
															aria-expanded="false"
														>
															Comment savoir si mon entreprise a besoin d'un consultant ?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-2"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																STAUNCH apporte un regard expert et un réseau institutionnel solide. Nous structurons votre stratégie, accompagnons votre exécution et mobilisons l'écosystème guinéen pour accélérer votre développement. Notre approche couvre coaching, conseil, implantation et facilitation — un partenariat indéfectible pour transformer vos ambitions en résultats.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.5s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-3"
															aria-expanded="false"
														>
															Comment STAUNCH facture-t-il ses
															prestations ?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-3"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																STAUNCH apporte un regard expert et un réseau institutionnel solide. Nous structurons votre stratégie, accompagnons votre exécution et mobilisons l'écosystème guinéen pour accélérer votre développement. Notre approche couvre coaching, conseil, implantation et facilitation — un partenariat indéfectible pour transformer vos ambitions en résultats.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.7s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-4"
															aria-expanded="false"
														>
															STAUNCH garantit-il des résultats ?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-4"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																STAUNCH apporte un regard expert et un réseau institutionnel solide. Nous structurons votre stratégie, accompagnons votre exécution et mobilisons l'écosystème guinéen pour accélérer votre développement. Notre approche couvre coaching, conseil, implantation et facilitation — un partenariat indéfectible pour transformer vos ambitions en résultats.
															</p>
														</div>
													</div>
												</div>
												<div
													className="accordion-item wow fadeInUp"
													data-wow-delay="0.9s"
												>
													<h2 className="accordion-header ">
														{/* <!-- button --> */}
														<button
															className="accordion-button collapsed"
															data-bs-toggle="collapse"
															data-bs-target="#collapseOne-5"
															aria-expanded="false"
														>
															Comment mesurer le succès d'une mission de
															conseil ?
														</button>
													</h2>
													{/* <!-- content --> */}
													<div
														id="collapseOne-5"
														className="accordion-collapse collapse"
														data-bs-parent="#accordionExample"
													>
														<div className="accordion-body">
															<p>
																STAUNCH apporte un regard expert et un réseau institutionnel solide. Nous structurons votre stratégie, accompagnons votre exécution et mobilisons l'écosystème guinéen pour accélérer votre développement. Notre approche couvre coaching, conseil, implantation et facilitation — un partenariat indéfectible pour transformer vos ambitions en résultats.
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
					</div>
					<div className="col-lg-4">
						<aside className="tj-service-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h5 className="tj-sidebar-widget-title">Nos autres services</h5>
								<div className="service-category">
									<ul>
										{items?.length
											? items?.map(({ title, id }, idx) => (
													<li key={idx}>
														<Link
															className={`${currentId === id ? "active" : ""}`}
															href={`/services/${id}`}
														>
															{title}
															<i className="tji-angle-right"></i>
														</Link>
													</li>
											  ))
											: ""}
									</ul>
								</div>
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
