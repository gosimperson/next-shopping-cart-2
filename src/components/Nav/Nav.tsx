import { ReactNode } from 'react';
import Shopping_Cart from 'public/assets/Shopping Cart.svg';

import { useRouter } from 'next/router';
import { navStyle, leftNavStyle, rightNavStyle } from './style';

export const Nav = () => {
	const router = useRouter();
	return (
		<div css={navStyle}>
			<div onClick={() => router.push('/')} css={leftNavStyle}>
				<Shopping_Cart width={51} />
				<p>WOOWA SHOP</p>
			</div>
			<div>
				<nav aria-label="navigation">
					<ul css={rightNavStyle}>
						<li onClick={() => router.push('/cart')}>장바구니</li>
						<li onClick={() => router.push('/list')}>주문목록</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};
