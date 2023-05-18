import { ProductProps } from '@/constants/product';
import axios, { AxiosResponse } from 'axios';

interface ProductResponse {
	result: ProductProps[];
}

export const getProducts = async () => {
	try {
		const res: AxiosResponse<ProductResponse> = await axios.get(
			'http://localhost:3000/products.json'
		);

		const { data } = res;

		return data;
	} catch (error) {
		console.error(error);
	}
};
