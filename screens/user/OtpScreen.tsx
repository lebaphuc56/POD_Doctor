import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";



import Colors from "../../constants/Colors";

const OptScreen = ({ navigation }: { navigation: any }) => {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    return (
        <View style={styles.container}>

            <View style={styles.HeadContainer} >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image style={{ marginLeft: 30, }} source={require('../../images/back.png')} />
                </TouchableOpacity>

                <TouchableOpacity >
                    <Image style={{ marginRight: '40%', width: 70, height: 36, }} source={require('../../images/logo.png')} />
                </TouchableOpacity>
            </View>




            <TouchableOpacity >
                <Image style={{ marginLeft: '42%' }} source={require('../../images/Vector.png')} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textOTP}>OPT Code</Text>
                <Text style={styles.textEnter}>Enter the OTP sent to {<Text style={{ color: Colors.blue }}> +84325623356</Text>}</Text>

            </View>
            <View style={styles.otpContainer}>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={firstInput}
                        onChangeText={(item) => {
                            item && secondInput.current.focus()
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput
                        style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={secondInput}
                        onChangeText={(item) => {
                            item ? thirdInput.current.focus() : firstInput.current.focus()
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={thirdInput}
                        onChangeText={(item) => {
                            item ? fourthInput.current.focus() : secondInput.current.focus()
                        }}
                    />
                </View>
                <View style={styles.otpBox}>
                    <TextInput style={styles.otpText}
                        keyboardType="number-pad"
                        maxLength={1}
                        ref={fourthInput}
                        onChangeText={(item) => {
                            !item && thirdInput.current.focus()
                        }}
                    />
                </View>
            </View>
            <Text style={styles.textEnter}>You can resend OTP after{<Text style={{ color: Colors.red }}> 1:30s</Text>} </Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Tab')}
                style={styles.btnLuu}>
                <Text style={styles.textLogin}>Verify number</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 36,
        fontFamily: 'HelveticaNeue Bold',
        lineHeight: 36,
        color: '#181818'
    },
    HeadContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
       
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textOTP: {
        fontFamily: 'HelveticaNeue',
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#181818',
        opacity: 0.8,
        textAlign: 'center',
        marginTop: 32,
        lineHeight: 36
    },
    textEnter: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        color: '#091F3A',
        opacity: 0.8,
        textAlign: 'center'
   },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12
    },
    otpText: {
        width: 64,
        height: 64,
        textAlign: 'center',
        fontSize: 25,
        padding: 0,
        paddingHorizontal: 18,
        paddingVertical: 10,
        color: Colors.blue,
        fontWeight:'bold',
        opacity:0.8
    },
    otpBox: {
        borderRadius: 5,
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    btnLuu: {
        backgroundColor: Colors.blue,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        marginLeft: 45,
        marginTop: 12
    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },
});
export default OptScreen;