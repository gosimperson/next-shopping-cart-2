import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface ChildProps {
	children: ReactNode;
}
const listStyle = css`
	margin-top: 53px;
	display: flex;
	justify-content: center;
`;

export const List = ({ children }: ChildProps) => {
	return <div css={listStyle}>{children}</div>;
};
