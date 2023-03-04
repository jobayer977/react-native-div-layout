import { StyleSheet, Text, View } from 'react-native';

import { Div } from './src/div';
import React from 'react';

const App = () => {
	return (
		<Div flex={1} w={200} bg='red' maxH={200} h={200}>
			<Text>App</Text>
		</Div>
	);
};

export default App;

const styles = StyleSheet.create({});
