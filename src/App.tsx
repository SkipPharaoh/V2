import Header from './components/Header/Header';
import PageRoutes from './utilities/PageRoutes';

const App = (): JSX.Element => {
	return (
		<div>
			<Header />
			<PageRoutes />
		</div>
	);
};

export default App;
