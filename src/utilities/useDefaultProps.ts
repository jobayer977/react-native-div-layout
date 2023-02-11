import { DefaultProps, VariantPropsType } from '../types';
import { ThemeType, useTheme } from '../theme';

import React from 'react';

export const useDefaultProps = <Props extends object>(
	componentName: keyof NonNullable<ThemeType['components']> | null,
	props: Props & VariantPropsType,
	defaultProps: DefaultProps<Props>
) => {
	const { theme } = useTheme();

	const finalProps = React.useMemo(() => {
		if (!componentName) {
			return {
				...defaultProps,
				...props,
			};
		}

		let propsFromTheme = {
			...(theme.components?.[componentName] ?? {}),
			...(props.variant &&
				(theme.components?.[componentName]?.variants?.[props.variant] ?? {})),
		};

		delete propsFromTheme.variants;

		const mergedProps = {
			...defaultProps,
			...propsFromTheme,
			...props,
		};

		return mergedProps;
	}, [componentName, defaultProps, props, theme.components]);

	return finalProps as Props & Required<typeof defaultProps>;
};