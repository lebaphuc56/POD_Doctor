import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'



const CartActivity = ({ navigation }: { navigation: any }) => {



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.LogoCDE}  >
                <Text>CartActivity</Text>
            </View>



        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    LogoCDE: {
        flex: 2,

        justifyContent: 'center',
        marginLeft: '25%'

    },

    image: {
        width: 212,
        height: 111,

    },
})
export default CartActivity;