import { Link } from 'react-router-dom';

export default function ProductList({ product }) {
	return (
		<div className='bg-white shadow-lg rounded-lg p-6 mx-auto mt-6 h-auto max-w-md hover:shadow-xl transition-shadow duration-300'>
			<Link to={`/product/${product.strMeal}`} className='block mb-4'>
				<img
					src={product.strMealThumb}
					alt={product.strMeal}
					className='w-full h-48 object-cover rounded-lg shadow-md'
				/>
			</Link>
			<h2 className='text-2xl font-bold mb-2'>{product.strMeal}</h2>
			<p className='text-gray-600 text-sm mb-4'>
				{product.strInstructions.slice(0, 100)}...
			</p>
			<ul className='text-gray-700 mb-4'>
				<li className='mb-1'>
					<strong>Category:</strong> {product.strCategory}
				</li>
				<li className='mb-1'>
					<strong>Area:</strong> {product.strArea}
				</li>
				{product.strSource && (
					<li className='mb-1'>
						<strong>Source:</strong>{' '}
						<a href={product.strSource} className='text-blue-500 underline'>
							Recipe Source
						</a>
					</li>
				)}
			</ul>
			<Link
				to={`/product/${product.strMeal}`}
				className='block text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
			>
				View Details
			</Link>
		</div>
	);
}
