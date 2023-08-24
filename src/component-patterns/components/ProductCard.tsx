import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { Provider } from '../context/ProductContext';
import { ProductCardProps } from '../interfaces/interfaces';

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues } : ProductCardProps) => {

	const {count, handleMinus, handleAdd, maxCount, isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });

	return (
		<Provider value={{
			count,
			product,
			className,
			maxCount,
			handleMinus,
			handleAdd,
		 }}>
			<div className={
				`${styles.productCard}
				${ className }`
			}
				style={style}
			>
				{children({
					count,
					isMaxCountReached,
					maxCount: initialValues?.maxCount,
					product,
					handleAdd,
					handleMinus,
					reset,
				})}
			</div>
		</Provider>
  	)
}