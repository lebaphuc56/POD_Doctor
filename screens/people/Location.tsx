import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';



import Colors from "../../constants/Colors";

const Location = ({ navigation }: { navigation: any }) => {

    const blood = ['Vietnam', 'Afghanistan', 'India', 'Indonesia','South Korea','Thailand','United States of America','Qatar'];
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
                <Image source={require('../../images/location.png')} />
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Card style={styles.cardAge}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 36, fontStyle: 'normal',
                        fontWeight: 'bold',
                        color: '#091F3A',
                        opacity: 0.8
                    }}>Location</Text>
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


                    <TextInput

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
                    <View style={{  flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" ,}}>
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
                            <View style={{ flex: 1, position: "absolute", alignSelf: "flex-end", marginRight: "10%" }}>
                            <Image style={{ marginLeft: 30, }} source={require('../../images/dropdown.png')} />
                            </View>


                        </View>
                    </View>

                    <View style={{  flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" ,marginTop:8}}>
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
                            <View style={{ flex: 1, position: "absolute", alignSelf: "flex-end", marginRight: "10%" }}>
                            <Image style={{ marginLeft: 30, }} source={require('../../images/dropdown.png')} />
                            </View>


                        </View>
                    </View>
                    <View style={{  flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" ,marginTop:8}}>
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
                            <View style={{ flex: 1, position: "absolute", alignSelf: "flex-end", marginRight: "10%" }}>
                            <Image style={{ marginLeft: 30, }} source={require('../../images/dropdown.png')} />
                            </View>


                        </View>
                    </View>


                </Card>
            </View>



            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 24 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('EmergencyContact')}
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
        height: 330,
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
        width: '100%',
        borderRadius: 8,
        height: 44,
        
      },
      row:{
        backgroundColor: '#fff',
        borderRadius:8
        
      },
      rowText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: "normal",
        color: '#091F3A',
        lineHeight: 36,
        letterSpacing: 0.005,
        borderWidth:1,
        borderColor: Colors.blue,
        height:40,
        borderRadius:8,
        opacity:0.4
       
       

    },

    otpText: {
        textAlign: 'center',
        fontSize: 18,
        padding: 0,
        paddingHorizontal: 18,

        fontWeight: 'bold',
        color: Colors.blue,
        opacity: 0.8,
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
export default Location;