import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,
     Image, ColorValue, StatusBar, SafeAreaView,ActivityIndicator  } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import ToolBarHome from "../../components/UI/ToobarHome";
import Colors from '../../constants/Colors';


const ClockActivity = ({ navigation }: { navigation: any }) => {

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getListUsers();
        return () => {

        }
    }, [])

    const getListUsers = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/photos';
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setData(resJson)
            }).catch((error) => {
                console.log('Error :', error);
            }).finally(() => setisLoading(false))

    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source= {{uri:item.url}}
                    resizeMode='contain'
                />
                <View style={styles.wrapText}>
                    <Text>{item.title}</Text>

                </View>
            </View>
        )
    }

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
            <View style={{padding:8}}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Test')}
                >
                <Text style={{fontSize:30,color:Colors.black}}>List Photo API</Text>
                </TouchableOpacity>
            </View>

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => `key-${item.id}`}

                />

            )}

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    list: {
        flex: 1,
        padding: 8,
        

    },
    item: {
        flexDirection: 'row',
        marginTop: 8,
        padding: 5,
        shadowColor: 'red',
        shadowRadius: 8,
        shadowOpacity: 0.5,

    },
    image: {
        width: 100,
        height: 150,
    },
    wrapText:{
        flex:1,
        marginLeft:16,
        justifyContent:'center'

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
        borderColor: Colors.blue,
        borderWidth: 1

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
        marginLeft: 12

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