import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, SafeAreaView, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';

import ToolBarHome from '../../components/UI/ToobarHome';
import RBSheet from "react-native-raw-bottom-sheet";
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import DATA from '../../data/ListFemale';
import Male from '../../data/ListMale';
import Colors from '../../constants/Colors';


const CartActivity = ({ navigation }: { navigation: any }) => {
    const refRBSheet = useRef();

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const Item2 = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title2}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    const renderItem2 = ({ item }) => (
        <Item2 title={item.title} />
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
                                source={require('../../images/ken.png')}
                            />

                            <Image style={{ position: 'absolute', marginLeft: 80, marginTop: 80 }} source={require('../../images/u_camera.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        color: '#091F3A',
                        fontFamily: 'HelveticaNeue',
                        fontSize: 24,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        lineHeight: 24,
                        padding: 12,
                        opacity: 0.8
                    }}>Dr. Chen Kook Ken </Text>
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
                                }}>59{<Text style={{ fontSize: 16 }}>kg</Text>}</Text>
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
                                }}>180{<Text style={{ fontSize: 16 }}>cm</Text>}</Text>
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
                                    color: '#2190CD',
                                    fontFamily: 'HelveticaNeue',
                                    fontSize: 24,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>18.1</Text>
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
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>Uric Acid</Text>
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
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>Cholesterol level</Text>
                                    <Text style={{
                                        color: '#2190CD',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.8
                                    }}>189 mg/dL</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center', justifyContent: 'center' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', marginRight: 55, alignItems: 'center' }} >
                                    <Text style={{
                                        color: '#091F3A',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 16,
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        lineHeight: 24,
                                        letterSpacing: 0.005
                                    }}>Glucose level</Text>
                                    <Text style={{
                                        color: '#FF5B5B',
                                        fontFamily: 'HelveticaNeue',
                                        fontSize: 18,
                                        marginTop: 8,
                                        fontStyle: 'normal',
                                        fontWeight: 'bold',
                                        lineHeight: 24,
                                        opacity: 0.6
                                    }}>126 mg/dL</Text>
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
                        <View style={{ flexDirection: 'row', }}>
                            <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                            <FlatList
                                data={Male}
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </Card>
                </View>

                <View style={{ flexDirection: 'column', alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SearchFriend')}
                        style={styles.btnLuu2}>
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
                        borderColor: Colors.blue,
                        borderWidth: 0.5,
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
        width: 327,
        height: 71,
        borderRadius: 12,
        borderWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16

    },
    cardInformation: {
        width: 327,
        height: 304,
        borderRadius: 12,
        borderWidth: 0.5,
        marginTop: 16,

    },
    cardResults: {
        width: 327,
        height: 180,
        borderRadius: 12,
        borderWidth: 0.5,
        marginTop: 16,

    },
    item: {
        padding: 8,
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
        marginLeft: 31,
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