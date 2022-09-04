import { Route, Routes } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';
import Projects from '../components/Projects/Projects';

const PageRoutes = (): JSX.Element => {
	return (
		<div>
			<Routes>
				<Route path="*" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default PageRoutes;
