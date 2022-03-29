import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { Button, Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import { sbmitUsers as submitUsers, idUser } from "../../api/apiService";
import Colors from "../../constants/Colors";

const AgeGender = ({ navigation }: { navigation: any }) => {

    const gender = ['Male', 'Female'];
    const age = ['18-24', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '32', '40',];
    const Separator = () => (
        <View style={styles.separator} />

    );
    const { uid } = idUser();
    const [Id, setId] = React.useState();
    const [Old, setOld] = React.useState('');
    const [Sex, setSex] = React.useState('');
    const [Country, setCountry] = React.useState('');
    const [Location, setLocation] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const saveUsers = () => {
        setIsLoading(true);
        submitUsers(Id, Old, Sex, Country, Location, uid)
            .then(result => {
                setIsLoading(false);
                navigation.navigate('CalculateBMI');
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error)
            })
    }




    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <Image style={{ width: 70, height: 36, marginTop: 60, marginBottom: 30 }} source={require('../../images/logo.png')} />

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                    <Image source={require('../../images/age.png')} />
                </View>


                <View style={{ alignItems: 'center', justifyContent: 'center', elevation: 8 }}>
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

                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", flexDirection: 'row' }}>
                                <TextInput

                                    style={styles.otpText}
                                    keyboardType="number-pad"
                                    maxLength={2}

                                    value={Old}
                                    onChangeText={(text) => {
                                        setOld(text)
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
                                    marginRight: 40,


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
                            textAlign: 'center'
                        }}>Are you male or female?</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center" }}>

                                <TextInput

                                    style={styles.otpText}

                                    value={Sex}
                                    onChangeText={(text) => {
                                        setSex(text)
                                    }

                                    }

                                />
                            </View>
                        </View>
                    </Card>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
                        <Card style={styles.cardAge}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 24, fontStyle: 'normal',
                                fontWeight: 'bold',
                                color: '#091F3A',
                                opacity: 0.8
                            }}>Country</Text>
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16, padding: 8,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                opacity: 0.8,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                textAlign: 'center'
                            }}>What is your Country?</Text>

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
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Card style={styles.cardAge}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 24, fontStyle: 'normal',
                                fontWeight: 'bold',
                                color: '#091F3A',
                                opacity: 0.8
                            }}>Address</Text>
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 16, padding: 8,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                opacity: 0.8,
                                lineHeight: 24,
                                letterSpacing: 0.005,
                                textAlign: 'center'
                            }}>What is your location?</Text>

                            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: "center", flexDirection: 'row' }}>
                                <TextInput

                                    style={styles.otpLocation}
                                    value={Location}
                                    onChangeText={(text) => {
                                        setLocation(text)
                                    }

                                    }

                                />



                            </View>






                        </Card>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24, marginBottom: 20 }}>
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
        elevation: 8,
        backgroundColor: '#ffffff'

    },
    cardGender: {
        width: 328,
        height: 150,
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
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 24,
        letterSpacing: 0.005,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1

    },
    rowText2: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#6CB6DD',
        lineHeight: 24,
        letterSpacing: 0.005,


    },

    otpText: {
        width: 150,
        textAlign: 'center',
        fontSize: 22,
        paddingHorizontal: 15,
        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.8,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,
    },
    otpLocation: {
        width: 200,
        textAlign: 'center',
        fontSize: 22,
        paddingHorizontal: 15,
        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.8,
        borderBottomColor: Colors.blue,
        borderBottomWidth: 1,
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

    separator: {
        width: 200,
        borderBottomColor: Colors.blue,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        borderColor: Colors.blue

    },

});
export default AgeGender;