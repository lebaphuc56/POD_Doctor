import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, Alert, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import Colors from "../../constants/Colors";

const DoctorDetail = ({ navigation }: { navigation: any }) => {

    const blood = ['+84', '+26', '+45', '+12', '+23', '+34', '+56', '+78', '+96',];

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
                    <Text style={{
                        marginRight: '40%',
                        color: '#091F3A',
                        fontSize: 18,
                        lineHeight: 24,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: 'bold',

                    }}>Profile doctor</Text>
                </TouchableOpacity>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Card style={styles.cardAge}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={{
                                    width: 116,
                                    height: 170,
                                    borderRadius: 8

                                }}

                                source={require('../../images/zhang.png')}
                            />


                            <View style={{ marginLeft: 14, marginTop: 18 }}>
                                <Text style={{ color: Colors.blue, fontSize: 16, fontWeight: 'bold' }}>Dr. Liu Zhang</Text>


                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text style={{ fontSize: 12 }}>Cardiology | Gastroenterology </Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text style={{ fontSize: 12 }}>Lim Ing Haan Cardiology Clinic</Text>
                                </View>

                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text style={{ fontSize: 12, lineHeight: 18, letterSpacing: 0.005, flexGrow: 1 }}>04-02 Medical Centre, Mount </Text>

                                </View>
                                <Text style={{ fontSize: 12, lineHeight: 18, letterSpacing: 0.005, flexGrow: 1 }}>  Elizabeth, Singapore </Text>

                                <View style={{ flexDirection: 'row', marginTop: 8 }}>

                                    <Image style={{ marginRight: 8 }} source={require('../../images/phone.png')} />
                                    <TouchableOpacity
                                        onPress={() =>
                                            Alert.alert(
                                                "Dr. Liu Zhang",
                                                "023 330 4292",
                                                [
                                                    {
                                                        text: "Ask me later",
                                                        onPress: () => console.log("Ask me later pressed")
                                                    },

                                                    { text: "Call", onPress: () => console.log("Calling") }
                                                ]
                                            )}
                                    >
                                        <Text style={{ color: Colors.blue }}>023 330 4292 </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </Card>
                </View>




                <View style={{ alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchFriend')}
                        style={styles.btnLuu}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginRight: 8 }} source={require('../../images/fi_video.png')} />
                            <Text style={styles.textLogin}>Video call</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchFriend')}
                        style={styles.btnLuu2}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ marginRight: 8 }} source={require('../../images/Stroke.png')} />
                            <Text style={styles.textLogin2}>Call via phone number</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: 'center', padding: 12 }}>
                    <Card style={{
                        width: 327,
                        height: 90,
                        alignItems: 'center',
                        borderRadius: 12,
                        borderWidth: 0.5,
                        borderColor: Colors.blue

                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.blue, fontSize: 18 }}>Specialist:</Text>
                            <Text style={{ padding: 12, color: '#091F3A', opacity: 0.6 }}>Cardiology | Neurologist  | Cardiologist | Dermatologist |
                                Oncologist | ophthalmologist </Text>
                        </View>
                    </Card>
                </View>

                <View style={{ alignItems: 'center', padding: 12 }}>
                    <Card style={{
                        width: 327,
                        height: 200,
                        alignItems: 'center',
                        borderRadius: 12,
                        borderWidth: 0.5,
                        borderColor: Colors.blue

                    }}>
                        <View style={{ flexDirection: 'column', padding: 12 }}>
                            <Text style={{ color: Colors.blue, fontSize: 18 }}>Experience:</Text>
                            <Text style={{
                                padding: 12,
                                color: '#091F3A',
                                opacity: 0.6,
                                fontSize: 12,
                                lineHeight: 18,
                                fontWeight: '400',
                                fontStyle: 'normal'

                            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend iaculis pellentesque. Ut luctus eros tincidunt nunc vestibulum commodo. Sed cursus vitae urna at convallis. Quisque tincidunt at ligula gravida egestas. Suspendisse potenti. Quisque auctor facilisis massa. Aenean at accumsan nulla. Nulla mattis quis elit at imperdiet.

                            </Text>
                        </View>

                    </Card>
                </View>

                <View style={{ alignItems: 'center', padding: 12 }}>
                    <Card style={{
                        width: 327,
                        height: 120,
                        alignItems: 'center',
                        borderRadius: 12,
                        borderWidth: 0.5,
                        borderColor: Colors.blue

                    }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: Colors.blue, fontSize: 18 }}>Education:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ marginRight: 8, }} source={require('../../images/education.png')} />
                                <Text>Graduated Medical University of US in 2010 </Text>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ marginRight: 8, }} source={require('../../images/education.png')} />
                                <Text>Diplomas Health Care - 2013 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ marginRight: 8, }} source={require('../../images/education.png')} />
                                <Text>Phytotherapy Diploma - 2020 </Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </View >
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
        height: 208,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        borderWidth: 1,
        shadowColor: 'red',
        marginTop: 12,
        padding: 8

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
    btnLuu2: {
        backgroundColor: Colors.white,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        borderColor: Colors.blue,
        borderWidth: 1


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
        width: 250,
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
        fontSize: 16,
        fontWeight: 'bold',


    }

});
export default DoctorDetail;