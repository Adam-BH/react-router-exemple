import { useState } from 'react';

export const Friends = () => {
	const [friendsList, setFriendsList] = useState(['adam', 'ahmed', 'ridha']);

	return (
		<>
			<h1>This is Your Friends List</h1>
			{friendsList.map((friend) => {
				return (
					<>
						<h2>{friend}</h2>
						<hr />
					</>
				);
			})}
		</>
	);
};
