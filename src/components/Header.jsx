import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();
		if (query.trim()) {
			navigate(`/search/${query}`);
		} else {
			setError(true);
		}
	};

	return (
		<div className='bg-amber-950 flex justify-between items-center px-10 py-7 text-white'>
			<img src='https://www.themealdb.com/images/logo-small.png' alt='Logo' />
			<div className='flex items-center space-x-10'>
				<Link to={'/'}>
					<button className='text-lg font-medium  px-3 rounded-md bg-orange-600 py-1'>
						Home
					</button>
				</Link>
				<Link to={'/categories'}>
					<button className='text-lg font-medium  px-3 rounded-md bg-amber-900 py-1'>
						Categories
					</button>
				</Link>
				<Link to={'/api'}>
					<button className='text-lg font-medium  px-3 rounded-md  py-1'>
						API
					</button>
				</Link>
				<form
					className={`${
						error ? 'border-red-600 border-2' : 'border-none'
					} bg-white flex space-x-3 rounded-md overflow-hidden`}
					onSubmit={handleSearch}
				>
					<input
						type='text'
						placeholder='Search'
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
							setError(false);
						}}
						className={` py-2 px-3 border-none text-black outline-none font-semibold`}
					/>
					<button className='text-black border-l border-black px-2 font-medium text-lg hover:bg-gray-200 transition-all'>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
