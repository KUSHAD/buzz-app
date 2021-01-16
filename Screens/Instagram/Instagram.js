import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderComponent } from '../../Components';
export default function Instagram() {
	return (
		<>
			<HeaderComponent text="Buzz App | Instagram Screen" />
			<View style={Styles.container}>
				<Text>Buzz App | Instagram Screen</Text>
			</View>
		</>
	);
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
