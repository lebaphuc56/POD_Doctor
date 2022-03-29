import React, { useState, } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from "react-native";
import InputText from "../../components/UI/InputText";
import CheckBox from '@react-native-community/checkbox';
import Colors from "../../constants/Colors";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    type formParams = {

        email: string,
        password: string,

    }
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [form, setForm] = useState<formParams>({

        email: '',
        password: '',
    })
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../images/backgroundImage.png')} resizeMode="cover" style={styles.image}>

                <View style={styles.vieText}>
                    <Text style={styles.text}>Hi there!</Text>
                    <Text style={styles.textInform}>Create an account so you can see
                    </Text>
                    <Text style={styles.textInform}>valuable information about your body.</Text>
                </View>

                <View style={{ flexDirection: 'column' }}>
                <Text style={{
                                    color: '#091F3A',
                                    fontSize: 18,
                                    lineHeight: 24,
                                    letterSpacing: 0.005,
                                    opacity: 0.8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    marginLeft: 30,


                                }}>Email</Text>

                    <InputText placeholder="@gmail.com" onChangeText={(text: string) => {
                        setForm({ ...form, email: text })
                    }} />
                    <Text style={{
                                    color: '#091F3A',
                                    fontSize: 18,
                                    lineHeight: 24,
                                    letterSpacing: 0.005,
                                    opacity: 0.8,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    marginLeft: 30,
                                    marginTop:20


                                }}>Password</Text>
                    <InputText placeholder="********"
                        onChangeText={(text: string) => {
                            setForm({ ...form, password: text })
                        }} />

                </View>
                <Text style={{ marginLeft: '65%', marginTop: 12, marginBottom: 24 ,color:Colors.blue}}>Forgot Password</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'center', padding: 12 }}>

                    <TouchableOpacity
                        onPress={() => {
                            if (Object.values(form).some((value) => value !== '')) {
                                auth()
                                    .signInWithEmailAndPassword(form.email, form.password)
                                    .then(() => {

                                        ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
                                        console.log('Login successfully');
                                        navigation.navigate('OptScreen');
                                    })
                                    .catch(error => {
                                        if (error.code === 'auth/email-already-in-use') {
                                            console.log('That email address is already in use!');
                                        }

                                        if (error.code === 'auth/invalid-email') {
                                            console.log('That email address is invalid!');
                                        }

                                        console.error(error);
                                    });
                            }
                        }}
                        style={styles.btnLuu}>
                        <Text style={styles.textLogin}>Sign In</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', marginTop: 24, fontSize: 16, color: '#091F3A', opacity: 0.5, marginBottom: 8 }}>Or sign up with</Text>
                <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'space-between', marginLeft: '35%', marginRight: '35%' }}>
                    <Image

                        source={require('../../images/google.png')} />

                    <Image source={require('../../images/facebook.png')} />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 100 }}>
                    <Text style={{
                        fontFamily: 'HelveticaNeue',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: '#000000',

                    }}>Don’t have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}
                    >
                        <Text style={{
                            fontFamily: 'HelveticaNeue',
                            fontSize: 16,
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            color: Colors.blue,

                        }}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        fontSize: 36,
        fontFamily: 'HelveticaNeue Bold',
        lineHeight: 36,
        color: '#091F3A'


    },
    image: {
        flex: 1,
        justifyContent: "center",


    },
    imageLogo: {
        width: 110,
        height: 57,
        marginLeft: 155,
        marginRight: 132,


    },
    textInform: {
        fontSize: 16,
        fontFamily: 'helvetica neue regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        color: '#091F3A',
    },
    vieText: {
        padding: 22,
        marginTop: 60
    },
    textComment: {
        fontSize: 20,
        fontWeight: '500',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    btnLuu: {
        backgroundColor: Colors.blue,

        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 327,

    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },

});

export default Login;



