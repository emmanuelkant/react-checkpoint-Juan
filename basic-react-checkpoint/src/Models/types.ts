export type Items = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  isWished: boolean;
};

export type ListItems = {
  id: string;
  image: string;
  title: string;
  price: number;
  isWished: boolean;
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

export type WishItems = {
  id: string;
  items: Items[];
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
  totalQuantity: number;
  changed: boolean;
  isWished: boolean;
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
  image: string;
  quantity: number;
  total: number;
  price: number;
  onRemoveItem: () => void;
  onAddItem: () => void;
};

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};
