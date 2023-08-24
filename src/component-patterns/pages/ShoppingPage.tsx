import { ProductButtons, ProductImage, ProductPrice, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"
import '../styles/custom-styles.css'

const product = {
	id: 1,
	title: 'Product Title',
	description: 'Product Description',
	price: 100,
	discountPercentage: 10,
	rating: 4,
	stock: 10,
	brand: 'Product Brand',
	category: 'Product Category',
	thumbnail: 'https://picsum.photos/200/300',
	images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
}

export const ShoppingPage = () => {

  return (
	<div>
		<h1>Shopping Page</h1>
		<hr />
		<ProductCard product={product} className='bg-dark text-white' style={{
			width: '300px',
			marginBottom: '20px'
			}}
			initialValues={{
				count: 5,
				maxCount: 10,
			}}
			>
				{
					({ reset, count, handleAdd, handleMinus, isMaxCountReached }) => (
						<>
							<ProductImage className='custom-image' />
							<ProductTitle className='text-bold' />
							<br/>
							<ProductPrice className='text-bold' />
							<ProductButtons className="custom-buttons"/>
							<button onClick={reset}>Reset</button>
							<button onClick={() => handleAdd(2)}>+2</button>
							{
								!isMaxCountReached && <button onClick={() => handleMinus(2)}>-2</button>
							}
							{count}
						</>
					)
				}
		</ProductCard>
	</div>
  )
}
