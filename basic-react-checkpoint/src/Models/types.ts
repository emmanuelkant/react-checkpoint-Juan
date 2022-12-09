import { InitialState } from "../store/cart-slice";

export type Items = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type ListItems = {
  id: string;
  image: string;
  title: string;
  price: number;
};

export type CartItems = {
  id: string;
  items: Items[];
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  totalQuantity: number;
  changed: boolean;
};

export type Notif = {
  status: string;
  title: string;
  message: string;
};

export type ShortCartItem = {
  items: Items[];
  totalQuantity: number;
};

export type ItemProps = {
  id: string;
  title: string;
  quantity: number;
  total: number;
  price: number;
  onRemoveItem: () => void;
  onAddItem: () => void;
  onClear: () => void;
};
