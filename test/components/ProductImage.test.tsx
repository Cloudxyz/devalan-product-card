import React from 'react-dom';
import rendered from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

const product = product2;

describe('ProductImage', () => {
  	test('Debe de mostrar el componente imagen personalizado', () => {
		const wrapper = rendered.create(
			<ProductImage img="https://hola.jpg" />
		);

		expect(wrapper).toMatchSnapshot();
  	});

	test('Debe de mostrar el componente con el titulo del producto', () => {
		const wrapper = rendered.create(
			<ProductCard product={product}>
				{
					() => <ProductImage />
				}
			</ProductCard>
		).toJSON();

		expect(wrapper).toMatchSnapshot();
	});
});
