import { createDirectus, rest, } from '@directus/sdk';

export interface ProductEntry  {
    id: string;
    brand_name: string;
    flavors: string[];
    price: number;
    product_image: string;
}

const directusUrl = import.meta.env.VITE_DIRECTUS_URL || "http://directus:8055";
const directus = createDirectus(directusUrl).with(rest());

export default directus;
