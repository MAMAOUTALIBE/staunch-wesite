import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";
import Link from "next/link";

const Contact1 = () => {
	return (
		<section
			className="tj-contact-section"
			style={{ backgroundImage: "url('/images/shapes/contact-bg.png')" }}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="contact-wrapper">
							<div className="contact-left-content">
								<div className="sec-heading style-2">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										// Parlons de votre projet
									</span>
									<h2 className="sec-title text-anim">
										Parlons de votre projet
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											Une équipe d'experts pour entrepreneurs, PME et investisseurs étrangers.
										</p>
									</div>
									<div
										className="contact-button wow fadeInUp"
										data-wow-delay="0.5s"
									>
										<ButtonPrimary
											text={"Nous contacter"}
											url={"/contact"}
											className={"white-btn"}
										/>
									</div>
								</div>
							</div>
							<div
								className="contact-form-one wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h3 className="title">
									Contactez-nous.
								</h3>
								<div className="contact-item">
									<div className="contact-text">
										<i className="fa-solid fa-envelope"></i>
										<Link href="mailto:contact@staunch.gn">
											contact@staunch.gn
										</Link>
									</div>
									<div className="contact-text">
										<i className="fa-sharp fa-solid fa-location-dot"></i>
										Kipé, Conakry, Guinée
									</div>
								</div>
								<form>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="text"
													id="first"
													name="name"
													placeholder="Nom complet*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="email"
													id="emailOne"
													name="email"
													placeholder="Adresse email*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<input
													type="tel"
													id="tel"
													name="tel"
													placeholder="Téléphone*"
													required=""
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-input">
												<div className="tj-nice-select-box">
													<div className="tj-select">
														<FormSelect
															id={"contact"}
															className="nice-select"
															defaultValue={"Service souhaité"}
															items={[
																{ value: "1", name: "Service souhaité" },
																{ value: "2", name: "Coaching & Formation" },
																{ value: "3", name: "Accompagnement Startup" },
																{ value: "4", name: "Conseil aux Entreprises" },
																{ value: "5", name: "Implantation en Guinée" },
																{ value: "6", name: "Facilitation Institutionnelle" },
																{ value: "7", name: "Réseautage & Partenariats" },
															]}
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-12">
											<div className="form-input input-textarea">
												<textarea
													id="message"
													name="message"
													placeholder="Décrivez votre projet"
												/>
											</div>
										</div>
										<div className="submit-button">
											<ButtonPrimary
												text={"Envoyer ma demande"}
												type="submit"
												className={"white-btn"}
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact1;
