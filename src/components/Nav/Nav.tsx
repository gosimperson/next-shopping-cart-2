import { ReactNode } from 'react';
import { css } from '@emotion/react';

interface NavProps {
	children: ReactNode;
}

const navStyle = css`
	position: absolute;
	width: 100%;
	height: 80px;
	left: 0px;
	top: 0px;

	background: #2ac1bc;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`;

const leftNavStyle = css``;
const rightNavStyle = css``;

export const Nav = () => {
	return (
		<div css={navStyle}>
			<div></div>
		</div>
	);
};
