import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, TextInput, Button, Dimensions } from "react-native";

import { initializeApp, } from 'firebase/app';
import firebase from 'firebase/app'

const WIDTH = Dimensions.get("window").width

import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import { getDatabase, ref, onValue, set } from 'firebase/database';

const Test = ({ navigation }: { navigation: any }) => {



    const [id, setId] = useState(null);
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);



    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyD-89vRyI_ELk8mN8mO_q_NUOgWlrNPBdE",
            authDomain: "fir-pod-9e25b.firebaseapp.com",
            databaseURL: "https://fir-pod-9e25b-default-rtdb.firebaseio.com",
            projectId: "fir-pod-9e25b",
            storageBucket: "fir-pod-9e25b.appspot.com",
            messagingSenderId: "236068920718",
            appId: "1:236068920718:web:884c06a72869ac446958df",
            measurementId: "G-KXWQN7P670"
        };
        initializeApp(firebaseConfig);

    }, [])


    function addData(id, name, address) {
        const db = getDatabase();
        const reference = ref(db, 'users/' + id);
        set(reference, {
            Name: name,
            Address : address
        });
      }


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

                    }}>TestFirebase</Text>
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                <TextInput
                    style={styles.nhap}
                    placeholder='id'
                    onChangeText={(text) => { setId }}
                    value={id}
                />

                <TextInput
                    style={styles.nhap}
                    placeholder='name'
                    onChangeText={(text) => { setName }}
                    value={name}
                />
                <TextInput
                    style={styles.nhap}
                    placeholder='address'
                    onChangeText={(text) => { setAddress }}
                    value={address}
                />

                <TouchableOpacity
                    onPress={() => {
                        addData(id, name, address)
                    }}
                >
                    <Text style={styles.text}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.text}>Update</Text>
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
    nhap: {
        width: 352,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 16
    },
    text: {
        fontSize: 20,
        width: 100,
        height: 50,
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 16
    },
    HeadContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,

        justifyContent: 'space-between',
        alignItems: 'center',

    },


});
export default Test;