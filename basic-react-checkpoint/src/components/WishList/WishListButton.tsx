import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks";
import { uiActions } from "../../store/ui-slice";

const WishListButton = () => {
  const dispatch = useAppDispatch();
  const wishQuantity = useAppSelector((state) => state.wish.totalQuantity);

  const toggleWishHandler = () => {
    dispatch(uiActions.toggleWish());
  };

  return (
    <button onClick={toggleWishHandler}>
      <span>My Wish List</span>
      <span>{wishQuantity}</span>
    </button>
  );
};

export default WishListButton;
