import { Title } from '@/components/cart/Title';
import { Container } from '@/components/cart/Container';
import { List } from '@/components/cart/List';
import { TotalCost } from '@/components/cart/TotalCost';

export default function Cart() {
	return (
		<Container>
			<List>test</List>
			<TotalCost />
		</Container>
	);
}
