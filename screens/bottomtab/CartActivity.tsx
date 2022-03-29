import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, ToastAndroid, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

import ToolBarHome from '../../components/UI/ToobarHome';
import RBSheet from "react-native-raw-bottom-sheet";
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import DATA from '../../data/ListFemale';
import Male from '../../data/ListMale';
import Colors from '../../constants/Colors';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { idUser } from '../../api/apiService';
import { widthScreen } from '../utils';

const CartActivity = ({ navigation }: { navigation: any }) => {
  
    const refRBSheet = useRef();
    const refUpdateRBSheet = useRef();
   

    const [users, setUsers] = React.useState([]);
    const [index, setIndex] = React.useState([]);
    const { uid: id_User } = idUser();

    React.useEffect(() => {
        var dataContainer = []

        const userRef = database().ref(`users`);
        const OnLoadingListener = userRef.on('value', snapshot => {

            if (snapshot.val()) {
                setUsers(Object.values(snapshot.val())?.filter((v) => v.uid === id_User));
            }

        });
        return () => {
            userRef.off('value', OnLoadingListener);
            setUsers([]);
        };

    }, [])
    React.useEffect(() => {
        var dataContainer = []

        const userRef = database().ref(`healthIndex`);
        const OnLoadingListener = userRef.on('value', snapshot => {

            if (snapshot.val()) {
                setIndex(Object.values(snapshot.val())?.filter((v) => v));
            }

        });
        return () => {
            userRef.off('value', OnLoadingListener);
            setIndex([]);
        };

    }, [])
    console.log('healthIndex', index)

    const DATA = [
        {
            id: '1',
            title: 'Gender',
            value: users[0]?.information?.sex
        },
        {
            id: '2',
            title: 'Age',
            value: users[0]?.information?.old
        },

        {
            id: '3',
            title: 'Phone number',
            value: users[0]?.phone
        },


        {
            id: '4',
            title: 'Email',
            value: users[0]?.email
        },
        {
            id: '5',
            title: 'Location',
            value: users[0]?.information?.location
        },
        {
            id: '6',
            title: 'Country',
            value: users[0]?.information.country
        },
        {
            id: '7',
            title: 'UID',
            value: users[0]?.uid
        },




    ];

    console.log('user', users);
   

    const Item = ({ title, value }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title2}>{value}</Text>

        </View>
    );


    const renderItem = (item, index) => (
        <Item title={item.title} value={item.value} />
    );


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

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center', padding: 8 }}>

                    <View>
                        <TouchableOpacity
                            onPress={() => refRBSheet.current.open()}
                        >
                            <RBSheet
                                ref={refRBSheet}
                                closeOnDragDown={true}

                                dragFromTopOnly={false}
                                openDuration={250}
                                height={200}
                                customStyles={{
                                    wrapper: {
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                    },
                                    draggableIcon: {
                                        backgroundColor: "#000",
                                    },
                                    container: {
                                        backgroundColor: '#fff',
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 16,


                                    }
                                }}
                            >
                                <View>

                                    <View style={{ flexDirection: 'row', padding: 14 }}>

                                        <Image style={{ marginRight: 16, }} source={require('../../images/camera.png')} />
                                        <TouchableOpacity>
                                            <Text style={{
                                                color: '#091F3A',
                                                fontFamily: 'HelveticaNeue',
                                                fontSize: 14,
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                lineHeight: 18,
                                                opacity: 0.8
                                            }} >Open camera</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flexDirection: 'row', padding: 14 }}>
                                        <Image style={{ marginRight: 16, }} source={require('../../images/picture.png')} />
                                        <Text style={{
                                            color: '#091F3A',
                                            fontFamily: 'HelveticaNeue',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            lineHeight: 18,
                                            opacity: 0.8
                                        }}>Choose from album</Text>

                                    </View>
                                    <View style={{ flexDirection: 'row', padding: 14 }}>
                                        <Image style={{ marginRight: 16, }} source={require('../../images/user.png')} />
                                        <Text style={{
                                            color: '#091F3A',
                                            fontFamily: 'HelveticaNeue',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 'bold',
                                            lineHeight: 18,
                                            opacity: 0.8
                                        }}>Remove profile picture</Text>

                                    </View>
                                </View>
                            </RBSheet>
                            <Avatar
                                rounded
                                size={120}
                                source={require('../../images/boy.png')}
                            />

                            <Image style={{ position: 'absolute', marginLeft: 80, marginTop: 80 }} source={require('../../images/u_camera.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        color: '#091F3A',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 34,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        lineHeight: 24,
                        padding: 12,
                        opacity: 0.8
                    }}>{users[0]?.name} </Text>
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Card style={styles.cardBMI}>
                        <View style={{ flexDirection: 'row', padding: 12, marginLeft: 40 }}>
                            <View style={{ flexDirection: 'column', marginRight: 55 }}>
                                <Text style={{
                                    color: '#091F3A',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: 24,
                                    letterSpacing: 0.005
                                }}>Weight</Text>
                                <Text style={{
                                    color: '#2190CD',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 24,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>{users[0]?.healthCare?.wight}{<Text style={{ fontSize: 16 }}>kg</Text>}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', marginRight: 55 }}>
                                <Text style={{
                                    color: '#091F3A',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: 24,
                                    letterSpacing: 0.005
                                }}>Height</Text>
                                <Text style={{
                                    color: '#2190CD',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 24,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>{users[0]?.healthCare?.height}{<Text style={{ fontSize: 16 }}>cm</Text>}</Text>
                            </View>

                            <View style={{ flexDirection: 'column', marginRight: 55 }}>
                                <Text style={{
                                    color: '#091F3A',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    lineHeight: 24,
                                    letterSpacing: 0.005
                                }}>BMI</Text>

                                <Text style={{

                                    color: '#F8BA56',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 24,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>{Math.round(users[0]?.healthCare?.wight / (users[0]?.healthCare?.height / 100 * 2))}

                                </Text>


                                
                            </View>
                        </View>

                    </Card>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Card style={styles.cardResults}>
                        <Text style={{
                            color: '#091F3A',
                            fontFamily: 'HelveticaNeue',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: 24,
                            letterSpacing: 0.005,
                            margin: 8,
                            opacity: 0.8
                        }}>The lastest results</Text>

                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', marginRight: 55, alignItems: 'center' }} >
                                    <Text style={{
                                        color: '#091F3A',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 20,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>°C</Text>
                                    <Text style={{
                                        color: '#2190CD',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.8
                                    }}>5 mg/dL</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{
                                        color: '#091F3A',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 20,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>SPO2</Text>
                                    <Text style={{
                                        color: '#2190CD',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 16,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.8
                                    }}>{index[0] + '%'}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', marginRight: 55, alignItems: 'center' }} >
                                    <Text style={{
                                        color: '#091F3A',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>Heart rate</Text>
                                    <Text style={{
                                        color: '#FF5B5B',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.6
                                    }}>{index[1]}</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{
                                        color: '#091F3A',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>ECG</Text>
                                    <Text style={{
                                        color: '#6D96FF',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.8
                                    }}>View my ECG</Text>
                                </View>
                            </View>



                        </View>


                    </Card>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Card style={styles.cardInformation}>
                        <View style={{}}>
                            {DATA.map(renderItem)}


                        </View>
                    </Card>
                </View>

                <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity
                        onPress={() => refUpdateRBSheet.current.open()}

                        style={styles.btnLuu2}>
                        <RBSheet
                            ref={refUpdateRBSheet}
                            closeOnDragDown={true}

                            dragFromTopOnly={false}
                            openDuration={250}
                            height={500}
                            customStyles={{
                                wrapper: {
                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                },
                                draggableIcon: {
                                    backgroundColor: "#000",
                                },
                                container: {
                                    backgroundColor: '#fff',
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,


                                }
                            }}
                        ></RBSheet>

                        <View style={{ flexDirection: 'row' }}>

                            <Text style={styles.textLogin2}>Update contact</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchFriend')}
                        style={styles.btnLuu}>
                        <View style={{ flexDirection: 'row', }}>

                            <Text style={styles.textLogin}>Share with Doctor</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Card style={{
                        width: 327,
                        height: 88,
                        borderRadius: 8,
                        marginTop: 24,
                        elevation: 8,
                        backgroundColor: '#ffffff',
                        marginBottom: 62
                    }}>
                        <View style={{ padding: 12 }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Login')}
                            >
                                <Text style={{
                                    color: '#FF5B5B',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 18,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>Log off</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}
                            >
                                <Text style={{
                                    color: '#FF5B5B',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 18,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>Delele Account</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </View>
            </ScrollView>


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
    cardBMI: {
        width: widthScreen - 80,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        elevation: 8,
        backgroundColor: '#ffffff',

    },
    cardInformation: {
        width: widthScreen - 80,
        borderRadius: 12,
        borderWidth: 0.5,
        marginTop: 16,
        elevation: 8,
        backgroundColor: '#ffffff'

    },
    cardResults: {
        width: widthScreen - 80,
        borderRadius: 12,
        borderWidth: 0.5,
        marginTop: 16,
        elevation: 8,
        backgroundColor: '#ffffff'

    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
        , paddingHorizontal: 10
    },
    title: {
        color: '#091F3A',
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18,
        letterSpacing: 0.005,
        opacity: 0.8,
    },
    title2: {
        color: '#091F3A',
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 18,
        letterSpacing: 0.005,
        opacity: 0.4,
        textAlign: 'right',
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
    btnLuu: {
        backgroundColor: Colors.blue,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        marginTop: 16
    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },
})
export default CartActivity;