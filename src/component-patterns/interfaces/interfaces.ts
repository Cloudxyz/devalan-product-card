import { ReactElement } from 'react';

export interface ProductCardProps{
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}

export interface Product{
	id: number;
	title: string;
	img?: string;
}

export interface ProductTitleProps{
	title?: string;
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