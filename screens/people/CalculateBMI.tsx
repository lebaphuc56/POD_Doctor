import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';

import { healthCare, idUser } from "../../api/apiService";

import Colors from "../../constants/Colors";

const CalculateBMI = ({ navigation }: { navigation: any }) => {

    const blood = ['A', 'B', 'AB', 'O'];
    const allergic = ['Peanut', 'B',];
    const illness = ['Yes', 'No',];
    const { uid } = idUser();

    const [Id, setId] = React.useState();
    const [wight, setWight] = React.useState('');
    const [height, setHeight] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const saveUsers = () => {
        setIsLoading(true);
        healthCare(Id, wight, height, uid)
            .then(result => {
                setIsLoading(false);
                navigation.navigate('CalculateBMIDetail');


            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error)
            })
    }

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
                                value={wight}
                                onChangeText={(text) => {
                                    setWight(text)
                                }

                                }


                            />

                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                opacity: 0.8,
                                fontStyle: 'normal',
                                fontWeight: 'bold',



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
                                value={height}
                                onChangeText={(text) => {
                                    setHeight(text)
                                }

                                }


                            />

                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                opacity: 0.8,
                                fontStyle: 'normal',
                                fontWeight: 'bold',


                            }}>Cm</Text>
                        </View>
                    </View>


                </Card>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>
                <TouchableOpacity
                    disabled={isLoading}
                    style={styles.btnLuu}>
                    {isLoading && (
                        <ActivityIndicator size="small" color="#fff" />

                    )}
                    <Text onPress={saveUsers} style={styles.textLogin}>Save</Text>
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
        height: 136,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation: 8,
        backgroundColor: '#ffffff',


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
        flexDirection: 'row'

    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24,
        marginLeft: 10
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
        opacity: 0.8,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1

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
    textLogin2: {
        color: Colors.blue,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },

});
export default CalculateBMI;