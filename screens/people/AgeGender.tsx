import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import Colors from "../../constants/Colors";
const AgeGender = ({ navigation }: { navigation: any }) => {

    const gender = ['Male', 'Female'];
    const age = ['18-24','19','20','21','22','23','24','25','26','27','28','29','30','32','40', ];
   
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{ width: 70, height: 36, marginTop: 60, marginBottom: 30 }} source={require('../../images/logo.png')} />

            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                <Image source={require('../../images/age.png')} />
            </View>


            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Card style={styles.cardAge}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 36, fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#091F3A',
                        opacity: 0.8
                    }}>Hi {<Text style={{ color: Colors.blue }}>John!</Text>}</Text>
                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005
                    }}>Before we start, would you like to tell us about your age?</Text>

                    <View style={{  flexDirection: 'row' }}>
                        <View style={{ flex: 1,  alignItems: 'center', justifyContent: "center",flexDirection:'row' }}>
                           <TextInput
                            
                            style={styles.otpText}
                            keyboardType="number-pad"
                            maxLength={2}                                      
                        />
                            <Text style={{
                                color:'#091F3A',
                                fontSize:16,
                                lineHeight:24,
                                letterSpacing:0.005,
                                opacity:0.8,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginRight:40
                        
                        }}>years old</Text>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
                <Card style={styles.cardGender}>
                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16,
                        padding: 16,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign:'center'
                    }}>Are you male or female?</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center" }}>
                            <SelectDropdown
                                buttonStyle={styles.drop}
                                rowStyle={styles.row}
                                buttonTextStyle={styles.rowText}
                                rowTextStyle={styles.rowText}
                                data={gender}
                                onSelect={(selectedItem: any, index: any) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonTextAfterSelection={(selectedItem: any, index: any) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item: any, index: any) => {
                                    return item;
                                }}
                            />
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:24}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HealthPeople')}
                    style={styles.btnLuu}>
                    <Text style={styles.textLogin}>Done</Text>
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
        height: 182,
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
        fontWeight:'bold',
        color: Colors.blue,
        opacity:0.8,
      
    },
    
});
export default AgeGender;