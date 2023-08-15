import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

export const ProductButtons = () => {

	const { handleAdd, handleMinus, count } = useContext(ProductContext);

	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.buttonMinus} onClick={() => handleMinus(1)}> - </button>
			<div className={styles.countLabel}>{count}</div>
			<button className={styles.buttonAdd} onClick={() => handleAdd(1)}> + </button>
		</div>
	)
}