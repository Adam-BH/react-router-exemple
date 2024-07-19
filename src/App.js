import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { useState } from 'react';

import { Home } from './pages/Home/Home';
import { Friends } from './pages/Friends/Friends';
import { Profile } from './pages/Profile/Profile';
import { Navbar } from './components/Navbar/Navbar';
import { NotFound } from './pages/404Page/404Page';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleLoggedIn = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home toggleLoggedIn={toggleLoggedIn} />} />
					<Route path="/friends" element={<Friends />} />
					<Route
						path="/profile"
						element={
							<Profile
								isLoggedin={isLoggedIn}
								toggleLoggedIn={toggleLoggedIn}
							/>
						}
					/>
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
