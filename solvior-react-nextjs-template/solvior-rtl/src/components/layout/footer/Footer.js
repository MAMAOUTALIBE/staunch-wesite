import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import BackToTop from "@/components/shared/others/BackToTop";
import Link from "next/link";

const Footer = ({ footerType }) => {
	return (
		<footer className="tj-footer-area footer-1">
			{/* <!-- start: Brand Section --> */}
			{footerType === "inner" ? (
				""
			) : (
				<section className="tj-brand-section">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<BrandSlider1 />
							</div>
						</div>
					</div>
				</section>
			)}

			{/* <!-- end: Brand Section --> */}

			<div className="footer-top-area fix">
				<div className="container">
					<div className="row rg-50 line">
						<div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-1 footer-contact-infos">
								<div className="footer-title">
									<h4 className="title">مكاتبنا</h4>
								</div>
								<div className="infos-item">
									<span>المقر الرئيسي - الولايات المتحدة الأمريكية</span>
									<p>993 رينر بيرغ، ويست روند، MT 94251-030</p>
									<Link href="tel:1009544-7818">+1 (009) 544-7818</Link>
								</div>
								<div className="infos-item">
									<span>العمليات - كندا</span>
									<p>الجناح 452 8082 بونر بارج، إلفيراتون، CA 48998</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-2 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-2 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">الموارد</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/contact">اتصل بنا</Link>
										</li>
										<li>
											<Link href="/contact">سياسة الخصوصية</Link>
										</li>
										<li>
											<Link href="/about">الجوائز والتقديرات</Link>
										</li>
										<li>
											<Link href="/careers">
												الوظائف <span>جديد</span>
											</Link>
										</li>
										<li>
											<Link href="/blogs">المدونة</Link>
										</li>
										<li>
											<Link href="/team">التعليقات</Link>
										</li>
										<li>
											<Link href="/contact">خطأ 404</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-3 widget_nav_menu">
								<div className="footer-title">
									<h4 className="title">الخدمات</h4>
								</div>
								<div className="widget-menu">
									<ul>
										<li>
											<Link href="/services/1">التخطيط الاستراتيجي</Link>
										</li>
										<li>
											<Link href="/services/2">بحث السوق</Link>
										</li>
										<li>
											<Link href="/services/3">عمليات الأعمال</Link>
										</li>
										<li>
											<Link href="/services/4">الإدارة المالية</Link>
										</li>
										<li>
											<Link href="/services/5">إدارة التغيير</Link>
										</li>
										<li>
											<Link href="/services/6">استشارات تقنية المعلومات</Link>
										</li>
										<li>
											<Link href="/services/1">القيادة</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
							<div className="footer-widget footer1-col-4 footer-newsletter-form">
								<div className="newsletter-title">
									<h3 className="title">اشترك في النشرة الإخبارية</h3>
								</div>
								<div className="newsletter-form">
									<form>
										<div className="form-input">
											<input
												type="email"
												id="email"
												name="email"
												placeholder="أدخل البريد الإلكتروني"
												required=""
											/>
											<button className="tj-footer-input-btn">
												<i className="fa-solid fa-paper-plane"></i>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										© 2025{" "}
										<Link href="/" target="_blank">
											{" "}
											Solvior{" "}
										</Link>{" "}
										جميع الحقوق محفوظة.
									</p>
								</div>
								<div className="copyright-socails">
									<ul>
										<li>
											<Link href="https://www.facebook.com/">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/">
												<i className="fa-brands fa-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="contact">السياسة والخصوصية</Link>
										</li>
										<li>
											<Link href="contact">الشروط والأحكام</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- start: back to top --> */}
			<BackToTop />
			{/* <!-- end: back to top --> */}
		</footer>
	);
};

export default Footer;
