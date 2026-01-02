
export interface PriceOption {
  label: string;
  price: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // Base price or "From £..."
  prices?: PriceOption[]; // For Single/Double or Reg/Large
  category: 'burgers' | 'kebabs-wraps' | 'platters' | 'greek' | 'chicken-sides' | 'kids' | 'drinks';
  subcategory?: string;
  image: string;
  badge?: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  note: string;
  openingHours: {
    [key: string]: string;
  };
}
