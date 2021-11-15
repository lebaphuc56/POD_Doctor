import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Image, StatusBar, Text, View} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// Logo....

import Login from './LoginScreen';
import Tab from '../../navigation/Tab'

const SplashScreen = ({navigation}: {navigation: any}) => {
  // Going to Move Up like Nav Bar...
  const Head = () => {
    // SafeArea Value...
    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

    // Animating COntent...
    const contentTransition = useRef(
      new Animated.Value(Dimensions.get('window').height),
    ).current;

    // Animation Done....
    useEffect(() => {
      // Starting Animation after ....
      setTimeout(() => {
        // Parallel Animation...
        Animated.parallel([
          Animated.timing(startAnimation, {
            // For same Height for non safe Area Devices...
            toValue: -Dimensions.get('window').height + edges.top,
            useNativeDriver: true,
          }),
          Animated.timing(scaleLogo, {
            // Scaling to 0.35
            toValue: 0.5,
            useNativeDriver: true,
          }),
          Animated.timing(scaleTitle, {
            // Scaling to 0.8
            toValue: 0.8,
            useNativeDriver: true,
          }),
          Animated.timing(moveLogo, {
            // Moving to Right Most...
            toValue: {
              x: 0,
              // Since image size is 100...
              y: Dimensions.get('window').height / 1.63,
            },
            useNativeDriver: true,
          }),
          // Animated.timing(
          //     moveTitle,
          //     {
          //         // Moving to Right Most...
          //         toValue: {
          //             x: 0,
          //             // Since image size is 100...
          //             y: (Dimensions.get('window').height / 2) - 90
          //         },
          //         useNativeDriver: true
          //     }
          // ),
          Animated.timing(contentTransition, {
            toValue: 0,
            useNativeDriver: true,
          }),
        ]).start();
      }, 3000);
    }, []);
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            zIndex: 1,
            transform: [{translateY: startAnimation}],
          }}>
<Animated.View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animated.Image
               source={require('../../images/logo.png')}
              style={{
                width: 212,
                height: 111,
                marginBottom:70,
                transform: [
                  {translateX: moveLogo.x},
                  {translateY: moveLogo.y},
                  {scale: scaleLogo},
                ],
              }}></Animated.Image>

            {/* <Animated.Text style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: '#000',
                    
                      transform: [
                          { translateY: moveTitle.y },
                          { scale: scaleTitle }
                      ]
                  }}>Chatty</Animated.Text> */}
          </Animated.View>
        </Animated.View>

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,

            zIndex: 0,
            transform: [{translateY: contentTransition}],
          }}>
          <Login></Login>
        </Animated.View>
      </View>
    );
  };
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />

      <Head></Head>
    </SafeAreaProvider>
  );
};
export default SplashScreen;

