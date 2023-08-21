import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"
import '../styles/custom-styles.css'

const product = {
	id: 1,
	title: 'Coffee Mug',
	img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
	<div>
		<>
			<h1>Shopping Page</h1>
			<hr />

			<div style={{
				display: 'flex',
				justifyContent: 'space-between',
				flexWrap: 'wrap'
			 }}>
				<ProductCard product={product} className='bg-dark text-white' style={{
					width: '300px',
				 }}>
					<ProductImage className='custom-image' />
					<ProductTitle className='text-bold' />
					<ProductButtons className="custom-buttons" />
				</ProductCard>
			</div>
		</>
	</div>
  )
}
