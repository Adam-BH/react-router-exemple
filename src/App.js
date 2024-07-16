import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Friends } from './pages/Friends/Friends';
import { Profile } from './pages/Profile/Profile';
import { Navbar } from './components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
