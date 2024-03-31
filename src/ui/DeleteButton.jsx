import React from "react";
import Button from "./Button";
import { deleteItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(id))}>
      Delete
    </Button>
  );
};

export default DeleteButton;
