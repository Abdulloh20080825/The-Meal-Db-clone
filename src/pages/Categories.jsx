import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					'https://www.themealdb.com/api/json/v1/1/categories.php'
				);
				setCategories(response.data.categories);
			} catch (error) {
				console.error('Error fetching categories:', error);
			}
		};
		fetchCategories();
	}, []);

	if (categories.length === 0) {
		return <div className='text-center'>Loading...</div>;
	}

	return (
		<div className='min-h-screen bg-gray-100 py-12'>
			<div className='max-w-6xl mx-auto'>
				<h1 className='text-4xl font-bold mb-8 text-center'>Meal Categories</h1>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{categories.map((category) => (
						<div
							key={category.idCategory}
							className='bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300'
						>
							<Link to={`/category/${category.strCategory}`}>
								<img
									src={category.strCategoryThumb}
									alt={category.strCategory}
									className='w-full h-48 object-cover rounded-lg mb-4 cursor-pointer'
								/>
							</Link>
							<h2 className='text-2xl font-bold mb-2'>
								{category.strCategory}
							</h2>
							<p className='text-gray-700 mb-4'>
								{category.strCategoryDescription.slice(0, 100)}...
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
