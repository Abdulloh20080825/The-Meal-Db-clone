import ProductList from '../components/ProductList';

export default function Home({ products }) {
	return (
		<div className='min-h-screen bg-gray-100 py-8'>
			<h1 className='text-4xl font-bold text-center mb-12'>Our Products</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
				{products.map((item, index) => (
					<ProductList product={item} key={index} />
				))}
			</div>
		</div>
	);
}
