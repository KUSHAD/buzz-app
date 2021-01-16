import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ text }) {
	return (
		<View style={Styles.container}>
			<Text style={Styles.text}>{text}</Text>
		</View>
	);
}

const Styles = StyleSheet.create({
	container: {
		display: 'flex',
		backgroundColor: '#4630eb',
		height: '6vh',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#ffffff',
		fontSize: 20,
		fontWeight: 'bold',
	},
});
