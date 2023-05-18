import { css } from '@emotion/react';

export const containerStyle = css`
	position: absolute;
	max-width: calc(282px * 4 + 50px * 5);
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	padding: 0 50px;
	gap: 30px 50px;
`;

export const productStyle = css`
	width: 282px;
	height: 358.03px;
`;

export const iconStyle = css`
	cursor: pointer;
	width: 31px;
`;

export const descStyle = css`
	height: 76px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: nowrap;
	padding: 0 12px;

	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	color: #333333;
`;

export const priceStyle = css`
	font-style: normal;

	font-size: 20px;
	line-height: 27px;
	/* or 133% */

	letter-spacing: 0.5px;
`;
