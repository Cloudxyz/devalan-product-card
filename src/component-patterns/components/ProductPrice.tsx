import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { ProductPriceProps } from '../interfaces/interfaces';

export const ProductPrice = ({price, discountPercentage, className, style}: ProductPriceProps) => {

	const { product } = useContext(ProductContext);

	return <span className={`${styles.productDescription} ${className}`} style={style}>
		${price ? price : product.price } MXN
	</span>
}