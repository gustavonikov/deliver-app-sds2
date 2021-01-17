import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';
import { OrderLocationData, Product } from './interfaces';
import OrderSummary from './OrderSummary';

import api from '../../services/api';
import { checkIsSelected } from './helpers';

import './index.css';

export default function Orders() {
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
	const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

	const totalPrice = selectedProducts.reduce((sum, item) => {
		return sum + item.price
	}, 0);

	useEffect(() => {
		api.get('/products').then((res) => {
			setProducts(res.data);
		}).catch((error) => {
			toast.warning('Erro ao listar produtos');
		});
	}, []);

	const handleSelectProduct = (product: Product) => {
		const isAlreadySelected = checkIsSelected(selectedProducts, product);
	
		if (isAlreadySelected) {
			const selected = selectedProducts.filter(item => item.id !== product.id);
			setSelectedProducts(selected);
		} else {
			setSelectedProducts(previous => [...previous, product]);
		}
	};
		
	const handleSubmit = () => {
		const productsIds = selectedProducts.map(({ id }) => ({ id }));
		const payload = {
			...orderLocation!,
			products: productsIds
		}
	
		api.post(`/orders`, payload).then((res) => {
			toast.error(`Pedido enviado com N° ${res.data.id}`);
			setSelectedProducts([]);
		})
			.catch(() => {
				toast.warning('Erro ao enviar pedido');
			})
	}

	return (
		<div className="orders-container">
			<StepsHeader />
			<ProductsList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts} />
			<OrderLocation onChangeLocation={location => setOrderLocation(location)} />
			<OrderSummary quantity={selectedProducts.length} totalPrice={totalPrice} onSubmit={handleSubmit} />
		</div>
	);
}
