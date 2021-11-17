import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';



import Colors from "../../constants/Colors";

const EmergencyContact = ({ navigation }: { navigation: any }) => {

    const blood = ['+84', '+26', '+45', '+12', '+23', '+34', '+56', '+78', '+96',];
    const allergic = ['Peanut', 'B',];
    const illness = ['Yes', 'No',];

    const Separator = () => (
        <View style={styles.separator} />

    );


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




            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 18 }}>
                <Image source={require('../../images/emergency.png')} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Card style={styles.cardAge}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 36,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#091F3A',
                        opacity: 0.8,
                        lineHeight: 36,
                        marginTop: 16
                    }}>Emergency </Text>

                    <Text style={{
                        textAlign: 'center',
                        fontSize: 36,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#091F3A',
                        opacity: 0.8,
                        lineHeight: 36
                    }}> Contact </Text>
                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center'
                    }}>What is your contact, in case of emergency? You may use your caretaker’s contact.</Text>


                    <TextInput
                        placeholder='Caretaker’s name'

                        style={styles.otpText}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Separator />
                    </View>

                    <Text style={{
                        color: '#091F3A',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center'
                    }}>You may choose from here</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, }}>
                            <SelectDropdown
                                buttonStyle={styles.drop}
                                rowStyle={styles.row}
                                buttonTextStyle={styles.rowText}
                                data={blood}
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                            />



                        </View>
                        <TextInput
                            style={styles.inputPhone}
                            keyboardType='number-pad'
                            maxLength={9}

                        />

                    </View>



                    <Text style={{
                        color: '#1085C5',
                        fontSize: 16, padding: 8,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        opacity: 0.8,
                        lineHeight: 24,
                        letterSpacing: 0.005,
                        textAlign: 'center'
                    }}>We will send a code via SMS to this phone number to verify it is real. </Text>


                </Card>
            </View>



            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('OptScreen')}
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
       
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardAge: {
        width: 328,
        height: 400,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation:8,
        backgroundColor:'#ffffff'

    },
    cardGender: {
        width: 328,
        height: 112,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation:8,
        backgroundColor:'#ffffff'
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
        width: 100,
        borderRadius: 8,
        height: 44,

    },
    row: {
        backgroundColor: '#fff',
        borderRadius: 8

    },
    rowText: {

        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 36,
        letterSpacing: 0.005,
        borderWidth: 1,
        borderColor: Colors.blue,
        height: 40,
        borderRadius: 8,




    },

    otpText: {
        textAlign: 'center',
        fontSize: 18,
        padding: 0,
        paddingHorizontal: 18,
        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.4,
        lineHeight: 24


    },
    separator: {
        width: 200,
        borderBottomColor: Colors.blue,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        borderColor: Colors.blue

    },
    inputPhone: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.blue,
        marginRight: 20,
        color: '#6CB6DD',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold'

    }

});
export default EmergencyContact;