import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Friend = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [user, setUser] = useState({ name: '', age: 0 });

	useEffect(() => {
		// getting data from the database
		fetchuserwithid(id);
	}, []);

	const fetchuserwithid = (id) => {
		if (id === 'hello') {
			setUser({ name: 'adam', age: 23 });
		} else {
			navigate('/friends');
		}
	};

	return (
		<div>
			<h2>Your friends Profile</h2>
			<h3>Name: {user.name}</h3>
			<h3>Age: {user.age}</h3>
		</div>
	);
};
