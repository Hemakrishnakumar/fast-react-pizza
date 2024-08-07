import { flushSync } from "react-dom";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCart, getCurrentItemQuantity } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "../../ui/DeleteButton";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const quantity = useSelector(getCurrentItemQuantity(id));

  function handleAddtoCart() {
    const item = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(item));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {!soldOut && quantity === 0 && (
            <Button onClick={handleAddtoCart} type="small">
              Add to cart
            </Button>
          )}
          {/* {quantity > 0 && <UpdateQuantity />} */}
          {quantity > 0 && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateQuantity id={id} quantity={quantity} />
              <DeleteButton id={id} />
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
