import { useEffect, useState, useRef } from 'react';
import { UseProductsArgs } from '../interfaces/interfaces';


export const useProduct = ( { onChange, product, value = 0, initialValues }:UseProductsArgs ) => {
	const [count, setCount] = useState(initialValues?.count || value);
	const maxCount = initialValues?.maxCount || 10;

	const isMounted = useRef(false);

	const handleAdd = (value: number) => {
		if(count >= maxCount) return;
		let newValue = count + value;
		if(newValue >= maxCount) newValue = maxCount;
		setCount(newValue);
		onChange && onChange({count: newValue, product});
	}

	const handleMinus = (value: number) => {
		let newValue = count - value;
		if (count > 0)
		if(value <= 0) newValue = 0;
		setCount(newValue);
		onChange && onChange({count: newValue, product});
	}

	const reset = () => {
		setCount(initialValues?.count || value);
	}

	useEffect(() => {
		if(!isMounted.current) return;
		else isMounted.current = true;
		setCount(value);
	}, [value]);

	return {
		count,
		maxCount,
		isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount >= count,
		handleAdd,
		handleMinus,
		reset,
	};
}