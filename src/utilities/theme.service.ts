/**
 * create spacing styles from object of style props passed to magnus component
 *
 * m="10", mt="xl"
 *
 * @param value
 * @param theme
 */
export const createSpacingStyles = (props: any) => {
	let propKeys: any;
	propKeys = {
		p: 'padding',
		pt: 'paddingTop',
		pr: 'paddingRight',
		pb: 'paddingBottom',
		pl: 'paddingLeft',
		px: 'paddingHorizontal',
		py: 'paddingVertical',
		ps: 'paddingStart',
		m: 'margin',
		mt: 'marginTop',
		mr: 'marginRight',
		mb: 'marginBottom',
		ml: 'marginLeft',
		mx: 'marginHorizontal',
		my: 'marginVertical',
		ms: 'marginStart',
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			computedStyle[styleProperty] = props[propKey];
		}
	});
	return computedStyle;
};
export const createBorderRadiusStyles = (props: any) => {
	let propKeys: any;
	propKeys = {
		rounded: 'borderRadius',
		roundedTopLeft: 'borderTopLeftRadius',
		roundedTopRight: 'borderTopRightRadius',
		roundedBottomLeft: 'borderBottomLeftRadius',
		roundedBottomRight: 'borderBottomRightRadius',
		roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
		roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
		roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
		roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			if (styleProperty instanceof Array) {
				styleProperty.forEach((property) => {
					computedStyle[property] =
						props[propKey] == 'none' ? 0 : props[propKey];
				});
			} else {
				computedStyle[styleProperty] =
					props[propKey] == 'none' ? 0 : props[propKey];
			}
		}
	});
	return computedStyle;
};
/**
 * adds flex property in styles
 *
 * @param props
 */
export const createFlexStyles = (props: any) => {
	let propKeys: any;
	propKeys = {
		flex: 'flex',
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			computedStyle[styleProperty] = props[propKey];
		}
	});
	return computedStyle;
};
/**
 * create borderWidth styles
 *
 * @param value
 */
export const createBorderWidthStyles = (props: any) => {
	let propKeys: any;
	propKeys = {
		borderWidth: 'borderWidth',
		borderStartWidth: 'borderStartWidth',
		borderEndWidth: 'borderEndWidth',
		borderTopWidth: 'borderTopWidth',
		borderLeftWidth: 'borderLeftWidth',
		borderRightWidth: 'borderRightWidth',
		borderBottomWidth: 'borderBottomWidth',
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			computedStyle[styleProperty] = props[propKey];
		}
	});
	return computedStyle;
};
/**
 * create borderRadius styles
 *
 * @param value
 */
export const createBorderColorStyles = (props: any) => {
	let propKeys: any;
	propKeys = {
		borderColor: 'borderColor',
		borderTopColor: 'borderTopColor',
		borderRightColor: 'borderRightColor',
		borderLeftColor: 'borderLeftColor',
		borderBottomColor: 'borderBottomColor',
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			if (styleProperty instanceof Array) {
				styleProperty.forEach((property) => {
					computedStyle[property] = props[propKey];
				});
			} else {
				computedStyle[styleProperty] = props[propKey];
			}
		}
	});
	return computedStyle;
};
/**
 * adds shadows property in styles
 *
 * @param props
 */
export const createShadowStyles = (props: any) => {
	let computedStyle: any = {};
	if (props.shadow) {
		computedStyle = {
			shadowColor: props.shadowColor,
		};
	}
	return computedStyle;
};
/**
 * position="absolute"
 * top={10}
 *
 * @param value
 */
export const createPositionStyle = (props: any) => {
	let propKeys: any;
	propKeys = {
		position: 'position',
		top: 'top',
		left: 'left',
		right: 'right',
		bottom: 'bottom',
	};
	const computedStyle: any = {};
	Object.keys(propKeys).map((propKey: string) => {
		const styleProperty = propKeys[propKey];
		if (propKey in props) {
			computedStyle[styleProperty] = props[propKey];
		}
	});
	return computedStyle;
};
