import ProductCard from "./ProductCard";
import { Product } from "./interfaces";

interface Props {
    products: Product[];
};

export default function ProductsList({ products }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}