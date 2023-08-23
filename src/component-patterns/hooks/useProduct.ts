import { useEffect, useState } from 'react';
import { UseProductsArgs } from '../interfaces/interfaces';


export const useProduct = ( { onChange, product, value = 0 }:UseProductsArgs ) => {
	const [count, setCount] = useState(value);

	const handleAdd = (value: number) => {
		const newValue = count + value;
		setCount(newValue);
		onChange && onChange({count: newValue, product});
	}

	const handleMinus = (value: number) => {
		const newValue = count - value;
		if (count > 0)
		setCount(newValue);
		onChange && onChange({count: newValue, product});
	}

	useEffect(() => {
		setCount(value);
	}, [value]);

	return {
		count,
		handleAdd,
		handleMinus,
	};
}