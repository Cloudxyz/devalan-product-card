import { ProductButtons, ProductImage, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"

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
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</>
	</div>
  )
}
