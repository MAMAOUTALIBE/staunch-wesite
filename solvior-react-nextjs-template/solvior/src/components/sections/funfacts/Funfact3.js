import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const Funfact3 = () => {
	return (
		<section className="tj-evolute-area">
			<div className="container-xxl-fluid  p-0 d-none d-xxl-block">
				<div className="row g-0">
					<div className="col-lg-7">
						<div className="tj-evolute">
							<span
								className="tj-evolute-title mb-30 wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<i className="tji-star-2"></i>Notre histoire
							</span>
							<div className="desc mb-60 wow fadeInUp" data-wow-delay="0.3s">
								« Fondé en 2019 par Mohamed Bashir Jalloh, STAUNCH est né de la
								volonté de proposer un accompagnement entrepreneurial 360° au cœur
								de la Guinée. Ce qui a commencé comme un pôle coaching MB-JALLOH
								est rapidement devenu un cabinet de conseil de référence pour
								entrepreneurs, PME et entreprises étrangères. Nos valeurs — loyauté,
								excellence, confidentialité, impact — guident chacune de nos missions,
								en Guinée et en Afrique de l'Ouest. »
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={100} symbol={"+"} />
									<span className="sub-title">Entrepreneurs accompagnés</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={6} symbol={""} />
									<span className="sub-title">Pôles de services</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={5} symbol={"+"} />
									<span className="sub-title">Années d'expertise</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="tj-evolute-image hover:shine">
							<Image
								src="/images/about/evolute.webp"
								alt="evolute"
								width={715}
								height={650}
								style={{ height: "auto" }}
							/>
							<div className="about-video-box style-2">
								<div className="video-box">
									<PopupVideo>
										<Link
											className="circle glightbox video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<i className="fa-sharp fa-solid fa-play"></i>
										</Link>
									</PopupVideo>
								</div>
								<span className="sub-title">Cliquez pour lancer</span>
								<h5 className="title">Découvrez notre vidéo</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container d-xxl-none">
				<div className="row rg-50 align-items-center">
					<div className="col-xl-6 col-12">
						<div className="tj-evolute">
							<span className="tj-evolute-title mb-30">
								<i className="tji-star-2"></i>Notre histoire
							</span>
							<div className="desc mb-60">
								« Fondé en 2019 par Mohamed Bashir Jalloh, STAUNCH est né de la
								volonté de proposer un accompagnement entrepreneurial 360° au cœur
								de la Guinée. Ce qui a commencé comme un pôle coaching MB-JALLOH
								est rapidement devenu un cabinet de conseil de référence pour
								entrepreneurs, PME et entreprises étrangères. Nos valeurs — loyauté,
								excellence, confidentialité, impact — guident chacune de nos missions,
								en Guinée et en Afrique de l'Ouest. »
							</div>
							<div className="tj-evolute-counter">
								<div className="counter-item">
									<FunfactSingle currentValue={100} symbol={"+"} />
									<span className="sub-title">Entrepreneurs accompagnés</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={6} symbol={""} />
									<span className="sub-title">Pôles de services</span>
								</div>
								<div className="counter-item">
									<FunfactSingle currentValue={5} symbol={"+"} />
									<span className="sub-title">Années d'expertise</span>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-12">
						<div className="tj-evolute-image">
							<img src="/images/about/evolute.webp" alt="evolute" />
							<div className="about-video-box style-2">
								<div className="video-box">
									<PopupVideo>
										<Link
											className="circle glightbox video-popup"
											href="https://www.youtube.com/watch?v=GGf1JjSAKP4"
										>
											<i className="fa-sharp fa-solid fa-play"></i>
										</Link>
									</PopupVideo>
								</div>
								<span className="sub-title">Cliquez pour lancer</span>
								<h5 className="title">Découvrez notre vidéo</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact3;
