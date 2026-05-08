import Link from "next/link";

const ButtonHeaderContact = ({ type }) => {
	return (
		<Link
			className={`header_contact d-none  d-xl-inline-flex`}
			href="tel:+224629284597"
		>
			{type === 2 ? (
				<i className="tji-phone"></i>
			) : (
				<span className="icon">
					<i className="tji-phone"></i>
				</span>
			)}

			{type === 2 ? (
				"+224 629 28 45 97"
			) : (
				<span className="text">+224 629 28 45 97</span>
			)}
		</Link>
	);
};

export default ButtonHeaderContact;
