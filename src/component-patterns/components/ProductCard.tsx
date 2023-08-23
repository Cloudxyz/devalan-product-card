import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { Provider } from '../context/ProductContext';
import { ProductCardProps } from '../interfaces/interfaces';

export const ProductCard = ({ children, product, className, style, onChange, value } : ProductCardProps) => {

	const {count, handleMinus, handleAdd} = useProduct({ onChange, product, value });

	return (
		<Provider value={{
			count,
			handleMinus,
			handleAdd,
			product,
			className,
		 }}>
			<div className={
				`${styles.productCard}
				${ className }`
			}
				style={style}
			>
				{children}
			</div>
		</Provider>
  	)
}