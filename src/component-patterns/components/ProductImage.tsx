import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import noImage from '../assets/no-image.jpg';
import { ProductImageProps } from '../interfaces/interfaces';

export const ProductImage = ({ img, className, style } : ProductImageProps) => {

	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if(img){
		imgToShow = img;
	}else if(product.images?.[2]){
		imgToShow = product.images?.[2];
	}else{
		imgToShow = noImage;
	}

	return <img className={`${styles.productImg} ${className}`} style={style} src={imgToShow} alt='Product' />
}