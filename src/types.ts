import { ImageSourcePropType, ViewProps, ViewStyle } from 'react-native';

export interface DivProps extends ViewProps {
	borderColor?: string;
	borderTopColor?: string;
	borderRightColor?: string;
	borderBottomColor?: string;
	borderLeftColor?: string;
	borderWidth?: number;
	borderTopWidth?: number;
	borderRightWidth?: number;
	borderBottomWidth?: number;
	borderLeftWidth?: number;
	borderStartWidth?: number;
	borderEndWidth?: number;
	borderStyle?: ViewStyle['borderStyle'];
	m?: number;
	mt?: number;
	mr?: number;
	mb?: number;
	ml?: number;
	mx?: number;
	my?: number;
	ms?: number;
	p?: number;
	pt?: number;
	pr?: number;
	pb?: number;
	pl?: number;
	px?: number;
	py?: number;
	ps?: number;
	rounded?: number;
	roundedTopLeft?: number;
	roundedTopRight?: number;
	roundedBottomLeft?: number;
	roundedBottomRight?: number;
	roundedTop?: number;
	roundedLeft?: number;
	roundedRight?: number;
	roundedBottom?: number;
	shadow?: ViewStyle['shadowColor'];
	shadowColor?: string;
	minH?: number;
	minW?: number;
	maxH?: number;
	maxW?: number;
	h?: number;
	w?: number;
	row?: boolean;
	flex?: number;
	flexDir?: ViewStyle['flexDirection'];
	flexWrap?: ViewStyle['flexWrap'];
	justifyContent?: ViewStyle['justifyContent'];
	alignSelf?: ViewStyle['alignSelf'];
	alignItems?: ViewStyle['alignItems'];
	position?: ViewStyle['position'];
	top?: number;
	right?: number;
	bottom?: number;
	left?: number;
	bg?: string;
	bgImg?: ImageSourcePropType;
	bgMode?: ViewStyle['resizeMode'];
	opacity?: number;
	overflow?: ViewStyle['overflow'];
	zIndex?: number;
}
