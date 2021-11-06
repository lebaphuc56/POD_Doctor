import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';



import Colors from "../../constants/Colors";

const CalculateBMI = ({ navigation }: { navigation: any }) => {

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
                <Image source={require('../../images/calculate.png')} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Card style={styles.cardAge}>

                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center'
                    }}>What is your weight?</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", flexDirection: 'row' }}>
                            <TextInput

                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={3}


                            />

                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                opacity: 0.8,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginRight: 40

                            }}>Kg</Text>
                        </View>
                    </View>


                </Card>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
                <Card style={styles.cardAge}>

                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center'
                    }}>What is your height?</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", flexDirection: 'row' }}>
                            <TextInput

                                style={styles.otpText}
                                keyboardType="number-pad"
                                maxLength={3}


                            />

                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                opacity: 0.8,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginRight: 40

                            }}>Cm</Text>
                        </View>
                    </View>


                </Card>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('CalculateBMIDetail')}
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
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardAge: {
        width: 328,
        height: 136,
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
export default CalculateBMI;