import { css } from '@emotion/react';
import { descStyle, iconStyle, priceStyle, productStyle } from './style';
import Image from 'next/image';
import Shopping_Cart from 'public/assets/Shopping Cart.svg';
import { buttonStyle, costStyle, nameStyle } from './detailStyle';

interface ProductProps {
	name: string;
	code: number;
	price: number;
	imgName: string;
}

const divStyle1 = css`
	width: 640px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const hrStyle = css`
	margin-top: 33px;
	margin-bottom: 33px;
	border: 4px solid #aaaaaa;
	width: 100%;
`;

export const ProductDetail = ({ name, code, price, imgName }: ProductProps) => {
	return (
		<div css={divStyle1}>
			<div>
				<Image
					src={`/assets/${imgName}`}
					alt={imgName}
					width={570}
					height={570}
				/>
				<p css={nameStyle}>{name}</p>
			</div>
			<hr css={hrStyle} />
			<div css={costStyle}>
				<span>금액</span>
				<span>{`${price.toLocaleString()} 원`}</span>
			</div>
			<button css={buttonStyle}>장바구니</button>
		</div>
	);
};
