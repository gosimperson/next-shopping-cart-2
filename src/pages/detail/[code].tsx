import { getProducts } from '@/api/product';
import { Container } from '@/components/product/Container';
import { ProductDetail } from '@/components/product/productDetail';
import { ProductProps } from '@/constants/product';
import { GetServerSideProps } from 'next';

interface ProductDetailProps {
	serverData: ProductProps;
}

export default function ProductDetailPage({ serverData }: ProductDetailProps) {
	return (
		<Container>
			<ProductDetail {...serverData} />
		</Container>
	);
}

// Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
// 		fallback: false, // can also be true or 'blocking'
// 	};
// }

export const getServerSideProps: GetServerSideProps<
	ProductDetailProps
> = async (context) => {
	console.log(context.params?.code);

	const code = parseInt((context.params?.code as string) || '1', 10);
	const res = await getProducts();

	if (!res) {
		return {
			notFound: true,
		};
	}

	const data = res.result.find((product) => product.code === code);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			serverData: data,
		},
	};
};
