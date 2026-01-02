
import { MenuItem, BusinessInfo } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // BEEF BURGERS
  {
    id: 'b1',
    name: 'Classic Angus',
    description: '4oz Beef, cheddar cheese, lettuce, onion, Mayo',
    price: '£5.99',
    prices: [{ label: 'Single', price: '£5.99' }, { label: 'Double', price: '£8.99' }],
    category: 'burgers',
    subcategory: 'Beef Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Red Angus',
    description: '4oz Beef, cheddar cheese, lettuce, onion, Jalapenos, burger sauce & ghost chilli sauce',
    price: '£5.99',
    prices: [{ label: 'Single', price: '£5.99' }, { label: 'Double', price: '£8.99' }],
    category: 'burgers',
    subcategory: 'Beef Burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&h=400&auto=format&fit=crop',
    badge: 'Spicy'
  },
  // CHICKEN BURGERS
  {
    id: 'bc1',
    name: 'Classic Chicken',
    description: 'Lettuce & Mayo',
    price: '£5.99',
    prices: [{ label: 'Single', price: '£5.99' }, { label: 'Double', price: '£8.99' }],
    category: 'burgers',
    subcategory: 'Chicken Burgers',
    image: 'https://images.unsplash.com/photo-1626700051175-656fc7ec33be?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'bc2',
    name: 'Chicken Angus',
    description: 'Cheddar cheese, lettuce, Home-made burger sauce & ghost chilli sauce',
    price: '£5.99',
    prices: [{ label: 'Single', price: '£5.99' }, { label: 'Double', price: '£8.99' }],
    category: 'burgers',
    subcategory: 'Chicken Burgers',
    image: 'https://images.unsplash.com/photo-1615233500570-800473ef9090?q=80&w=600&h=400&auto=format&fit=crop',
    badge: 'Signature'
  },
  // VEG BURGERS
  {
    id: 'bv1',
    name: 'Classic Veg',
    description: 'Veg Patty, Lettuce, tomato, red onion, mayo',
    price: '£5.99',
    category: 'burgers',
    subcategory: 'Veg Burgers',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'bv2',
    name: 'Spicy Bean Burger',
    description: 'Veg Patty, Lettuce, tomato, red onion, mayo',
    price: '£5.99',
    category: 'burgers',
    subcategory: 'Veg Burgers',
    image: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?q=80&w=600&h=400&auto=format&fit=crop',
    badge: 'Spicy'
  },
  {
    id: 'bv3',
    name: 'Halloumi Burger',
    description: 'Finest Cypriot Grilled Halloumi slices, lettuce, tomato, red onion & mayo',
    price: '£6.99',
    category: 'burgers',
    subcategory: 'Veg Burgers',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=600&h=400&auto=format&fit=crop'
  },
  // KEBABS
  {
    id: 'k1',
    name: 'Doner Kebab',
    description: 'Served with Pitta Bread + Salad',
    price: '£7.99',
    prices: [{ label: 'Reg', price: '£7.99' }, { label: 'Large', price: '£9.95' }],
    category: 'kebabs-wraps',
    subcategory: 'Kebabs',
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'k2',
    name: 'Chicken Kebab',
    description: 'Served with Pitta Bread + Salad',
    price: '£7.99',
    prices: [{ label: 'Reg', price: '£7.99' }, { label: 'Large', price: '£9.95' }],
    category: 'kebabs-wraps',
    subcategory: 'Kebabs',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=600&h=400&auto=format&fit=crop'
  },
  // WRAPS
  {
    id: 'w1',
    name: 'Doner Kebab Wrap',
    description: 'Lettuce, Tomato, Red Onion, Mayo and garlic sauce',
    price: '£7.49',
    category: 'kebabs-wraps',
    subcategory: 'Wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-656fc7ec33be?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'w2',
    name: 'Beef Wrap',
    description: '100% Aberdeen angus beef patty, lettuce, tomato, onion & mayo inside in a warm toasty tortilla',
    price: '£6.99',
    category: 'kebabs-wraps',
    subcategory: 'Wraps',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=600&h=400&auto=format&fit=crop'
  },
  // PLATTERS
  {
    id: 'p1',
    name: 'Platter for 3-4 People',
    description: '1 Beef Burger, 1 Chicken Burger, 1/2 Chicken, 6 Wings, 1 Lamb Doner (served with pitta + fries), 2 Fries',
    price: '£39.99',
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&h=400&auto=format&fit=crop',
    badge: 'Family Deal'
  },
  {
    id: 'p2',
    name: 'Platter for 4-6 People',
    description: '1 Beef Burger, 1 Chicken Burger (mix chicken/lamb), 1/2 Chicken, 6 Wings, 1 Lamb Kebab (served with pitta + salad), 1 Lamb Wrap, 2 Fries',
    price: '£49.99',
    category: 'platters',
    image: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=600&h=400&auto=format&fit=crop',
    badge: 'Party Size'
  },
  // GREEK MENU
  {
    id: 'g1',
    name: 'Greek Chicken Gyros',
    description: 'Tzatziki, tomato, lettuce & chips',
    price: '£8.00',
    prices: [{ label: 'Pita Wrap', price: '£8.00' }, { label: 'Box', price: '£15.00' }],
    category: 'greek',
    subcategory: 'Pita Wrap & Box',
    image: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 'g2',
    name: 'Baklava',
    description: 'Fresh Greek homemade filo pastry, with walnuts almond & honey',
    price: '£5.95',
    category: 'greek',
    subcategory: 'Desserts',
    image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=600&h=400&auto=format&fit=crop'
  },
  // SIDES
  {
    id: 's1',
    name: 'Peri Peri Fries',
    description: 'Spicy seasoned golden fries',
    price: '£3.49',
    category: 'chicken-sides',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1630384066242-c72565880f71?q=80&w=600&h=400&auto=format&fit=crop'
  },
  {
    id: 's2',
    name: 'Mozzarella Sticks (9pcs)',
    description: 'Classic stretchy mozzarella sticks',
    price: '£5.99',
    category: 'chicken-sides',
    subcategory: 'Sides',
    image: 'https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?q=80&w=600&h=400&auto=format&fit=crop'
  }
];

export const SPECIAL_OFFERS = [
  {
    title: "1st Visit Special",
    description: "New to Angus Burger? Get 20% OFF your first dine-in dinner!",
    price: "20% OFF",
    tag: "1st Visit"
  },
  {
    title: "2nd Visit Special",
    description: "Welcome back! Enjoy 15% OFF your second dine-in dinner.",
    price: "15% OFF",
    tag: "2nd Visit"
  },
  {
    title: "3rd Visit Special",
    description: "A loyal customer! Get 10% OFF your third dine-in dinner.",
    price: "10% OFF",
    tag: "3rd Visit"
  }
];

export const BUSINESS_INFO: BusinessInfo = {
  name: "Angus Burgers",
  address: "115 Wembley Park Drive, Wembley, London, HA9 8HG",
  phone: "020 8902 7272",
  note: "Open: 12AM-12PM (T&Cs Apply). Table Service £1.95.",
  openingHours: {
    "Mon - Thu": "12:00 PM – 12:00 AM",
    "Fri - Sat": "12:00 PM – 02:00 AM",
    "Sun": "12:00 PM – 12:00 AM"
  }
};
