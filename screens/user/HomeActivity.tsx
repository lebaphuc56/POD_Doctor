import React, { useRef, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from "react-native";
import { Card } from "react-native-paper";
import ToolBarHome from "../../components/UI/ToobarHome";
import Colors from "../../constants/Colors";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { ButtonGroup } from "react-native-elements";
import { datammHg, barData,lineData,lineData2,lineData3 } from "../../data/datammHg";
const HomeActivity = ({ navigation }: { navigation: any }) => {

    const screenWidth = Dimensions.get("window").width;
    const [inputShown, setInputShown] = useState<boolean>(false);
    const [inputShown2, setInputShown2] = useState<boolean>(false);

    const [selectedIndexECG, setSelectedIndexECG] = useState(0);
    const [selectedIndexCholestrol, setSelectedIndexCholestrol] = useState(0);
    const [selectedIndexVital, setSelectedIndexVital] = useState(0);

   


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
                                }}>Please add your health devices. </Text>
                            </View>

                            <View>
                                <Image style={{}} source={require('../../images/illus.png')} />
                            </View>
                        </View>


                    </Card>
                </View>

                <View style={{ display: inputShown == false ? 'flex' : 'none', alignItems: 'center', }}>

                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/Iconic.png')} />
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>Easy Doctor Uric Acid</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setInputShown(true);
                                }}>

                                <Image style={{}} source={require('../../images/fi_plus.png')} />
                            </TouchableOpacity>
                        </View>
                    </Card>

                </View>

                <View style={{ display: inputShown == true ? 'flex' : 'none' }}

                >
                    <View style={{ alignItems: 'center', }}>
                        <Card style={styles.cardDoctorDetail}>
                            <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => setInputShown(false)}
                                >
                                    <Image style={{}} source={require('../../images/Iconic.png')} />
                                </TouchableOpacity>
                                <Text style={{
                                    color: '#333333',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 18,
                                    letterSpacing: 0.005,
                                    marginLeft: 40,
                                    fontFamily: 'Helvetica Neue'

                                }}>Easy Doctor Uric Acid</Text>

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

                                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 12 }}>
                                    <BarChart
                                        width={260}
                                        height={150}
                                        barWidth={8}
                                        noOfSections={3}
                                        barBorderRadius={4}
                                        frontColor="lightgray"
                                        data={barData}
                                        yAxisThickness={0}
                                        xAxisThickness={0}
                                      
                                    />

                                </View>
                            </View>
                            <Text style={{ padding: 8 }}>05/06/2021</Text>
                        </Card>
                    </View>

                </View>

                <View style={{ alignItems: 'center', marginTop: 16 }}>

                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/heart.png')} />
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>Easy Doctor ECG</Text>

                            <Image style={{}} source={require('../../images/fi_plus.png')} />

                        </View>
                    </Card>

                </View>

                <View style={{ alignItems: 'center', padding:8 }}>

                    <Card style={styles.cardDoctor}>
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
                <View style={{ alignItems: 'center', padding:8 }}>

                    <Card style={styles.cardDoctor}>
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
                <View style={{ alignItems: 'center',padding:8 }}>

                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>
                            <Image style={{}} source={require('../../images/cholestrol.png')} />
                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>Easy Doctor Cholestrol</Text>

                            <Image style={{}} source={require('../../images/fi_plus.png')} />

                        </View>
                    </Card>

                </View>

                <View style={{ display: inputShown2 == false ? 'flex' : 'none', alignItems: 'center' ,padding:8}}>

                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>


                            <Image style={{}} source={require('../../images/vital.png')} />


                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>POD Vital</Text>

                            <TouchableOpacity
                                onPress={() => {
                                    setInputShown2(true);
                                }}>

                                <Image style={{}} source={require('../../images/fi_plus.png')} />
                            </TouchableOpacity>

                        </View>
                    </Card>

                </View>

                <View
                    style={{ display: inputShown2 == true ? 'flex' : 'none' }}
                >

                    <View style={{ alignItems: 'center', marginTop: 16,  }}>
                        <Card style={styles.cardDoctorDetail}>
                            <View style={{ flexDirection: 'row', padding: 8, alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => setInputShown2(false)}
                                >
                                    <Image style={{}} source={require('../../images/vital.png')} />
                                </TouchableOpacity>
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
                                <LineChart
                                    data={lineData}
                                    data2={lineData2}
                                    data3={lineData3}
                                    width={100}
                                    height={180}
                                    showVerticalLines
                                    spacing={44}
                                    initialSpacing={0}
                                    color1="skyblue"
                                    color2="orange"
                                    color3="black"
                                    textColor1="green"
                                    dataPointsColor1="blue"
                                    dataPointsColor2="red"
                                    dataPointsColor3="black"
                                    textFontSize={3}
                                    noOfSections={3}
                                    maxValue={200}
                                    
                                   
                                />

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,padding: 8}}>

                                <Text style={{
                                    color: '#333333',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 18,
                                    letterSpacing: 0.005,
                                    padding: 8,
                                    fontFamily: 'Helvetica Neue'

                                }}>DIA</Text>
                                <Text style={{
                                    color: '#333333',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 18,
                                    letterSpacing: 0.005,
                                    padding: 8,
                                    fontFamily: 'Helvetica Neue'

                                }}>SYS</Text>
                                <Text style={{
                                    color: '#333333',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    lineHeight: 18,
                                    letterSpacing: 0.005,
                                    padding: 8,
                                    fontFamily: 'Helvetica Neue'

                                }}>DIA</Text>
                            </View>
                        </Card>
                    </View>
                </View>
                <View style={{ alignItems: 'center', padding:8}}>

                    <Card style={styles.cardDoctor}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8, alignItems: 'center' }}>

                            <Image style={{}} source={require('../../images/spo2.png')} />

                            <Text style={{
                                color: '#091F3A',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: 24,
                                letterSpacing: 0.005

                            }}>POD SPO2</Text>

                            <Image style={{}} source={require('../../images/fi_plus.png')} />

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
        height: 100,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#6CB6DD',

    },
    cardDoctor: {
        width: 360,
        height: 60,
        alignContent: 'center',
        borderRadius: 12,
        
        elevation:8,
        backgroundColor:'#ffffff'
    },
    cardDoctorDetail: {
        width: 350,
        height: 350,
        alignContent: 'center',
        borderRadius: 12,
        elevation:16,
        display: 'flex',
        shadowColor:'#8DC6E4'
        

    },
});
export default HomeActivity;