import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function SearchProducts() {
	const [products, setProducts] = useState([]);
	const { query } = useParams();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			try {
				const res = await axios.get(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
				);
				setProducts(res.data.meals || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, [query]);
	if (loading) {
		return <div className='text-center text-2xl'>Loading...</div>;
	}
	if (products.length === 0) {
		return (
			<div className='text-center text-xl'>
				No products found for &quot;{query}&quot;
			</div>
		);
	}

	return (
		<div className='bg-gray-100 min-h-screen p-8'>
			<h1 className='text-3xl font-bold text-center mb-6'>
				Search Results for &quot;{query}&quot;
			</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
				{products.map((product) => (
					<div
						key={product.idMeal}
						className='bg-white p-4 rounded-lg shadow-md'
					>
						<img
							src={product.strMealThumb}
							alt={product.strMeal}
							className='w-full h-48 object-cover rounded-md mb-4'
						/>
						<h2 className='text-xl font-semibold mb-2'>{product.strMeal}</h2>
						<p className='text-gray-600 mb-4'>
							Category: {product.strCategory}
						</p>
						<Link
							to={`/product/${product.strMeal}`}
							className='text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md inline-block'
						>
							View Details
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
