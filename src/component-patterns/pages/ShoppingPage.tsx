import { ProductButtons, ProductImage, ProductPrice, ProductTitle } from "../components"
import { ProductCard } from "../components/ProductCard"
import { useShoppingCard } from "../hooks/useShoppingCard";
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

	const { products, shoppingCart, onProductCountChange } = useShoppingCard();

	return (
		<div style={{
			width: '80%',
		}}>
			<>
				<h1>Shopping Page</h1>
				<hr />

				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
					flexWrap: 'wrap'
				}}>
					{
						products.map(product => (
							<ProductCard product={product} className='bg-dark text-white' style={{
								width: '300px',
								marginBottom: '20px'
							}}
								key={product.id}
								onChange={ onProductCountChange }
								value={shoppingCart[product.id]?.count || 0}
							>
								<ProductImage className='custom-image' />
								<ProductTitle className='text-bold' />
								<br/>
								<ProductPrice className='text-bold' />
								<ProductButtons className="custom-buttons"/>
							</ProductCard>
						))
					}
				</div>

				<div className="shopping-cart">
					{
						Object.values(shoppingCart).map(product => (
							<ProductCard product={product} className='bg-dark text-white' style={{
								width: '100px',
							}}
								onChange={ onProductCountChange }
								key={product.id}
								value={product.count}
							>
								<ProductImage className='custom-image' style={{
									height: '100px',
								}}/>
								<ProductTitle className='text-bold' title={`${product.count}`}/>
								<ProductButtons className="custom-buttons" />
							</ProductCard>
						))
					}
				</div>
			</>
		</div>
	)
}
