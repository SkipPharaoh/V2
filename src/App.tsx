import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App: React.FC<{}> = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
