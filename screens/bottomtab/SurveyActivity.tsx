import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert

} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import ToolBarHome from "../../components/UI/ToobarHome";
import { Searchbar } from 'react-native-paper';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import Colors from "../../constants/Colors";
import { Avatar } from "react-native-elements";
const SurveyActivity = ({ navigation }: { navigation: any }) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
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
                <View style={{ alignItems: 'center', padding: 12 }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        style={{
                            width: 350,
                            height: 40,
                            borderRadius: 8

                        }}
                        value={searchQuery} autoCompleteType={undefined} />
                </View>

                <View style={{ alignItems: 'center', }}>
                    <TouchableOpacity
                    onPress={() =>navigation.navigate('DoctorDetail')}
                    >
                    <Card style={styles.cardDoctor}>

                        <View style={{ flexDirection: 'row' }}>
                            <Avatar
                                containerStyle={{
                                    width: 64,
                                    height: 64,

                                }}
                                size={70}
                                source={require('../../images/zhang.png')}
                            />


                            <View style={{ marginLeft: 18 }}>
                                <Text style={{color: Colors.blue,fontSize:16,fontWeight:'bold'}}>Dr. Liu Zhang</Text>
                                <Text>Sengkang	Hospital</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text>Allergist  | Optician </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>

                                    <Image style={{ marginRight: 8, }} source={require('../../images/phone.png')} />
                                    <TouchableOpacity
                                        onPress={() =>
                                            Alert.alert(
                                                "Dr. Liu Zhang",
                                                "023 330 4292",
                                                [
                                                    {
                                                        text: "Ask me later",
                                                        onPress: () => console.log("Ask me later pressed")
                                                    },

                                                    { text: "Call", onPress: () => console.log("Calling") }
                                                ]
                                            )}
                                    >
                                        <Text style={{ color: Colors.blue }}>023 330 4292 </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </Card>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Card style={styles.cardDoctor}>

                        <View style={{ flexDirection: 'row' }}>
                            <Avatar
                                containerStyle={{
                                    width: 64,
                                    height: 64,

                                }}
                                size={70}
                                source={require('../../images/soon.png')}
                            />


                            <View style={{ marginLeft: 18 }}>
                                <Text style={{color: Colors.blue,fontSize:16,fontWeight:'bold'}}>Dr. Chi Soon</Text>
                                <Text>Medical	Hospital</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text>Allergist  | Optician </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/phone.png')} />
                                    <TouchableOpacity>
                                        <Text style={{ color: Colors.blue }}>023 330 4292 </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </Card>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Card style={styles.cardDoctor}>

                        <View style={{ flexDirection: 'row' }}>
                            <Avatar
                                containerStyle={{
                                    width: 64,
                                    height: 64,

                                }}
                                size={70}
                                source={require('../../images/ken.png')}
                            />


                            <View style={{ marginLeft: 18 }}>
                                <Text style={{color: Colors.blue,fontSize:16,fontWeight:'bold'}}>Dr. Chen Kook Ken</Text>
                                <Text>Blood Pressure Hospital</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text>Allergist  | Optician </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/phone.png')} />
                                    <Text style={{ color: Colors.blue }}>023 330 4292 </Text>
                                </View>

                            </View>

                        </View>
                    </Card>
                </View>

                <View style={{ alignItems: 'center', }}>
                    <Card style={styles.cardDoctor}>

                        <View style={{ flexDirection: 'row' }}>
                            <Avatar
                                containerStyle={{
                                    width: 64,
                                    height: 64,

                                }}
                                size={70}
                                source={require('../../images/zuy.png')}
                            />


                            <View style={{ marginLeft: 18 }}>
                                <Text style={{color: Colors.blue,fontSize:16,fontWeight:'bold'}}>Dr. Ming Zuy</Text>
                                <Text>Optican Specialist	Hospital</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/stethoscope.png')} />
                                    <Text>Allergist  | Optician </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ marginRight: 8, }} source={require('../../images/phone.png')} />
                                    <Text style={{ color: Colors.blue }}>023 330 4292 </Text>
                                </View>

                            </View>

                        </View>
                    </Card>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFBFC'
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
    inputSearch: {
        width: 327,
        height: 40,
        backgroundColor: '#F1F3F8',
        marginTop: 16,
        borderRadius: 8,
        padding: 12

    },
    cardDoctor: {
        width: 327,
        height: 128,
        borderColor: Colors.blue,
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 18,
        marginTop: 16


    }
});
export default SurveyActivity;