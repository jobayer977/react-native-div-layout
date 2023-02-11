import { StyleSheet, Text, View } from 'react-native';

import { Div } from './src/div/div.component';
import React from 'react';

const App = () => {
	return (
		<Div alignItems='center' bg='blue' flex={1} justifyContent='center'>
			<Text>App</Text>
		</Div>
	);
};

export default App;

const styles = StyleSheet.create({});
