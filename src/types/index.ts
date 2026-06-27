export interface Variant {
  id: string;
  label: string;
  color: string;
  image?: string;
}

export type Category = 'cameras' | 'plan' | 'sensors' | 'accessories'

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceSufex?: string;
  compareAtPrice?: number;
  badge?: string;
  image?: string;
  variants?: Variant[];
  defaultVariant?: string;
  category: Category;
}


export interface Step {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

export type Selections = Record<string, Record<string, number>>;

export type SelectedVariants = Record<string, string>;

export interface ReviewItem {
  productId: string;
  productName: string;
  variantId: string;
  variantLabel: string;
  quantity: number;
  price: number;
  priceSufex?: string;
  compareAtPrice?: number;
  image?: string;
  category: string;
  totalPrice: number;
}

export interface OrderSummary {
  items: ReviewItem[];
  subtotal: number;
  savings: number;
  shipping: number;
  total: number;
}

export interface BundleState {
  selections: Selections;
  selectedVariants: SelectedVariants;

}

export interface UIState {
  activeStep: number;
  isSaved: boolean;
}