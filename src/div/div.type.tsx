import {
	BackgroundPropsType,
	BorderPropsType,
	DimensionPropsType,
	FlexPropsType,
	OpacityPropsType,
	OverflowPropsType,
	PositionPropsType,
	RoundedPropsType,
	ShadowPropsType,
	SpacingPropsType,
	VariantPropsType,
	ZIndexPropsType,
} from '../types';

import { ViewProps as RNViewProps } from 'react-native';

export interface DivProps
	extends RNViewProps,
		BorderPropsType,
		SpacingPropsType,
		RoundedPropsType,
		ShadowPropsType,
		DimensionPropsType,
		BackgroundPropsType,
		FlexPropsType,
		PositionPropsType,
		ZIndexPropsType,
		OverflowPropsType,
		OpacityPropsType,
		VariantPropsType {}
