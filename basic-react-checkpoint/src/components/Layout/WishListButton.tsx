import { useAppDispatch, useAppSelector } from "../Hooks/redux-hooks";
import { uiActions } from "../../store/ui-slice";
import Button from "../UI/Button";
import { wishActions } from "../../store/wishList-slice";

const WishListButton = () => {
  const dispatch = useAppDispatch();
  const wishQuantity = useAppSelector((state) => state.wish.totalQuantity);

  const toggleHandler = () => {
    dispatch(uiActions.toggleWish());
  };

  return (
    <Button
      onClick={toggleHandler}
      quantity={wishQuantity}
      title={"Wish List"}
    />
  );
};

export default WishListButton;
