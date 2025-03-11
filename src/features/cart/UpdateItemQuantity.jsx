import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseQuantity,
  getCurrentQuantityById,
  increaseQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseQuantity(pizzaId));
  }
  function handleDecrease() {
    dispatch(decreaseQuantity(pizzaId));
  }
  return (
    <div className="flex items-center space-x-1">
      <Button onClick={handleDecrease} type={"round"}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button onClick={handleIncrease} type={"round"}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
