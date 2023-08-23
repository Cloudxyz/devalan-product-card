import { useEffect, useState } from 'react';
import { mapProducts } from '../api/ProductsApi';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCard = () => {
	const [products, setProducts] = useState<Product[]>([]);

	const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

	const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
		if(count >= 0)
		setShoppingCart( oldProduct => {
			if(count === 0){
				const { [product.id]: toDelete, ...rest } = shoppingCart;
				return rest;
			}
			return {
				...oldProduct,
				[product.id]: {
					...product,
					count
				}
			}
		})
	}

	useEffect(() => {
		const fetchMappedProducts = async () => {
			const mappedProducts = await mapProducts();
			setProducts(mappedProducts);
		};

		fetchMappedProducts();
	}, []);

	return {
		products,
		shoppingCart,
		onProductCountChange,
	};
}