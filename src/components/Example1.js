import { useState } from 'react';

const Parent = () => {
	const [userName, setUserName] = useState('');

	return (
		<div>
			{userName}
			<Child setUserName={setUserName} />
		</div>
	);
};

const Child = ({ setUserName }) => {
	return <GrandChild setUserName={setUserName} />;
};

const GrandChild = ({ setUserName }) => {
	return (
		<div>
			<button
				onClick={() => {
					setUserName('Gaya');
				}}
			>
				Change UserName
			</button>
		</div>
	);
};

export default Parent;
