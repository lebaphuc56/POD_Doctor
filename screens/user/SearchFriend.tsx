import React, { useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput } from "react-native";
import { Card } from "react-native-paper";
import SelectDropdown from 'react-native-select-dropdown';
import Colors from "../../constants/Colors";
import { Avatar } from 'react-native-elements';
const SearchFriend = ({ navigation }: { navigation: any }) => {

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


            </View>



            <View style={{ alignItems: 'center' }}>
                <Avatar
                    rounded
                    size={120}
                    source={require('../../images/zhang.png')}
                />
                <Text style={{
                    color: '#091F3A',
                    fontFamily: 'HelveticaNeue',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    lineHeight: 24,
                    padding:12,
                    opacity:0.8
                }}>John Doe</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                <Card style={styles.cardAge}>
                    <View style={{padding:12,}}>
                        <View style={{flexDirection:'row',justifyContent:'space-around',padding:4}}>
                            <Text style={styles.textRight}>Gender</Text>
                            <Text style={styles.textLeft}>Female</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',padding:4}}>
                            <Text style={styles.textRight}>Age</Text>
                            <Text style={styles.textLeft}>58</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',padding:4}}>
                            <Text style={styles.textRight}>Birthday</Text>
                            <Text style={styles.textLeft}>14/11/1963</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',padding:4}}>
                            <Text style={styles.textRight}>Telephone</Text>
                            <Text style={styles.textLeft}>965 267 85</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-around',padding:4}}>
                            <Text style={styles.textRight}>Location</Text>
                            <Text style={styles.textLeft}>Tampines</Text>
                        </View>
                    </View>
                   
                    
                   
                    
                </Card>
                <Text style={{
                    color: '#6CB6DD',
                    fontFamily: 'HelveticaNeue',
                    fontSize: 16,
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    lineHeight: 24,
                    
                    opacity:0.8
                }}>Friend request has been sent successfully!</Text>
            </View>




            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.btnLuu}>
                    <Text style={styles.textLogin}>Cancel request</Text>
                </TouchableOpacity>
            </View>



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
        height: 164,
        flexDirection: 'column',
        display: 'flex',
        borderRadius: 16,
        elevation:16,
        backgroundColor:'#ffffff',
        marginTop: 12,
        shadowColor:'#8DC6E4'

    },


    btnLuu: {
        backgroundColor: Colors.white,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        borderWidth:1,
        borderColor:Colors.blue

    },
    textLogin: {
        color: Colors.blue,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
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
    separator: {
        width: 200,
        borderBottomColor: Colors.blue,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth: 1,
        borderColor: Colors.blue

    },
    textRight:{
        
        color: '#091F3A',
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 'bold',
        
    },
    textLeft:{
        
        color: '#091F3A',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        fontWeight: 'normal',
        opacity: 0.4
    },

    


});
export default SearchFriend;