import { useState } from 'react';

export const Profile = () => {
	const [user, setUser] = useState({ name: 'adam', age: 19 });

	return (
		<div>
			<h2>{user.name}</h2>
			<h3>{user.age}</h3>
		</div>
	);
};
