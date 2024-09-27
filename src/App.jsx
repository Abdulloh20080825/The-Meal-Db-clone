import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './pages/Product';
import SearchProducts from './pages/SearchProducts';
import Api from './pages/Api';
import Categories from './pages/Categories';
import FilterByCategory from './pages/FilterByCategory';

export default function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const response = await axios.get(
				'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
			);
			setProducts(response.data.meals);
		};
		getProducts();
	}, []);

	return (
		<div>
			<Header />
			<Routes>
				<Route index element={<Home products={products} />} />
				<Route path='/api' element={<Api />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/product/:name' element={<Product />} />
				<Route path='/search/:query' element={<SearchProducts />} />
				<Route path='/category/:category' element={<FilterByCategory />} />
			</Routes>
		</div>
	);
}
