import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "Naissance du pôle MB-JALLOH",
			desc: "Mohamed Bashir Jalloh lance le pôle de coaching MB-JALLOH, dédié à l'accompagnement personnalisé des entrepreneurs et cadres en Guinée. Premiers diagnostics MBTI et Big Five, premières formations sur-mesure.",
			images: [
				"/images/history/history-1.webp",
				"/images/history/history-2.webp",
			],
			year: 2019,
		},
		{
			title: "Lancement du cabinet STAUNCH",
			desc: "Face à la demande croissante d'accompagnement global — coaching, conseil, implantation, facilitation — création du cabinet 360° STAUNCH, qui intègre MB-JALLOH comme pôle coaching de référence.",
			images: [
				"/images/history/history-3.webp",
				"/images/history/history-4.webp",
			],
			year: 2021,
		},
		{
			title: "Structuration des 6 pôles d'expertise",
			desc: "STAUNCH déploie son offre 360° : Coaching & Formation, Accompagnement Startup, Conseil aux Entreprises, Implantation en Guinée, Facilitation Institutionnelle, Réseautage & Partenariats.",
			images: [
				"/images/history/history-5.webp",
				"/images/history/history-6.webp",
			],
			year: 2023,
		},
		{
			title: "Méthodologie MB-JALLOH formalisée",
			desc: "Notre framework DIAGNOSE / DESIGN / DÉVELOPPER devient la signature méthodologique de STAUNCH. Plus de 100 entrepreneurs accompagnés en Afrique de l'Ouest.",
			images: [
				"/images/history/history-7.webp",
				"/images/history/history-8.webp",
			],
			year: 2024,
		},
		{
			title: "Cap sur l'Afrique de l'Ouest",
			desc: "STAUNCH consolide son rôle de partenaire indéfectible des entrepreneurs guinéens et étend son réseau institutionnel à l'échelle régionale.",
			images: [
				"/images/history/history-9.webp",
				"/images/history/history-1.webp",
			],
			year: 2026,
		},
	];
	return (
		<section className="tj-history-area section-bottom-space">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="timeline">
							{history?.length
								? history?.map(({ title, desc, images, year }, idx) => (
										<div
											key={idx}
											className="timeline-inner wow fadeInUp"
											data-wow-delay={`0.${idx + 1 + idx}s`}
										>
											<div className="date">{year}</div>
											<div className="content">
												<div className="top">
													<span>{modifyNumber(idx + 1)}.</span>
													<h4 className="title">{title}</h4>
													<p>{desc}</p>
												</div>
												<div className="bottom">
													{images?.length
														? images?.map((img, idx) => (
																<Image
																	key={idx + 100}
																	src={
																		img ? img : "/images/history/history-1.webp"
																	}
																	alt="history"
																	width={241}
																	height={204}
																	style={{ height: "auto" }}
																/>
														  ))
														: ""}
												</div>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History1;
