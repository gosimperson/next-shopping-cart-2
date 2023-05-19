import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Title } from './Title';

interface ChildProps {
	children: ReactNode;
}

export const Container = ({ children }: ChildProps) => {
	return (
		<div css={containerStyle}>
			<Title />
			<div css={contentStyle}>{children}</div>
		</div>
	);
};

const containerStyle = css`
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

const contentStyle = css`
	display: flex;
`;
