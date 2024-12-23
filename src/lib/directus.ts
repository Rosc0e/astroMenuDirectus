import { createDirectus, rest } from "@directus/sdk";

export interface ProductEntry {
  id: string;
  brand_name: string;
  flavors: string[];
  price: number;
  product_image: string;
  status: boolean;
}

export const assetBaseUrl = `http://localhost:8055/assets/`;
export const directusUrl = import.meta.env.DEV
  ? import.meta.env.VITE_DEV_URL
  : "http://directus:8055";

const directusClient = createDirectus(directusUrl).with(rest());

export default directusClient;
