import Footer from '../Footer/Footer';
import SideFooter from '../SideFooter/SideFooter';
import TechStack from '../TechStack/TechStack';

const Home = (): JSX.Element => {
	return (
		<div>
			<TechStack />
			<SideFooter />
			<Footer />
		</div>
	);
};

export default Home;
