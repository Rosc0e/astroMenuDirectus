import { createDirectus, rest, } from '@directus/sdk';

export interface ProductEntry  {
    id: string;
    brand_name: string;
    flavors: string[];
    price: number;
    product_image: string;
}






const directus = createDirectus('http://0.0.0.0:8055').with(rest());

export default directus;