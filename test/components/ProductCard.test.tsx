import React from 'react-dom';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = rendered;
const product = product1;

describe('ProductCard', () => {
	test('Debe de mostrar el componente correctamente', () => {
		const wrapper = rendered.create(
			<ProductCard product={product}>
				{
					() => <h1>Product Card</h1>
				}
			</ProductCard>
		).toJSON();

		expect(wrapper).toMatchSnapshot();
	});

	test('Debe incrementar el contador', () => {
		const wrapper = rendered.create(
			<ProductCard product={product}>
				{
					({ count, handleAdd, handleMinus }) => (
						<>
							<h1>Product Card</h1>
							<button onClick={() => handleAdd}>Add</button>
							<button onClick={() => handleMinus}>Minus</button>
							<span>{count}</span>
						</>
					)
				}
			</ProductCard>
		);

		let tree = wrapper.toJSON();

		expect(tree).toMatchSnapshot();

		act(() => {
			(tree as any).children[2].props.onClick();
		});

		tree = wrapper.toJSON();

		expect((tree as any).children[1].children[0]).toBe('1');
	});
});
