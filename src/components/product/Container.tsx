import { ReactNode } from 'react';
import { containerStyle } from './style';

interface ChildProps {
	children: ReactNode;
}

export const Container = ({ children }: ChildProps) => {
	return <div css={containerStyle}>{children}</div>;
};
