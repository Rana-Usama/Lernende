import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function LandingPageScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    return (
        <Screen style={styles.screen}>
            {/* Top Image */}
            <Image style={styles.topImage} source={require('../../assets/images/top.png')} />

            {/* Headings */}
            <View style={styles.h1Container} >
                <Text style={styles.mainHeading1} >
                    Discover your Dream
                </Text>
                <Text style={styles.mainHeading2} >
                    job here
                </Text>
            </View>

            <View style={styles.h2Container} >
                <Text style={styles.subHeading1} >
                    Explore all the most exiting jobs roles
                </Text>
                <Text style={styles.subHeading2} >
                    based on your interest And study major
                </Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonsContainer} >
                <TouchableOpacity onPress={() => [setActiveButton('1'), props.navigation.navigate("SigninScreen")]} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(19), height: RFPercentage(7.5), backgroundColor: activeButton == '1' ? Colors.secondary : '#3C3C3C', borderRadius: RFPercentage(2) }} >
                    <Text style={{ fontFamily: 'Rubik_700Bold', color: Colors.white, fontSize: RFPercentage(2) }} >
                        Sign in
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => [setActiveButton('2'), props.navigation.navigate("RegisterScreen")]} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(19), height: RFPercentage(7.5), backgroundColor: activeButton == '2' ? Colors.secondary : '#3C3C3C', borderRadius: RFPercentage(2) }} >
                    <Text style={{ fontFamily: 'Rubik_700Bold', color: Colors.white, fontSize: RFPercentage(2) }} >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    topImage: {
        alignSelf: 'center',
        width: '96%',
        height: RFPercentage(45),
        borderRadius: RFPercentage(2.6),
        overflow: 'hidden'
    },
    h1Container: {
        marginTop: RFPercentage(10),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    mainHeading1: {
        fontFamily: 'Rubik_700Bold',
        color: Colors.white,
        fontSize: RFPercentage(2.5),
        textAlign: 'center'
    },
    mainHeading2: {
        fontFamily: 'Rubik_700Bold',
        marginTop: RFPercentage(0.7),
        fontWeight: '600',
        color: Colors.white,
        fontSize: RFPercentage(2.5),
        textAlign: 'center'
    },
    h2Container: {
        marginTop: RFPercentage(2.5),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    subHeading1: {
        color: Colors.white,
        fontFamily: 'Rubik_400Regular',
        fontSize: RFPercentage(2),
        textAlign: 'center',
        opacity: 0.8
    },
    subHeading2: {
        marginTop: RFPercentage(0.5),
        color: Colors.white,
        fontFamily: 'Rubik_400Regular',
        fontSize: RFPercentage(2),
        textAlign: 'center',
        opacity: 0.8
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: RFPercentage(10),
        overflow: 'hidden',
        width: RFPercentage(38),
        height: RFPercentage(7.5),
        backgroundColor: '#3C3C3C',
        borderRadius: RFPercentage(2),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})

export default LandingPageScreen;