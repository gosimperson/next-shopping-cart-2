import { getProducts } from '@/api/product';
import { Container } from '@/components/product/Container';
import { Product } from '@/components/product/product';
import { ProductProps } from '@/constants/product';
import { GetStaticProps } from 'next';

interface HomeProps {
	serverData: ProductProps[];
}

export default function Home({ serverData }: HomeProps) {
	return (
		<Container>
			{serverData.map((product, idx) => (
				<Product {...product} key={idx} />
			))}
		</Container>
	);
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const res = await getProducts();

	if (!res) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			serverData: res.result,
		},
	};
};
