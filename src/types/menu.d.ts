export type MenuFormState = {
  status?: string;
  errors?: {
    id?: string[];
    name?: string[];
    description?: string[];
    category?: string[];
    price?: string[];
    discount?: string[];
    image_url?: string[];
    is_available?: string[];
    _form?: string[];
  };
};
