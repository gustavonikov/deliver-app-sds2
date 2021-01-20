import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';

export default function Home() {
    const navigation = useNavigation();

    const handleOnPress = () => navigation.navigate('Orders');
    
    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../../images/deliveryman.png')} />
                <Text style={styles.title}>Acompanhe os pedidos e entregue no prazo!</Text>
                <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão.</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button}  onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS!</Text>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',

        alignItems: 'center'
    },
    title: {
        marginTop: 31,

        color: '#263238',

        fontSize: 25,
        lineHeight: 34,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subTitle: {
        marginTop: 15,

        color: '#9E9E9E',

        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
    },
    footer: {
        marginTop: '10%',

        alignItems: 'center',
    },
    button: {
        backgroundColor: '#DA5C5C',

        flexDirection: 'row',

        borderRadius: 10,
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,

        color: '#FFF',

        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: -0.24,
    }
});
