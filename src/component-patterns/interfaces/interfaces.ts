import { ReactElement } from 'react';

export interface ProductCardProps{
	product: Product;
	children?: ReactElement | ReactElement[];
}

export interface Product{
	id: number;
	title: string;
	img?: string;
}

export interface ProductContextProps{
	count: number;
	handleMinus: (count: number) => void;
	handleAdd: (count: number) => void;
	product: Product;
}