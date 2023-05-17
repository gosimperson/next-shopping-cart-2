import { Nav } from '@/components/Nav/Nav';
import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Nav />
			<Component {...pageProps} />
		</>
	);
}
