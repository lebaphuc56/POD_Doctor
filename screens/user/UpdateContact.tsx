import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import ToolBarHome from "../../components/UI/ToobarHome";



import Colors from "../../constants/Colors";

const UpdateContact = ({ navigation }: { navigation: any }) => {

    const gender = ['Male', 'Female'];
    const blood = ['AB', 'A', 'B', 'O',];
    const country = ['Tampines', 'Vietnam', 'ThaiLand', 'Lao',];
    const city = ['Tampines', 'Vietnam', 'ThaiLand', 'Lao',];
    const district = ['Tampines', 'Vietnam', 'ThaiLand', 'Lao',];
    return (
        <View style={styles.container}>

            <View style={styles.HeadContainer} >
                <ToolBarHome>
                    <View style={styles.HeadContainer} >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image style={{ marginLeft: 30, }} source={require('../../images/back.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Text style={{
                                marginRight: '35%',
                                color: '#091F3A',
                                fontSize: 18,
                                lineHeight: 24,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',

                            }}>Update contact</Text>
                        </TouchableOpacity>
                    </View>
                </ToolBarHome>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'column', padding: 16 }}>
                        <Text style={{

                            color: '#091F3A',
                            fontSize: 14,
                            lineHeight: 18,
                            fontFamily: 'Helvetica Neue',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            marginBottom: 8

                        }}>Gender</Text>

                        <Card style={styles.cardGender}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: "center" }}>
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

                    <View>
                        <View style={{ flexDirection: 'column', padding: 16 }}>
                            <Text style={{

                                color: '#091F3A',
                                fontSize: 14,
                                lineHeight: 18,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginBottom: 8

                            }}>Age</Text>

                            <TextInput
                                style={{
                                    width: 156,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: Colors.blue,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 16,
                                    lineHeight: 20,
                                    fontFamily: 'Helvetica Neue',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    color: '#091F3A',
                                    opacity: 0.8,
                                    padding: 8

                                }}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>


                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'column', padding: 16 }}>
                        <Text style={{

                            color: '#091F3A',
                            fontSize: 14,
                            lineHeight: 18,
                            fontFamily: 'Helvetica Neue',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            marginBottom: 8

                        }}>Blood type</Text>

                        <Card style={styles.cardGender}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: "center" }}>
                                    <SelectDropdown
                                        buttonStyle={styles.drop}
                                        rowStyle={styles.row}
                                        buttonTextStyle={styles.rowText}
                                        rowTextStyle={styles.rowText}
                                        data={blood}
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

                    <View>
                        <View style={{ flexDirection: 'column', padding: 16 }}>
                            <Text style={{

                                color: '#091F3A',
                                fontSize: 14,
                                lineHeight: 18,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginBottom: 8

                            }}>Birthday</Text>

                            <TextInput
                                style={{
                                    width: 156,
                                    height: 40,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: Colors.blue,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 16,
                                    lineHeight: 20,
                                    fontFamily: 'Helvetica Neue',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    color: '#091F3A',
                                    opacity: 0.8,
                                    padding: 8

                                }}
                                keyboardType='number-pad'
                            />
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{

                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        marginBottom: 8

                    }}>Phone number</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={{
                                width: 340,
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: Colors.blue,

                                fontSize: 16,
                                lineHeight: 20,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                color: '#091F3A',
                                opacity: 0.8,
                                padding: 8,


                            }}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 12 }}>
                    <Text style={{

                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        marginBottom: 8

                    }}>Emergency contact</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={{
                                width: 340,
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: Colors.blue,

                                fontSize: 16,
                                lineHeight: 20,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                color: '#091F3A',
                                opacity: 0.8,
                                padding: 8,


                            }}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ flexDirection: 'column', padding: 16 }}>
                        <Text style={{

                            color: '#091F3A',
                            fontSize: 14,
                            lineHeight: 18,
                            fontFamily: 'Helvetica Neue',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            marginBottom: 8

                        }}>Country</Text>

                        <Card style={styles.cardAddress}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: "center" }}>
                                    <SelectDropdown
                                        buttonStyle={styles.dropAddress}
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
                    <View style={{ flexDirection: 'column', padding: 16 }}>
                        <Text style={{

                            color: '#091F3A',
                            fontSize: 14,
                            lineHeight: 18,
                            fontFamily: 'Helvetica Neue',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            marginBottom: 8

                        }}>City</Text>

                        <Card style={styles.cardAddress}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: "space-between" }}>
                                    <SelectDropdown
                                        buttonStyle={styles.dropAddress}
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

                    <View style={{ flexDirection: 'column', padding: 16 }}>
                        <Text style={{

                            color: '#091F3A',
                            fontSize: 14,
                            lineHeight: 18,
                            fontFamily: 'Helvetica Neue',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            marginBottom: 8

                        }}>District</Text>

                        <Card style={styles.cardAddress}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '100%', alignItems: 'center', justifyContent: "center" }}>
                                    <SelectDropdown
                                        buttonStyle={styles.dropAddress}
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


                </View>

                <View style={{ alignItems: 'center',marginTop:12 }}>
                    <Text style={{

                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        marginBottom: 8

                    }}>Health Condition</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={{
                                width: 340,
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: Colors.blue,

                                fontSize: 14,
                                lineHeight: 18,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                color: '#091F3A',
                                opacity: 0.8,
                                padding: 8,


                            }}
                            placeholder='Tell us about your health'
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'center' ,marginTop:12}}>
                    <Text style={{

                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        marginBottom: 8,
                        

                    }}>Allergy</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={{
                                width: 340,
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: Colors.blue,

                                fontSize: 14,
                                lineHeight: 18,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                color: '#091F3A',
                                opacity: 0.8,
                                padding: 8,


                            }}
                            placeholder='Are you allergic to something?'
                            keyboardType='number-pad'
                        />
                    </View>
                </View>

                <View style={{ alignItems: 'center',marginTop:12 }}>
                    <Text style={{

                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontFamily: 'Helvetica Neue',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        marginBottom: 8

                    }}>Allergy</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={{
                                width: 340,
                                height: 40,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: Colors.blue,

                                fontSize: 14,
                                lineHeight: 18,
                                fontFamily: 'Helvetica Neue',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                color: '#091F3A',
                                opacity: 0.8,
                                padding: 8,


                            }}


                        />
                    </View>
                </View>


                <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 20, marginBottom: 37 }}>

                    <TouchableOpacity
                        onPress={() => navigation.push('UpdateContact')}
                        style={styles.btnLuu2}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.textLogin2}>Save changes</Text>
                        </View>
                    </TouchableOpacity>


                </View>

            </ScrollView>
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
        borderWidth: 1,
        shadowColor: 'red',

    },
    cardGender: {
        width: 156,
        height: 40,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        borderWidth: 1,
        shadowColor: 'red',
    },
    cardAddress: {
        width: 98,
        height: 40,
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
        width: 158,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.blue
    },
    dropAddress: {
        width: 98,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: Colors.blue
    },
    row: {
        backgroundColor: '#fff',

    },
    rowText: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: '700',
        fontStyle: "normal",
        color: '#091F3A',
        lineHeight: 20,
        letterSpacing: 0.005,
        opacity: 0.8,
    },
    btnLuu2: {
        backgroundColor: Colors.blue,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        borderColor: Colors.blue,
        borderWidth: 1,

    },

    textLogin2: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },


});
export default UpdateContact;