import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FormSelect from "@/components/shared/Inputs/FormSelect";

const Contact5 = () => {
	return (
		<section className="tj-contact-area section-bottom-space">
			<div className="container">
				<div className="row rg-50">
					{/* <!-- contact form --> */}
					<div className="col-lg-6">
						<div
							className="contact-form-one style-2 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<h3 className="title text-anim">
								N'hésitez pas à <span>nous contacter</span> ou à venir nous rendre visite.
							</h3>
							<form action="#">
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
															{ value: "8", name: "Autre" },
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
											></textarea>
										</div>
									</div>
									<div className="submit-button">
										<ButtonPrimary text={"Envoyer ma demande"} type="submit" />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* <!-- contact map --> */}
					<div className="col-lg-6">
						<div className="google-map wow fadeInUp" data-wow-delay="0.3s">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31736.71!2d-13.677!3d9.601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd4a7b0!2sKip%C3%A9%2C%20Conakry%2C%20Guinea!5e0!3m2!1sfr!2sgn!4v1700000000000"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact5;
