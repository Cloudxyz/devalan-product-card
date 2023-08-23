import { Product } from '../interfaces/interfaces';

const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?limit=8');
  const data = await response.json();
  return data.products;
};

export const mapProducts = async (): Promise<Product[]> => {
  const products = await fetchProducts();
  const mappedProducts = products.map((product: Product) => {
    return {
      id: product.id,
      title: product.title,
	  description: product.description,
	  price: product.price,
	  discountPercentage: product.discountPercentage,
	  rating: product.rating,
	  stock: product.stock,
	  brand: product.brand,
	  category: product.category,
	  thumbnail: product.thumbnail,
	  images: product.images
    };
  });
  return mappedProducts;
};