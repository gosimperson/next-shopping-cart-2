import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface ChildProps {
	children: ReactNode;
}
const mainStyle = css`
	margin-top: 60px;
	display: flex;
	justify-content: center;
`;

export const Main = ({ children }: ChildProps) => {
	return <main css={mainStyle}>{children}</main>;
};
