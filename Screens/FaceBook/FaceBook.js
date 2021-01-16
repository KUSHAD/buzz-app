import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderComponent } from '../../Components';
export default function FaceBook() {
	return (
		<>
			<HeaderComponent text="Buzz App | FaceBook Screen" />
			<View style={Styles.container}>
				<Text>Buzz App | FaceBook Screen</Text>
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
