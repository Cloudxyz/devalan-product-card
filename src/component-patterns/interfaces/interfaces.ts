import { ReactElement } from 'react';

export interface ProductCardProps{
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: OnChangeArgs) => void;
	value?: number;
}

export interface OnChangeArgs{
	product: Product;
	count: number;
}

export interface UseProductsArgs{
	onChange?: (args: OnChangeArgs) => void;
	product: Product;
	value?: number;
}

export interface Product{
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images?: string[];
}

export interface ProductInCart extends Product{
	count: number;
}

export interface ProductTitleProps{
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

export interface ProductPriceProps{
	price?: number;
	discountPercentage?: number;
	className?: string;
	style?: React.CSSProperties;
}

export interface ProductImageProps{
	img?: string;
	className?: string;
	style?: React.CSSProperties;
}

export interface ProductButtonsProps{
	className?: string;
	style?: React.CSSProperties;
}

export interface ProductContextProps{
	count: number;
	handleMinus: (count: number) => void;
	handleAdd: (count: number) => void;
	product: Product;
	className?: string;
}