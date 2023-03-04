import { StyleSheet, ViewStyle } from 'react-native';

export const flatten = (styles: ViewStyle | ViewStyle[]): ViewStyle => {
	if (Array.isArray(styles)) {
		return StyleSheet.flatten(styles);
	}
	return styles;
};
