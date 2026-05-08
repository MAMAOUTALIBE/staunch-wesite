"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import borderRadiusAnimation from "@/libs/borderRadiusAnimation";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

const About1 = () => {
	const animContainerRef = useRef();
	useGSAP(
		() => {
			borderRadiusAnimation(".tj-about-section");
		},
		{ scope: animContainerRef }
	);
	return (
		<section ref={animContainerRef}>
			<div className="tj-about-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-6"></div>
						<div className="col-lg-6">
							<div className="about-left-content">
								<div className="sec-heading">
									<span
										className="sub-title wow fadeInUp"
										data-wow-delay="0.1s"
									>
										شركتنا
									</span>
									<h2 className="sec-title  text-anim">
										صناعة النجاح وتقديم حلول مخصصة لجميع أنواع التحديات الصعبة
									</h2>
									<div className="desc wow fadeInUp" data-wow-delay="0.3s">
										<p>
											مهمتنا الأساسية هي تمكين جميع الشركات من مختلف الأحجام
											لتحقيق النجاح المستدام في سوق الأعمال الديناميكي والمتغير
											باستمرار. نحن ملتزمون بتقديم قيمة استثنائية ونتائج ملموسة
											من خلال استراتيجياتنا وطرقنا المبتكرة والمتطورة، مع
											التركيز على تحسين الأداء والنمو المستدام لكل عملائنا.
										</p>
									</div>
								</div>
								<div
									className="about-feature-item wow fadeInUp"
									data-wow-delay="0.5s"
								>
									<div className="feature-box">
										<div className="feature-left">
											<div className="check-list-one">
												<ul>
													<li>
														<i className="tji-double-check"></i>الخبرة والتجربة
													</li>
													<li>
														<i className="tji-double-check"></i>نهج يركز على
														العميل
													</li>
													<li>
														<i className="tji-double-check"></i>الالتزام بالتميز
													</li>
												</ul>
											</div>
											<div className="about-button">
												<ButtonPrimary url="/about" text={"اقرأ المزيد"} />
											</div>
										</div>
									</div>
									<div className="feature-box">
										<div className="client-experience">
											<ul className="images-thumb">
												<li>
													<Image
														src="/images/about/thumb-1.png"
														alt="Images"
														height={50}
														width={50}
													/>
												</li>
												<li>
													<Image
														src="/images/about/thumb-2.png"
														alt="Images"
														height={50}
														width={50}
													/>
												</li>
												<li>
													<Image
														src="/images/about/thumb-3.png"
														alt="Images"
														height={50}
														width={50}
													/>
												</li>
												<li className="plus">
													<i className="fa-sharp fa-solid fa-plus"></i>
												</li>
											</ul>
											<div className="funfact-item-one">
												<FunfactSingle currentValue={3} symbol={"K+"} />
												<span className="sub-title">
													عملاء سعداء في جميع أنحاء
													<br /> العالم الآن.
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about-bg-images">
					<div className="about-shape-1 hover:shine">
						<Image
							src="/images/about/h2-shape-1.webp"
							alt="Shapes"
							height={624}
							width={756}
						/>
					</div>
					<div className="about-shape-2 hover:shine">
						<Image
							src="/images/about/h2-shape-2.webp"
							alt="Shapes"
							height={137}
							width={138}
						/>
					</div>
					<div className="about-shape-3 zoominout">
						<Image
							src="/images/icons/star.svg"
							alt="Shapes"
							height={42}
							width={42}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About1;
