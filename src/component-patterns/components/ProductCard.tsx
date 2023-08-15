import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { Provider } from '../context/ProductContext';
import { ProductCardProps } from '../interfaces/interfaces';

export const ProductCard = ({ children, product } : ProductCardProps) => {

	const {count, handleMinus, handleAdd} = useProduct();

	return (
		<Provider value={{
			count,
			handleMinus,
			handleAdd,
			product
		 }}>
			<div className={styles.productCard}>

				{children}
			</div>
		</Provider>
  	)
}