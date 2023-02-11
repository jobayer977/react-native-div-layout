import {
	createBorderColorStyles,
	createBorderRadiusStyles,
	createBorderWidthStyles,
	createPositionStyle,
	createShadowStyles,
	createSpacingStyles,
} from '../utilities/theme.service';

import { DivProps } from './div.type';
import { StyleSheet } from 'react-native';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (props: DivProps) => {
	const computedStyle: any = {};
	computedStyle.div = {
		flexDirection: props.row ? 'row' : props.flexDir,
		flexWrap: props.flexWrap,
		alignItems: props.alignItems,
		justifyContent: props.justifyContent,
		height: props.h,
		width: props.w,
		minWidth: props.minW,
		minHeight: props.minH,
		alignSelf: props.alignSelf,
		maxWidth: props.maxW,
		maxHeight: props.maxH,
		opacity: props.opacity,
		overflow: props.overflow,
		zIndex: props.zIndex,
		borderStyle: props.borderStyle,
		backgroundColor: props.bg,
		flex: props.flex,
		...createPositionStyle(props),
		...createShadowStyles(props),
		...createBorderWidthStyles(props),
		...createSpacingStyles(props),
		...createBorderColorStyles(props),
		...createBorderRadiusStyles(props),
	};
	computedStyle.image = {
		// ...createBorderRadiusStyles(props),
	};
	// merging custom style props to computed style
	if (props.style) {
		computedStyle.div = {
			...computedStyle.div,
			// @ts-ignore
			...props.style,
		};
	}
	return StyleSheet.create(computedStyle);
};
