import { getRandomInt } from '@/utils/random';
const fs = require('fs');
export interface ProductProps {
	name: string;
	imgName: string;
	code: number;
	price: number;
}

const products: ProductProps[] = [];

const init = () => {
	for (let i = 1; i < 20; ++i) {
		const product: ProductProps = {
			name: `PET보틀 - ${i} (${getRandomInt(20, 60) * 10}ml)`,
			code: i,
			imgName: `product${(i % 8) + 1}.png`,
			price: getRandomInt(50, 1000) * 100,
		};
		products.push(product);
	}
	const jsonData = JSON.stringify({ result: products }, null, 2);

	fs.writeFile('public/products.json', jsonData, (err: any) => {
		if (err) {
			console.error('Error writing JSON file:', err);
			return;
		}
		console.log('JSON file has been written successfully.');
	});
};

if (products.length === 0) {
	init();
}
