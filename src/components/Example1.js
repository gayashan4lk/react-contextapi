import { useState, createContext, useContext } from 'react';

const AppContext = createContext({ userName: '', setUserName: () => {} });

const Parent = () => {
	const [userName, setUserName] = useState('');

	return (
		<AppContext.Provider value={{ userName, setUserName }}>
			<div>
				{userName}
				<Child />
			</div>
		</AppContext.Provider>
	);
};

const Child = () => {
	return <GrandChild />;
};

const GrandChild = () => {
	const { setUserName } = useContext(AppContext);

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
