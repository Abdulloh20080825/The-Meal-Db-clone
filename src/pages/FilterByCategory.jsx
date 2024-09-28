import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function FilterByCategory() {
	const [products, setProducts] = useState([]);
	const { category } = useParams();

	useEffect(() => {
		const getProductsData = async () => {
			const res = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
			);
			const productDetails = await Promise.all(
				res.data.meals.map(async (meal) => {
					const detailsRes = await axios.get(
						`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
					);
					return detailsRes.data.meals[0];
				})
			);

			setProducts(productDetails);
		};
		getProductsData();
	}, [category]);

	if (!products.length) {
		return <h1 className='text-center'>Loading...</h1>;
	}

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{products.map((product, index) => (
				<div key={index} className='bg-white shadow-lg rounded-lg p-6'>
					<h2 className='text-2xl font-bold mb-4'>{product.strMeal}</h2>
					<img
						src={product.strMealThumb}
						alt={product.strMeal}
						className='w-full h-auto rounded-lg shadow-md'
					/>
					<p className='text-gray-700 mb-4'>
						{product.strInstructions.slice(0, 100)}...
					</p>
					<Link
						to={`/product/${product.strMeal}`}
						className='text-blue-500 underline'
					>
						View Details
					</Link>
				</div>
			))}
		</div>
	);
}
