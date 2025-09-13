export const HEADER_TABLE_MENU = [
  'No',
  'Name',
  'Category',
  'Price',
  'Available',
  'Action',
];

export const CATEGORY_LIST = [
  { value: "beverage", label: "Beverage" },
  { value: "food", label: "Food" },
  { value: "dessert", label: "Dessert" },
];

export const AVAILABLITY_LIST = [
    {value:"true", label: "Available"},
    {value:"false", label: "Not Available"}
]

export const INITIAL_MENU = {
  name: '',
  description: '',
  price: '',
  discount: '',
  category: '',
  image_url: '',
  is_available: '',
};
export const INITIAL_STATE_MENU = {
  status: 'idle',
  errors: {
    id: [],
    name: [],
    description: [],
    price: [],
    discount: [],
    category: [],
    image_url: [],
    is_available: [],
    _form: [],
  },
};
