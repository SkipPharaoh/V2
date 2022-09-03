import Logo from '../../assets/logo.png';

const Footer = (): JSX.Element => {
	return (
		<footer>
			<a href="/">
				<img src={Logo} alt="Logo" />
			</a>

			<p>Built & Designed by Caniggia Thompson</p>
			<p>&copy; All rights reserved</p>
		</footer>
	);
};

export default Footer;
