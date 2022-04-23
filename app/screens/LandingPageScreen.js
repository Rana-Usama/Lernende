import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';

//config
import Colors from '../config/Colors';

function LandingPageScreen(props) {

    const [activeButton, setActiveButton] = useState('1');

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.primary }}>
            {/* Top Image */}
            <Image style={{ alignSelf: 'center', width: '96%', height: RFPercentage(45), borderRadius: RFPercentage(2.6), overflow: 'hidden' }} source={require('../../assets/images/top.png')} />

            {/* Headings */}
            <View style={{ marginTop: RFPercentage(10), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ fontFamily: 'Rubik_700Bold', color: Colors.white, fontSize: RFPercentage(2.5), textAlign: 'center' }} >
                    Discover your Dream
                </Text>
                <Text style={{ fontFamily: 'Rubik_700Bold', marginTop: RFPercentage(1), fontWeight: '600', color: Colors.white, fontSize: RFPercentage(2.5), textAlign: 'center' }} >
                    job here
                </Text>
            </View>

            <View style={{ marginTop: RFPercentage(2.5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ color: Colors.white, fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2), textAlign: 'center', opacity: 0.8 }} >
                    Explore all the most exiting jobs roles
                </Text>
                <Text style={{ marginTop: RFPercentage(0.5), color: Colors.white, fontFamily: 'Rubik_400Regular', fontSize: RFPercentage(2), textAlign: 'center', opacity: 0.8 }} >
                    based on your interest And study major
                </Text>
            </View>

            {/* Buttons */}
            <View style={{ position: 'absolute', bottom: RFPercentage(10), overflow: 'hidden', width: RFPercentage(38), height: RFPercentage(7.5), backgroundColor: '#3C3C3C', borderRadius: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
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

export default LandingPageScreen;