import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../src'

const product = {
	  id: 1,
	  title: 'Product title',
	  description: 'Product description',
	  price: 100,
	  discountPercentage: 10,
	  rating: 4,
	  stock: 10,
	  brand: 'Brand',
	  category: 'Category',
	  thumbnail: 'https://picsum.photos/200/300',
	  images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
};

const App = () => {
  return (
    <>
      <ProductCard product={product} style={{
			width: '300px',
			marginBottom: '20px'
		}}>
			<ProductImage />
			<ProductTitle />
			<ProductButtons />
		</ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
