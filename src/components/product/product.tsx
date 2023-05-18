import { css } from '@emotion/react';
import { descStyle, iconStyle, priceStyle, productStyle } from './style';
import Image from 'next/image';
import Shopping_Cart from 'public/assets/Shopping Cart.svg';
import { useRouter } from 'next/router';

interface ProductProps {
	name: string;
	code: number;
	price: number;
	imgName: string;
}

export const Product = ({ name, code, price, imgName }: ProductProps) => {
	const router = useRouter();
	return (
		<div css={productStyle}>
			<Image
				src={`/assets/${imgName}`}
				alt={imgName}
				width={282}
				height={282}
			/>
			<div css={descStyle}>
				<div>
					<p>{name}</p>
					<p css={priceStyle}>{price.toLocaleString()}원</p>
				</div>
				<Shopping_Cart
					css={iconStyle}
					onClick={() => router.push(`/detail/${code}`)}
				/>
			</div>
		</div>
	);
};
