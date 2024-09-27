import React from 'react';

export default function Api() {
	return (
		<div className='min-h-screen bg-gray-100 py-12'>
			<div className='max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg'>
				<h1 className='text-4xl font-bold mb-6 text-center'>TheMealDB API</h1>

				<p className='text-gray-700 mb-6 text-lg'>
					TheMealDB is a free, open-source database of recipes from around the
					world. Developers can use this API to access meal information,
					ingredients, and instructions for creating delicious meals.
				</p>

				<h2 className='text-2xl font-semibold mb-4'>API Endpoints</h2>
				<ul className='list-disc pl-5 text-gray-700 mb-8'>
					<li className='mb-2'>
						<strong>Search by Meal Name:</strong>{' '}
						<code className='bg-gray-100 p-1 rounded'>
							GET /api/json/v1/1/search.php?s=mealName
						</code>
					</li>
					<li className='mb-2'>
						<strong>Look up Meal by ID:</strong>{' '}
						<code className='bg-gray-100 p-1 rounded'>
							GET /api/json/v1/1/lookup.php?i=mealId
						</code>
					</li>
					<li className='mb-2'>
						<strong>Get a Random Meal:</strong>{' '}
						<code className='bg-gray-100 p-1 rounded'>
							GET /api/json/v1/1/random.php
						</code>
					</li>
					<li className='mb-2'>
						<strong>List Meal Categories:</strong>{' '}
						<code className='bg-gray-100 p-1 rounded'>
							GET /api/json/v1/1/categories.php
						</code>
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mb-4'>Example Response</h2>
				<pre className='bg-gray-100 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto'>
					{`{
  "meals": [
    {
      "idMeal": "52772",
      "strMeal": "Teriyaki Chicken Casserole",
      "strCategory": "Chicken",
      "strArea": "Japanese",
      "strInstructions": "Preheat oven to 350° F...",
      "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
    }
  ]
}`}
				</pre>

				<h2 className='text-2xl font-semibold mb-4'>Getting Started</h2>
				<p className='text-gray-700 mb-4'>
					To use TheMealDB API, you can start by making a simple `GET` request
					to the available endpoints. Here's an example using `fetch` in
					JavaScript:
				</p>
				<pre className='bg-gray-100 p-4 rounded-lg text-sm text-gray-700 overflow-x-auto'>
					{`fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Teriyaki')
  .then(response => response.json())
  .then(data => console.log(data));`}
				</pre>

				<p className='text-gray-700 mt-6'>
					For more information, visit the official{' '}
					<a
						href='https://www.themealdb.com/api.php'
						className='text-blue-500 underline'
						target='_blank'
						rel='noopener noreferrer'
					>
						TheMealDB API Documentation
					</a>
					.
				</p>
			</div>
		</div>
	);
}
