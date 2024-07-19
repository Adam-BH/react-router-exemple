import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export const Profile = (props) => {
	const navigate = useNavigate();
	const [user, setUser] = useState({ name: 'adam', age: 19 });

	if (props.isLoggedin === false) {
		return <Navigate to="/" replace />;
	}

	const handleLogout = () => {
		console.log('user logged out!');

		navigate('/');
		props.toggleLoggedIn();
	};

	return (
		<div>
			<h2>{user.name}</h2>
			<h3>{user.age}</h3>

			<button onClick={handleLogout}>Log out</button>
		</div>
	);
};
