import { useEffect, useState } from 'react';

import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import { OrderLocationData, Product } from './interfaces';
import api from '../../services/api';

import './index.css';

export default function Orders() {
	const [products, setProducts] = useState<Product[]>([]);
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

	useEffect(() => {
		api.get('/products').then((res) => {
			setProducts(res.data);
		}).catch((error) => {
			console.log(error);
		});
	}, []);

	/* const handleSelectProduct = (product: Product) => {
			const isAlreadySelected = selectedProducts.some(item => item.id === product.id);
		
			if (isAlreadySelected) {
				const selected = selectedProducts.filter(item => item.id !== product.id);
				setSelectedProducts(selected);
			} else {
				setSelectedProducts(previous => [...previous, product]);
			}
		}
		
		const handleSubmit = () => {
			const productsIds = selectedProducts.map(({ id }) => ({ id }));
			const payload = {
				...orderLocation!,
				products: productsIds
			}
		
			saveOrder(payload).then(() => {
				toast.error('Pedido enviado com sucesso!');
				setSelectedProducts([]);
			})
				.catch(() => {
					toast.warning('Erro ao enviar pedido');
				})
		} */

	return (
		<div className="orders-container">
			<StepsHeader />
			<ProductsList products={products} />
			<OrderLocation onChangeLocation={location => setOrderLocation(location)} />
		</div>
	);
}
