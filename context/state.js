import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [checked, setChecked] = useState( false )
	let state = { 
		checked: checked,
		setChecked: setChecked
	}

	return (
		<AppContext.Provider value={state}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}