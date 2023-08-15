import { useState } from 'react';


export const useProduct = () => {
	const [count, setCount] = useState(0);

	const handleAdd = (value: number) => {
		setCount(count + value);
	}

	const handleMinus = (value: number) => {
		if (count > 0)
		setCount(count - value);
	}

	return {
		count,
		handleAdd,
		handleMinus,
	};
}