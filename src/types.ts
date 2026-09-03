export type NavTab = 'Home' | 'The Domain' | 'Founder' | 'Shop' | 'Lookbook' | 'Contact';

export type ProductCategory =
  | 'ALL'
  | 'NEW ARRIVALS'
  | 'T-SHIRTS'
  | 'HOODIES'
  | 'PANTS'
  | 'JACKETS'
  | 'ACCESSORIES'
  | 'LIMITED EDITION';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number;
  formattedPrice: string;
  tag: string;
  images: string[];
  description: string;
  details?: {
    material: string;
    fit: string;
    care: string;
    shipping: string;
  };
  sizes: string[];
  isNew?: boolean;
  isLimited?: boolean;
  inStock?: boolean;
}

export interface CartItem {
  product: ProductItem;
  size: string;
  quantity: number;
}

export interface LookbookItem {
  id: string;
  title: string;
  collection: string;
  subtitle: string;
  image: string;
  location?: string;
  year?: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export type SupportedLanguage = 'en' | 'zh' | 'ja' | 'my';

export interface LanguageContent {
  label: string;
  heroHeadline: string;
  heroSubheadline: string;
  manifestoTitle: string;
  manifestoLead: string;
  manifestoBody: string[];
  philosophyTitle: string;
  philosophyPoints: { title: string; desc: string }[];
  timeline: {
    stage: string;
    title: string;
    subtitle: string;
    content: string;
    image: string;
  }[];
}

export interface CheckoutCustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  deliveryInstructions: string;
  paymentMethod: 'card' | 'apple_pay' | 'local_bank' | 'Kpay';
}

export interface OrderRecord {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  total: number;
  customer: CheckoutCustomerInfo;
  createdAt: string;
  status: string;
}
