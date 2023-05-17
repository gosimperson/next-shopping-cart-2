import React from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
const globalCSS = css`
	${emotionReset};

	@font-face {
		font-family: 'Noto Sans KR';
		src: url('https://fonts.gstatic.com/s/notosanskr/v2/NotoSansKR-Regular.woff2')
			format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	body {
		font-family: 'Noto Sans KR', sans-serif;
	}

	// 스크롤 파트
	::-webkit-scrollbar,
	::-webkit-scrollbar-thumb {
		width: 10px;
		/* border-radius: 13px; */
		background-clip: padding-box;
		/* border: 1px solid transparent; */
	}

	::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 0 10px;
	}
`;

function GlobalStyle() {
	return <Global styles={globalCSS} />;
}

export default GlobalStyle;
export { globalCSS };
