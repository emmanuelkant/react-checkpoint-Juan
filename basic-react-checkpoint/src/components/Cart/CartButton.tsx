import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uiActions } from "../../store/ui-slice";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  console.log(cartQuantity);
  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
