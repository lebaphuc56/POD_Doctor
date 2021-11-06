import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'



const Splash = ({ navigation }: { navigation: any }) => {



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.LogoCDE}  >
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                >
                    <Image
                        style={styles.image}
                        source={require('../../images/logo.png')} />
                </TouchableOpacity>
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
export default Splash;