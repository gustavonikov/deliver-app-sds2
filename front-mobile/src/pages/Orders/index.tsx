import React, { useEffect, useState } from 'react'; 
import { Alert, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import OrderCard from './OrderCard';
import { Order } from './interfaces';

import api from '../../api';

export default function Orders() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        api.get('/orders')
            .then((res) => setOrders(res.data))
            .catch(() => Alert.alert('Ocorreu um erro ao listar os pedidos!'))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        if (isFocused) fetchData();
    }, [isFocused])

    const handleOnPress = (order: Order) => navigation.navigate('OrderDetails', {
        order,
    });

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? 
                    (
                        <View style={styles.loadingContainer}>
                            <Text style={styles.loading}>Buscando pedidos...</Text>
                        </View>
                    )
                    :
                    (
                        orders.map((order) => (
                            <TouchableWithoutFeedback key={order.id} onPress={() => handleOnPress(order)}>
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))
                    )
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
        marginBottom: '5%',
    },
    loadingContainer: {
        marginTop: '15%',

        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        fontSize: 25,
    }
});