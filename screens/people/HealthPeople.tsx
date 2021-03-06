import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';

import { sbmitUsers as submitUsers } from "../../api/apiService";

import Colors from "../../constants/Colors";

const HealthPeople = ({ navigation }: { navigation: any }) => {

    const blood = ['Vietnam', 'Afghanistan', 'India', 'Indonesia', 'South Korea', 'Thailand', 'United States of America', 'Qatar'];
    const allergic = ['Peanut', 'B',];
    const illness = ['Yes', 'No',];
    
    const [Id, setId] = React.useState();
    const [Old, setOld] = React.useState('');
    const [Sex, setSex] = React.useState('');
    const [Country, setCountry] = React.useState('');

    const saveUsers = () => {
        submitUsers(Id, Old,Sex,Country)
            .then(result => {
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <ScrollView>
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




            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                <Image source={require('../../images/health.png')} />
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
                        letterSpacing: 0.005
                    }}>For health tracking purpose, let us know your blood type?</Text>

                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center", flexDirection: 'row' }}>
                            <TextInput

                                style={styles.otpText}
                                value={Country}
                                onChangeText={(text) => {
                                    setCountry(text)
                                }

                                }

                            />



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
                        letterSpacing: 0.005
                    }}>Are you allergic to something?</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center" }}>
                            <SelectDropdown
                                buttonStyle={styles.drop}
                                rowStyle={styles.row}
                                buttonTextStyle={styles.rowText}
                                rowTextStyle={styles.rowText2}
                                data={allergic}
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
                        letterSpacing: 0.005
                    }}>Do you have any other illness?</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center" }}>
                            <SelectDropdown
                                buttonStyle={styles.drop}
                                rowStyle={styles.row}
                                buttonTextStyle={styles.rowText}
                                rowTextStyle={styles.rowText2}
                                data={illness}
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

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>

                <TouchableOpacity
                    
                    style={styles.btnLuu}>
                    <Text  style={styles.textLogin}>Save</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 , marginBottom:24}}>
            <TouchableOpacity
                     onPress={() => navigation.navigate('CalculateBMI')}
                    style={styles.btnLuu2}>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={styles.textLogin2}>Next</Text>
                    </View>
                </TouchableOpacity>
            </View>



        </View>
        </ScrollView>
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
        height: 136,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation: 8,
        backgroundColor: '#ffffff'
    },
    cardGender: {
        width: 328,
        height: 112,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation: 8,
        backgroundColor: '#ffffff'
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
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 36,
        letterSpacing: 0.005,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1

    },
    rowText2: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 36,
        letterSpacing: 0.005

    },
    otpText: {
        width: 200,
        textAlign: 'center',
        fontSize:22,
        paddingHorizontal: 15,

        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.8,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,


    },
    textLogin2: {
        color: Colors.blue,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },
    btnLuu2: {
        backgroundColor: Colors.white,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        borderColor: Colors.blue,
        borderWidth: 1,
        

    },

});
export default HealthPeople;