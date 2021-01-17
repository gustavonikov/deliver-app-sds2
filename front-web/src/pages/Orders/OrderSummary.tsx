import { formatPrice } from "./helpers";

interface Props {
    quantity: number;
    totalPrice: number;
    onSubmit: () => void;
};

export default function OrderSummary({ quantity, totalPrice, onSubmit }: Props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="quantity-selected-container">
                        <strong className="quantity-selected">{quantity}</strong>
                        PEDIDOS SELECIONADOS
                    </span>
                    <span className="order-summary-total">
                        <strong className="quantity-selected">
                        {
                            formatPrice(totalPrice)
                        }
                        </strong>
                        VALOR TOTAL
                    </span>
                </div>
                <button className="order-summary-make-order" onClick={onSubmit} on>
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    );
}