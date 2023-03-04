import { ImageBackground, StyleSheet, View, ViewStyle } from 'react-native';

import { DivProps } from './types';
import React from 'react';
import { flatten } from './utils';

export const Div: React.FC<DivProps> = ({
	children,
	borderColor,
	borderTopColor,
	borderRightColor,
	borderBottomColor,
	borderLeftColor,
	borderWidth,
	borderTopWidth,
	borderRightWidth,
	borderBottomWidth,
	borderLeftWidth,
	borderStartWidth,
	borderEndWidth,
	borderStyle,
	m,
	mt,
	mr,
	mb,
	ml,
	mx,
	my,
	ms,
	p,
	pt,
	pr,
	pb,
	pl,
	px,
	py,
	ps,
	rounded,
	roundedTopLeft,
	roundedTopRight,
	roundedBottomLeft,
	roundedBottomRight,
	roundedTop,
	roundedLeft,
	roundedRight,
	roundedBottom,
	shadow,
	shadowColor,
	minH,
	minW,
	maxH,
	maxW,
	h,
	w,
	row,
	flex,
	flexDir,
	flexWrap,
	justifyContent,
	alignSelf,
	alignItems,
	position,
	top,
	right,
	bottom,
	left,
	bg,
	bgImg,
	bgMode,
	opacity,
	overflow,
	zIndex,
	...rest
}) => {
	const style: ViewStyle = flatten([
		borderColor && { borderColor },
		borderTopColor && { borderTopColor },
		borderRightColor && { borderRightColor },
		borderBottomColor && { borderBottomColor },
		borderLeftColor && { borderLeftColor },
		borderWidth && { borderWidth },
		borderTopWidth && { borderTopWidth },
		borderRightWidth && { borderRightWidth },
		borderBottomWidth && { borderBottomWidth },
		borderLeftWidth && { borderLeftWidth },
		borderStartWidth && { borderStartWidth },
		borderEndWidth && { borderEndWidth },
		borderStyle && { borderStyle },
		m && { margin: m },
		mt && { marginTop: mt },
		mr && { marginRight: mr },
		mb && { marginBottom: mb },
		ml && { marginLeft: ml },
		mx && { marginHorizontal: mx },
		my && { marginVertical: my },
		ms && { marginStart: ms },
		p && { padding: p },
		pt && { paddingTop: pt },
		pr && { paddingRight: pr },
		pb && { paddingBottom: pb },
		pl && { paddingLeft: pl },
		px && { paddingHorizontal: px },
		py && { paddingVertical: py },
		ps && { paddingStart: ps },
		rounded && { borderRadius: rounded },
		roundedTopLeft && { borderTopLeftRadius: roundedTopLeft },
		roundedTopRight && { borderTopRightRadius: roundedTopRight },
		roundedBottomLeft && { borderBottomLeftRadius: roundedBottomLeft },
		roundedBottomRight && { borderBottomRightRadius: roundedBottomRight },
		roundedTop && {
			borderTopLeftRadius: roundedTop,
			borderTopRightRadius: roundedTop,
		},
		roundedLeft && {
			borderTopLeftRadius: roundedLeft,
			borderBottomLeftRadius: roundedLeft,
		},
		roundedRight && {
			borderTopRightRadius: roundedRight,
			borderBottomRightRadius: roundedRight,
		},
		roundedBottom && {
			borderBottomLeftRadius: roundedBottom,
			borderBottomRightRadius: roundedBottom,
		},
		shadow && { shadowColor },
		minH && { minHeight: minH },
		minW && { minWidth: minW },
		maxH && { maxHeight: maxH },
		maxW && { maxWidth: maxW },
		h && { height: h },
		w && { width: w },
		row && { flexDirection: 'row' },
		flex && { flex },
		flexDir && { flexDirection: flexDir },
		flexWrap && { flexWrap },
		justifyContent && { justifyContent },
		alignSelf && { alignSelf },
		alignItems && { alignItems },
		position && { position },
		top && { top },
		right && { right },
		bottom && { bottom },
		left && { left },
		bg && { backgroundColor: bg },
		bgImg && { backgroundImage: bgImg },
		bgMode && { backgroundSize: bgMode },
		opacity && { opacity },
		overflow && { overflow },
		zIndex && { zIndex },
	]);
	if (bgImg) {
		return (
			<ImageBackground
				source={bgImg}
				style={style}
				resizeMode={bgMode}
				imageStyle={[]}
				{...rest}
			>
				{children}
			</ImageBackground>
		);
	}
	return <View style={style}>{children}</View>;
};
