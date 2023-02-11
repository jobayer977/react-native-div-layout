import * as React from 'react';

import {
	ImageBackground as RNImageBackground,
	View as RNView,
} from 'react-native';

import { DivProps } from './div.type';
import { getStyle } from './div.style';

// import { useTheme } from '../../theme';
const Div: React.FunctionComponent<DivProps> = (incomingProps) => {
	const props = {
		bg: 'transparent',
		flexDir: 'column',
		flexWrap: 'nowrap',
		rounded: 'none',
		shadow: 'none',
		position: 'relative',
		bgMode: 'cover',
		pointerEvents: 'auto',
		row: false,
		borderStyle: 'solid',
		...incomingProps,
	};
	const {
		bg,
		h,
		w,
		m,
		mt,
		mr,
		mb,
		ml,
		ms,
		p,
		pr,
		pt,
		pb,
		pl,
		minH,
		minW,
		maxW,
		maxH,
		position,
		style,
		flexDir,
		row,
		rounded,
		roundedTop,
		roundedRight,
		roundedBottom,
		roundedLeft,
		children,
		bgImg,
		bgMode,
		alignItems,
		justifyContent,
		borderColor,
		borderBottomColor,
		borderLeftColor,
		borderTopColor,
		borderRightColor,
		borderWidth,
		borderLeftWidth,
		borderRightWidth,
		borderBottomWidth,
		borderTopWidth,
		borderEndWidth,
		flexWrap,
		shadow,
		shadowColor,
		opacity,
		overflow,
		top,
		left,
		right,
		bottom,
		zIndex,
		...rest
	} = props;
	const computedStyle = getStyle(props);
	// if there is a bgImage prop, use ImageBackground
	// instead of regular View component
	if (bgImg) {
		return (
			<RNImageBackground
				source={bgImg}
				style={computedStyle.div}
				resizeMode={props.bgMode}
				imageStyle={computedStyle.image}
				{...rest}
			>
				{children}
			</RNImageBackground>
		);
	}
	return (
		<RNView style={cleanObject(computedStyle.div)} {...rest}>
			{children}
		</RNView>
	);
};
// Div.defaultProps = {
//   bg: 'transparent',
//   flexDir: 'column',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   row: false,
//   borderStyle: 'solid',
// };
export { Div };
// clean object
const cleanObject = (obj: any) => {
	const newObj: any = {};
	Object.keys(obj).forEach((key) => {
		if (obj[key] !== undefined) {
			newObj[key] = obj[key];
		}
		if (obj[key] === null) {
			newObj[key] = obj[key];
		}
		if (obj[key] === '') {
			newObj[key] = obj[key];
		}
	});
	return newObj;
};
