import { useCallback } from 'react';
import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ProductButtonsProps } from '../interfaces/interfaces';

export const ProductButtons = ({className, style}: ProductButtonsProps) => {

	const { handleAdd, handleMinus, count, maxCount } = useContext(ProductContext);

	const isMaxReached = useCallback(
	  () => !!maxCount && count === maxCount,
	  [count, maxCount],
	)

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => handleMinus(1)}> - </button>
			<div className={styles.countLabel}>{count}</div>
			<button className={`${styles.buttonAdd} ${(isMaxReached() && styles.disabled)}`} onClick={() => handleAdd(1)}> + </button>
		</div>
	)
}