import { css } from '@emotion/react';
export const navStyle = css`
	width: 100%;
	height: 80px;
	left: 0px;
	top: 0px;
	padding: 0 300px;

	background: #2ac1bc;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const leftNavStyle = css`
	display: flex;
	flex-direction: row;
	align-items: center;

	gap: 20px;
	font-style: normal;
	font-weight: 900;
	font-size: 40px;
	line-height: 58px;
	text-align: center;
	color: #ffffff;

	cursor: pointer;
`;
export const rightNavStyle = css`
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 13px;

	display: flex;
	align-items: center;
	text-align: center;
	gap: 44px;

	color: #ffffff;
	cursor: pointer;
`;
