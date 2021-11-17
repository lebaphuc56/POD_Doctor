import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import InputText from "../../components/UI/InputText";
import CheckBox from '@react-native-community/checkbox';
import Colors from "../../constants/Colors";

const Register = ({ navigation }: { navigation: any }) => {


    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../images/backgroundImage.png')} resizeMode="cover" style={styles.image}>
                <View >
                    <Image
                        style={styles.imageLogo}

                        source={require('../../images/logo.png')} />
                </View>
                <View style={styles.vieText}>
                    <Text style={styles.text}>Welcome!</Text>
                    <Text style={styles.textInform}>Create an account so you can see
                    </Text>
                    <Text style={styles.textInform}>valuable information about your body.</Text>
                </View>

                <View style={{ flexDirection: 'column' }}>

                    <InputText placeholder="Name" />
                    <InputText placeholder="Phone" />
                    <InputText placeholder="Email" />
                    <InputText placeholder="Password" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 12 }}>
                    <CheckBox

                        disabled={false}

                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{ fontSize: 16, marginTop: 4 }}>I agree to {<Text style={{ color: '#6CB6DD' }}> Terms & Conditions</Text>}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('AgeGender')}
                    style={styles.btnLuu}>
                    
                        <Text style={styles.textLogin}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ textAlign: 'center', marginTop:24, fontSize: 16, color: '#091F3A', opacity: 0.5 ,marginBottom:8}}>Or sign up with</Text>
                <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'space-between',marginLeft:'35%',marginRight:'35%' }}>
                    <Image

                        source={require('../../images/google.png')} />

                    <Image source={require('../../images/facebook.png')} />
                    
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:22 }}>
                    <Text style={{
                        fontFamily: 'HelveticaNeue',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color:'#000000',
                       
                    }}>Already a member?</Text>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    >
                    <Text style={{
                        fontFamily: 'HelveticaNeue',
                        fontSize: 16,
                        fontStyle: 'normal',
                        fontWeight: 'bold',
                        color:Colors.blue,
                       
                    }}> Sign In</Text>
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
        color: '#181818'


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
        marginTop:40
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

export default Register;