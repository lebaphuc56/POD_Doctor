import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ColorValue, StatusBar, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Card } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen'
import ToolBarHome from "../../components/UI/ToobarHome";
import Colors from '../../constants/Colors';


const ClockActivity = ({ navigation }: { navigation: any }) => {



    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <ToolBarHome>
                <View style={styles.HeadContainer} >
                    <TouchableOpacity

                    >
                        <Image style={{ marginLeft: 16, width: 60, height: 32 }} source={require('../../images/logo.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddFriend')}
                    >
                        <Image style={{ marginRight: 16, }} source={require('../../images/user.png')} />
                    </TouchableOpacity>
                </View>
            </ToolBarHome>
            <View>
                <Text style={{
                    color: Colors.blue,
                    fontSize: 16,
                    lineHeight: 24,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    padding: 18,
                    backgroundColor: Colors.white
                }}>Friend requests</Text>
            </View>

            <View style={{ flexDirection: 'row',padding:12,backgroundColor:'#EAF5FA' }}>
                <Avatar
                    rounded
                    size={70}
                    source={require('../../images/zhang.png')}
                />
                <View style={{ flexDirection: 'column',padding:12 }}>
                    <Text>{<Text style={{
                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        opacity: 0.4,

                    }}>Dr. Ming</Text>} sent you a friend request</Text>
                    <Text>
                    10 hours ago
                    </Text>

                    <View style={{flexDirection:'row', marginTop: 25}}>
                        <View style={{ alignSelf: 'center',}}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchFriend')}
                                style={styles.btnLuu}>
                                <View style={{ flexDirection: 'row' }}>
                                   
                                    <Text style={styles.textLogin}>Delete</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ alignSelf: 'center', }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchFriend')}
                                style={styles.btnLuu2}>
                                <View style={{ flexDirection: 'row' }}>
                                   
                                    <Text style={styles.textLogin2}>Confirm</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>

            <View style={{ flexDirection: 'row',padding:12,backgroundColor:'#fff' }}>
                <Avatar
                    rounded
                    size={70}
                    source={require('../../images/zuy.png')}
                />
                <View style={{ flexDirection: 'column',padding:12 }}>
                    <Text>{<Text style={{
                        color: '#091F3A',
                        fontSize: 14,
                        lineHeight: 18,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        opacity: 0.4,

                    }}>Dr. Ming</Text>} sent you a friend request</Text>
                    <Text>
                    10 hours ago
                    </Text>

                    <View style={{flexDirection:'row', marginTop: 25}}>
                        <View style={{ alignSelf: 'center',}}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchFriend')}
                                style={styles.btnLuu}>
                                <View style={{ flexDirection: 'row' }}>
                                   
                                    <Text style={styles.textLogin}>Delete</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ alignSelf: 'center', }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SearchFriend')}
                                style={styles.btnLuu2}>
                                <View style={{ flexDirection: 'row' }}>
                                   
                                    <Text style={styles.textLogin2}>Confirm</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>
            </View>
            <View>
                <Text style={{
                    color: Colors.blue,
                    fontSize: 16,
                    lineHeight: 24,
                    fontStyle: 'normal',
                    fontWeight: '700',
                    padding: 18,
                    backgroundColor: Colors.white
                }}>Notifications</Text>
            </View>



        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    HeadContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnLuu: {
        backgroundColor: Colors.white,
        height: 32,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 103,
        borderColor:Colors.blue,
        borderWidth:1

    },
    textLogin: {
        color: Colors.blue,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18
    },
    btnLuu2: {
        backgroundColor: Colors.blue,
        height: 32,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 103,
        marginLeft:12

    },
    textLogin2: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18
    },
})
export default ClockActivity;