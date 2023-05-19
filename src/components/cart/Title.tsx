import { css } from '@emotion/react';
export const Title = () => {
	return (
		<div css={titleStyle}>
			<h2 css={textStyle}>장바구니</h2>
			<hr css={hrStyle} />
		</div>
	);
};

const titleStyle = css`
	/* display: flex; */
`;
const textStyle = css`
	font-weight: 700;
	font-size: 32px;
	line-height: 37px;
	/* identical to box height, or 117% */

	text-align: center;
	letter-spacing: 0.5px;
	color: #333333;
`;
const hrStyle = css`
	width: 1320px;
	margin-top: 30px;
	border: 4px solid #333333;
`;
