import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const CtaSidebar = () => {
	return (
		<div
			className="tj-sidebar-cta"
			style={{
				backgroundImage: "url('/images/blog/widget-cta.webp')",
			}}
		>
			<div className="content">
				<div className="icon">
					<img src="/images/shapes/widget-cta-icon.png" alt="image" />
				</div>
				<h3>
					Besoin d'aide ? <br /> Contactez-nous librement
				</h3>
				<p>
					Notre mission : autonomiser les entrepreneurs et entreprises de
					toutes tailles en Guinée.
				</p>
			</div>
			<div className="cta-btn">
				<ButtonPrimary
					text={"Nous contacter"}
					url={"/contact"}
					className={"white-btn"}
				/>

				<img
					className="shapes move-anim-2"
					src="/images/shapes/carrow.png"
					alt="shape"
				/>
			</div>
		</div>
	);
};

export default CtaSidebar;
