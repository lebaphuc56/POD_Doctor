import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView

} from "react-native";
import { ButtonGroup } from 'react-native-elements'
import { Card } from "react-native-paper";
import ToolBarHome from "../../components/UI/ToobarHome";
import Colors from "../../constants/Colors";
import { VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from "victory-native";

const DetailDoctorUric = ({ navigation }: { navigation: any }) => {
    const data = [
        { quarter: 5, earnings: 10 },
        { quarter: 6, earnings: 20 },
        { quarter: 7, earnings: 30 },
        { quarter: 8, earnings: 40 },
        { quarter: 9, earnings: 50 },
        { quarter: 10, earnings: 90, },

    ];
    const [selectedIndexECG, setSelectedIndexECG] = useState(0);
    const [selectedIndexCholestrol, setSelectedIndexCholestrol] = useState(0);
    const [selectedIndexVital, setSelectedIndexVital] = useState(0);
    return (
        <View style={styles.container}>
            <ToolBarHome>
                <View style={styles.HeadContainer} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image style={{ marginLeft: 16, width: 60, height: 32 }} source={require('../../images/logo.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={{ marginRight: 16, }} source={require('../../images/user.png')} />
                    </TouchableOpacity>
                </View>
            </ToolBarHome>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignItems: 'center', padding: 12 }}>

                    <Card style={styles.cardHome}>
                        <View style={{ flexDirection: 'row', marginLeft: 16 }}>
                            <View style={{ flexDirection: 'column', padding: 8, marginTop: 8 }}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 24,
                                    fontStyle: 'normal',
                                    lineHeight: 24,
                                    fontWeight: '700',
                                    letterSpacing: 0.005,
                                    fontFamily: 'HelveticaNeue Bold'
                                }}>Morning, John!  </Text>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    lineHeight: 18,
                                    fontWeight: 'normal',
                                    letterSpacing: 0.005,
                                    fontFamily: 'HelveticaNeue ',
                                    width: 175,
                                    height: 72
                                }}>Welcome to your Personal Online Docket. Refresh to see your Wellness
                                    Index Summary. </Text>
                            </View>

                            <View>
                                <Image style={{}} source={require('../../images/illus.png')} />
                            </View>
                        </View>


                    </Card>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/heart.png')} />
                            <Text style={{
                                color: '#333333',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                lineHeight: 18,
                                letterSpacing: 0.005,
                                marginLeft: 40,
                                fontFamily: 'Helvetica Neue'

                            }}>Easy Doctor ECG</Text>

                        </View>
                        <ButtonGroup
                            buttons={['Week', 'Month',]}
                            selectedIndex={selectedIndexECG}
                            onPress={(value) => {
                                setSelectedIndexECG(value);
                            }}
                            containerStyle={{ borderRadius: 8, width: 295, height: 32, marginLeft: 20 }}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ padding: 8, marginTop: 30, opacity: 0.8 }}>
                                <Text style={{ marginTop: 20, color: Colors.red }}>High</Text>
                                <Text style={{ marginTop: 20 }}>Normal</Text>
                                <Text style={{ marginTop: 20 }}>Low</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <VictoryChart
                                    width={300}
                                    height={200}
                                    domainPadding={{ x: 5 }}

                                    theme={VictoryTheme.material}>
                                    <VictoryBar

                                        style={{

                                            data: {
                                                fill: ({ datum }) => datum.x === 10 ? "#000000" : "#6CB6DD",


                                            },


                                        }}
                                        labels={({ datum }) => datum.x}
                                        data={data} x="quarter" y="earnings" />
                                </VictoryChart>

                            </View>
                        </View>
                        <Text style={{ padding: 8 }}>05/06/2021</Text>
                    </Card>
                </View>

                <View style={{ alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/Iconic.png')} />
                            <Text style={{
                                color: '#333333',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                lineHeight: 18,
                                letterSpacing: 0.005,
                                marginLeft: 40,
                                fontFamily: 'Helvetica Neue'

                            }}>Easy Doctor Cholestrol</Text>

                        </View>
                        <ButtonGroup
                            buttons={['Week', 'Month',]}
                            selectedIndex={selectedIndexCholestrol}
                            onPress={(value) => {
                                setSelectedIndexCholestrol(value);
                            }}
                            containerStyle={{ borderRadius: 8, width: 295, height: 32, marginLeft: 20 }}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ padding: 8, marginTop: 30, opacity: 0.8 }}>
                                <Text style={{ marginTop: 20, color: Colors.red }}>High</Text>
                                <Text style={{ marginTop: 20 }}>Normal</Text>
                                <Text style={{ marginTop: 20 }}>Low</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <VictoryChart
                                    width={300}
                                    height={200}

                                    theme={VictoryTheme.material}>
                                    <VictoryBar
                                        width={100}
                                        height={10}
                                        padding={{ left: 10, right: 10 }}
                                        style={{

                                            data: {
                                                fill: ({ datum }) => datum.x === 10 ? "#000000" : "#6CB6DD",


                                            },


                                        }}
                                        labels={({ datum }) => datum.x}
                                        data={data} x="quarter" y="earnings" />
                                </VictoryChart>

                            </View>
                        </View>
                        <Text style={{ padding: 8 }}>05-11/01/2021 • 3:32 PM</Text>
                    </Card>
                </View>


                <View style={{ alignItems: 'center', marginTop: 16 }}>
                    <Card style={styles.cardDoctor2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/water.png')} />
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>Easy Doctor Blood Pressure</Text>
                            <Image style={{}} source={require('../../images/fi_plus.png')} />
                        </View>
                    </Card>
                </View>

                <View style={{ alignItems: 'center', marginTop: 16 }}>
                    <Card style={styles.cardDoctor2}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/vacine.png')} />
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>Easy Doctor Blood Glucose</Text>
                            <Image style={{}} source={require('../../images/fi_plus.png')} />
                        </View>
                    </Card>
                </View>
                <View style={{ alignItems: 'center', marginTop: 16, marginBottom: 16 }}>
                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/vital.png')} />
                            <Text style={{
                                color: '#333333',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                lineHeight: 18,
                                letterSpacing: 0.005,
                                marginLeft: 40,
                                fontFamily: 'Helvetica Neue'

                            }}>POD Vital</Text>

                        </View>
                        <ButtonGroup
                            buttons={['Week', 'Month',]}
                            selectedIndex={selectedIndexVital}
                            onPress={(value) => {
                                setSelectedIndexVital(value);
                            }}
                            containerStyle={{ borderRadius: 8, width: 295, height: 32, marginLeft: 20 }}
                        />



                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <VictoryChart
                                width={300}
                                height={200}

                                theme={VictoryTheme.material}>
                                <VictoryLine
                                    style={{
                                        data: { stroke: "#c43a31" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 3 },
                                        { x: 3, y: 5 },
                                        { x: 4, y: 4 },
                                        { x: 5, y: 7 }
                                    ]}
                                />
                                <VictoryLine
                                    style={{
                                        data: { stroke: "#181818" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 4, y: 5 },
                                        { x: 3, y: 5 },
                                        { x: 6, y: 8 },
                                        { x: 5, y: 6 }
                                    ]}
                                />
                                 <VictoryLine
                                    style={{
                                        data: { stroke: "#188" },
                                        parent: { border: "1px solid #ccc" }
                                    }}
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 3, y: 7 },
                                        { x: 4, y: 6 },
                                        { x: 7, y: 9 },
                                        { x: 5, y: 6 }
                                    ]}
                                />
                            </VictoryChart>

                        </View>

                        <Text style={{ padding: 8 }}>05-11/01/2021 • 3:32 PM</Text>
                    </Card>
                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFBFC',
        padding: 12
    },
    chartcontainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center'


    },
    text: {
        fontSize: 36,
        fontFamily: 'HelveticaNeue Bold',
        lineHeight: 36,
        color: '#181818',

    },
    HeadContainer: {
        width: '100%',
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textOTP: {
        fontFamily: 'HelveticaNeue',
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: '700',
        color: '#181818',
        opacity: 0.8,
        textAlign: 'center',
        marginTop: 32,
        lineHeight: 36
    },
    textEnter: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 24,
        color: '#091F3A',
        opacity: 0.8,
        textAlign: 'center'
    },
    otpContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12
    },
    otpText: {
        width: 64,
        height: 64,
        textAlign: 'center',
        fontSize: 25,
        padding: 0,
        paddingHorizontal: 18,
        paddingVertical: 10,
        color: Colors.blue,
        fontWeight: 'bold',
        opacity: 0.8
    },
    otpBox: {
        borderRadius: 5,
        borderColor: Colors.blue,
        borderWidth: 1,
    },
    btnLuu: {
        backgroundColor: Colors.blue,
        height: 48,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        width: 328,
        marginLeft: 45,
        marginTop: 12
    },
    textLogin: {
        color: Colors.white,
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 24
    },
    cardHome: {
        width: 360,
        height: 140,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#6CB6DD',

    },
    cardDoctor: {
        width: 337,
        height: 340,
        display: 'flex',
        alignContent: 'center',
        borderRadius: 12,
        backgroundColor: '#FFFF',
        borderWidth: 1

    },
    cardDoctor2: {
        width: 360,
        height: 60,
        display: 'flex',
        alignContent: 'center',
        borderRadius: 12,
        backgroundColor: '#FAFBFC',
        borderWidth: 1

    }
});
export default DetailDoctorUric;