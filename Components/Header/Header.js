import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({ text, bgColor }) {
	return (
		<View
			style={[
				Styles.container,
				{
					backgroundColor: bgColor,
				},
			]}
		>
			<Text style={Styles.text}>{text}</Text>
		</View>
	);
}

const Styles = StyleSheet.create({
	container: {
		display: 'flex',
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
