import { useNavigate } from 'react-router-dom';

export const Home = (props) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		props.toggleLoggedIn();
		navigate('/profile');
	};

	return (
		<div>
			<h1>This is the home page</h1>
			{/* <button onClick={handleLogin}>Login</button> */}
		</div>
	);
};
