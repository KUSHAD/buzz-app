import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FaceBookScreen, InstagramScreen } from './Screens';
const BottomTab = createMaterialBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				labeled={false}
				inactiveColor="grey"
				activeColor="#2196f3"
				initialRouteName="facebook"
				shifting
				sceneAnimationEnabled
				barStyle={{
					backgroundColor: '#fff',
				}}
			>
				<BottomTab.Screen
					name="facebook"
					options={{
						tabBarIcon: () => (
							<Ionicons name="logo-facebook" color="#2196f3" size={24} />
						),
						title: 'Buzz App | FaceBook',
					}}
					component={FaceBookScreen}
				/>
				<BottomTab.Screen
					name="instagram"
					options={{
						tabBarIcon: () => (
							<Ionicons name="logo-instagram" color="#8a3ab9" size={24} />
						),
						title: 'Buzz App | Instagram',
					}}
					component={InstagramScreen}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
