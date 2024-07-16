import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="friends">Friends</Link>
			<Link to="profile">Profile</Link>
		</div>
	);
};
