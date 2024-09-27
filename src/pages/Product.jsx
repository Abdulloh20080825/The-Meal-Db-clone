import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Product() {
	const [product, setProduct] = useState({});
	const navigate = useNavigate();
	const { name } = useParams();

	useEffect(() => {
		const getProduct = async () => {
			const res = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
			);
			setProduct(res.data.meals[0]);
		};
		getProduct();
	}, [name]);

	const goBack = () => {
		navigate(-1);
	};

	if (!product.idMeal) {
		return <div className='text-center'>Loading...</div>;
	}

	return (
		<div className='bg-gray-100 min-h-screen flex justify-center items-center relative py-8'>
			<button
				onClick={goBack}
				className='absolute top-4 left-4 text-blue-500 hover:text-blue-700'
			>
				Back
			</button>
			<div className='bg-white shadow-lg rounded-lg max-w-2xl w-full p-6'>
				<h1 className='text-3xl font-bold text-center mb-6'>
					{product.strMeal}
				</h1>
				<div className='mb-6'>
					<img
						src={product.strMealThumb}
						alt={product.strMeal}
						className='w-full h-auto rounded-lg shadow-md'
					/>
				</div>

				<p className='text-gray-700 leading-relaxed mb-6'>
					{product.strInstructions}
				</p>
				<div className='mb-6'>
					<p className='mb-2'>
						<strong>Category:</strong> {product.strCategory}
					</p>
					<p className='mb-2'>
						<strong>Area:</strong> {product.strArea}
					</p>
					{product.strSource && (
						<p className='mb-2'>
							<strong>Source:</strong>{' '}
							<a
								href={product.strSource}
								className='text-blue-500 underline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Recipe Source
							</a>
						</p>
					)}
				</div>

				<div className='mb-6'>
					<h2 className='text-2xl font-semibold mb-4'>Ingredients</h2>
					<ul className='list-disc pl-5'>
						{[...Array(20).keys()].map((i) => {
							const ingredient = product[`strIngredient${i + 1}`];
							const measure = product[`strMeasure${i + 1}`];
							return (
								ingredient && (
									<li key={i} className='mb-1'>
										{measure} {ingredient}
									</li>
								)
							);
						})}
					</ul>
				</div>

				{/* YouTube Link */}
				{product.strYoutube && (
					<a
						href={product.strYoutube}
						target='_blank'
						rel='noopener noreferrer'
						className='block text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
					>
						Watch on YouTube
					</a>
				)}
			</div>
		</div>
	);
}
