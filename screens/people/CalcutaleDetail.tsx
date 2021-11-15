import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';



import Colors from "../../constants/Colors";

const CalculateBMIDetail = ({ navigation }: { navigation: any }) => {

    const blood = ['A', 'B', 'AB', 'O'];
    const allergic = ['Peanut', 'B',];
    const illness = ['Yes', 'No',];


    return (
        <View style={styles.container}>

            <View style={styles.HeadContainer} >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image style={{ marginLeft: 30, }} source={require('../../images/back.png')} />
                </TouchableOpacity>

                <Text style={{
                    color: '#091F3A',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontFamily: 'Helvetica Neue',
                    lineHeight: 24,
                    letterSpacing: 0.005,
                    marginRight: 127

                }}>Calculate BMI</Text>
            </View>




            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                <Image source={require('../../images/culcutaledetail.png')} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Card style={styles.cardAge}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16, fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#091F3A',
                        opacity: 0.8,
                        marginTop:30,

                    }}>Your BMI Result</Text>

                    <Text style={{
                        color: '#F8BA56',
                        fontSize: 36,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica Neue',
                        lineHeight: 36,
                        letterSpacing: 0.005,
                        textAlign: 'center',
                        padding: 8

                    }}>18.3</Text>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: '#333333',
                        opacity: 0.4,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                    }}>BMI Standard</Text>

                    <Text style={{
                        color: '#6CB6DD',
                        fontSize: 24,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica Neue',
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center',
                        padding: 8

                    }}>20</Text>


                </Card>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Location')}
                    style={styles.btnLuu}>
                    <Text style={styles.textLogin}>Calculate</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFBFC',

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
    cardAge: {
        width: 328,
        height: 186,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        borderWidth: 1,
        shadowColor: 'red',
    

    },
    cardGender: {
        width: 328,
        height: 112,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        borderWidth: 1,
        shadowColor: 'red',
    },

    btnLuu: {
        backgroundColor: Colors.blue,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,

    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },
    drop: {
        backgroundColor: '#fff',
        borderRadius: 8,
        height: 40,
    },
    row: {
        backgroundColor: '#fff',
    },
    rowText: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 36,
        letterSpacing: 0.005

    },
    otpText: {
        width: 100,
        textAlign: 'center',
        fontSize: 30,
        padding: 0,
        paddingHorizontal: 18,
        paddingVertical: 10,
        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.8

    },

});
export default CalculateBMIDetail;