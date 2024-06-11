import { formatCurrency } from "../../utilities/helpers";

function CartItem() {
    //const { pizzaId, name, quantity, totalPrice } = item;

    return (
        <li>
            <p>
                {}&times; {name}
            </p>
            <div>
                <p>{formatCurrency(1589)}</p>
            </div>
        </li>
    );
}

export default CartItem;
