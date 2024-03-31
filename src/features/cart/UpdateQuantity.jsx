import React from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  getCurrentItemQuantity,
  increaseQuantity,
} from "./cartSlice";

const UpdateQuantity = ({ id, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(id))}>
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateQuantity;
