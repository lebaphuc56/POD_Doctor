import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, Alert, ActivityIndicator } from "react-native";
import { Card } from 'react-native-paper';
import Colors from "../../constants/Colors";

import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { idUser } from '../../api/apiService';
import { widthScreen } from '../utils';
import { healthIndex } from "../../api/apiService";


const SPO2 = ({ navigation }: { navigation: any }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [index, setIndex] = React.useState([]);

    const { uid: id_User } = idUser();


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


    return (
        <View style={styles.container}>



            <View style={{
                alignItems: 'center',
                justifyContent: 'center',


            }}>
                <View style={[styles.dot]}>
                    {[...Array(3).keys()].map(index => {

                    })}
                    <TouchableOpacity


                    >
                        <Image style={{ width: 150, height: 150, marginTop: 40 }} source={require('../../images/telephone.png')} />
                    </TouchableOpacity>
                </View>

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
                                    fontSize: 18,
                                    marginTop: 8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 24,
                                    opacity: 0.8
                                }}>{index[0]+ '%'}</Text>
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
                                    fontSize: 20,
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


            <View style={{ flexDirection: 'column', alignSelf: 'center', padding: 50 }}>

                

                <TouchableOpacity
                    disabled={isLoading}
                    onPress={() => navigation.goBack()}
                    style={styles.btnLuu}>
                    {isLoading && (
                        <ActivityIndicator size="small" color="#fff" />

                    )}
                    <View style={{ flexDirection: 'row', }}>

                        <Text style={styles.textLogin}>Xong</Text>
                    </View>
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
    dot: {
        width: 150,
        height: 150,
        borderRadius: 150,
        color: '#6e01ef'

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
        marginTop: 16,
        flexDirection: 'row',


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
        borderWidth: 1,

    },
    cardBMI: {
        width: 327,
        height: 100,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        elevation: 8,
        backgroundColor: '#ffffff',



    },
    cardResults: {
        width: widthScreen - 80,
        borderRadius: 12,
        borderWidth: 0.5,
        marginTop: 100,
        elevation: 8,
        backgroundColor: '#ffffff',


    },


});
export default SPO2;

