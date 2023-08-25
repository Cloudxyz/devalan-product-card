import React, { ReactElement } from 'react';

export interface ProductCardProps{
	product: Product;
	className?: string;
	style?: React.CSSProperties;
	value?: number;
	initialValues?: ProductInitialValues;
	children?: ReactElement | ReactElement[];
	// children: (args: ProductCardHandlers) => JSX.Element;
	onChange?: (args: OnChangeArgs) => void;
}

export interface ProductInitialValues{
	count?: number;
	maxCount?: number;
}

export interface OnChangeArgs{
	product: Product;
	count: number;
}

export interface UseProductsArgs{
	product: Product;
	value?: number;
	initialValues?: ProductInitialValues;
	onChange?: (args: OnChangeArgs) => void;
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
	product: Product;
	className?: string;
	maxCount?: number;
	handleMinus: (count: number) => void;
	handleAdd: (count: number) => void;
}

export interface ProductCardHandlers{
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;
	handleMinus: (count: number) => void;
	handleAdd: (count: number) => void;
	reset: () => void;
}