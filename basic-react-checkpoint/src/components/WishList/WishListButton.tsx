import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";

const WishListButton = () => {
  const dispatch = useAppDispatch();
  const wishQuantity = useAppSelector((state) => state.wish.totalQuantity);

  const toggleWishHandler = () => {
    dispatch(uiActions.toggleWish());
  };

  return (
    <Button
      onClick={toggleWishHandler}
      quantity={wishQuantity}
      title={"Wish List"}
    />
  );
};

export default WishListButton;
