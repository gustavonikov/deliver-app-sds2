import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Header() {
	return (
		<View style={styles.container}>
			<Image source={require('../../images/logo.png')} />
			<Text style={styles.text}>Nikov Delivery</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
			backgroundColor: '#DA5C5C',
			height: 75,
			paddingTop: 40,
			flexDirection: 'row',
			justifyContent: 'center',
	},

	text: {
		marginLeft: 15,

		fontWeight: 'bold',
		fontSize: 18,
		fontFamily: 'OpenSans_700Bold',
		lineHeight: 25,
		letterSpacing: -0.24,

		color: '#fff',
	}
});
