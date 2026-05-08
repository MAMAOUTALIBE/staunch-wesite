import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<section className="tj-counter-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								حقائق ممتعة
							</span>
							<h2 className="sec-title text-anim">
								استكشاف معلومات ممتعة وحقائق شيقة
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="counter-wrapper">
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={93} symbol={"%"} />
								<span className="sub-title">المشاريع المكتملة</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={20} symbol={"M"} />
								<span className="sub-title">الوصول إلى العالم</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={8.5} symbol={"x"} />
								<span className="sub-title">نمو أسرع</span>
							</div>
							<div className="counter-item">
								<div className="bottom-line d-md-none"></div>
								<FunfactSingle currentValue={100} isSup={"+"} />
								<span className="sub-title">الجوائز المحققة</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Funfact1;
