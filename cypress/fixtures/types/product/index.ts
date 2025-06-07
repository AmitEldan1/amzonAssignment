export type Product = {
  name: string;
  color: string;
  quantity: number;
  shippingFreeFrom?: number;
};

export type UpdatedProduct = {
  title?: string;
  price?: string;
  color?: string;
  quantity?: string;
  size?: string;
};
