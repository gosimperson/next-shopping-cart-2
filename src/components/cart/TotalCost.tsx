import { css } from '@emotion/react';
import { ReactNode } from 'react';

export const TotalCost = () => {
	return (
		<div css={TotalCostStyle}>
			<div css={titleStyle}>
				<p>결제예상금액</p>
			</div>
			<div css={contentStyle}>
				<div>
					<span>결제예상금액</span>
					<span>21,700원</span>
				</div>
				<button css={buttonStyle}>주문하기(2개)</button>
			</div>
		</div>
	);
};

const TotalCostStyle = css`
	margin-top: 103px;
	border: 1px solid #dddddd;
	border-radius: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const buttonStyle = css`
	width: 388px;
	height: 73px;

	background: #2ac1bc;
	border: none;
	font-weight: 700;
	font-size: 32px;
	line-height: 21px;

	font-weight: 400;
	font-size: 24px;
	line-height: 21px;
	/* or 89% */

	text-align: center;

	color: #ffffff;
`;

const titleStyle = css`
	padding-top: 22px;
	padding-left: 30px;
	padding-bottom: 19px;
	font-weight: 400;
	font-size: 24px;
	line-height: 33px;
	/* or 138% */
	border-bottom: 3px solid #dddddd;
	letter-spacing: 0.5px;
	color: #333333;
`;

const contentStyle = css`
	padding: 35px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 70px;

	font-weight: 700;
	font-size: 20px;
	line-height: 27px;

	text-align: center;
	letter-spacing: 0.5px;

	color: #333333;

	> div:first-of-type {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;

		> span {
			display: inline-block;
			position: relative;
			::after {
				content: '';
				position: absolute; /* 수정 */
				bottom: 0px;
				left: 0;
				width: 100%;
				height: 8px;
				background: rgba(42, 193, 188, 0.5);
				border-radius: 0px;
			}
		}
	}
`;
