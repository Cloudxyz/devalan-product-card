import React from 'react-dom';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const product = product1;

describe('ProductTitle', () => {
  	test('Debe de mostrar el componente con el titulo personalizado', () => {
		const wrapper = rendered.create(<ProductTitle title="Titulo personalizado" />).toJSON();

		expect(wrapper).toMatchSnapshot();
  	});

	test('Debe de mostrar el componente con el titulo del producto', () => {
		const wrapper = rendered.create(
			<ProductCard product={product}>
				{
					() => <ProductTitle />
				}
			</ProductCard>
		).toJSON();

		expect(wrapper).toMatchSnapshot();
	});
});
