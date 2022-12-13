import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <Button
      onClick={toggleCartHandler}
      quantity={cartQuantity}
      title={"Cart"}
    />
  );
};

export default CartButton;
