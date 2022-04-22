import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function DashboardScreen(props) {

    return (
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.primary }}>

            <View style={{ marginTop: RFPercentage(20), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ fontWeight: '600', color: Colors.white, fontSize: RFPercentage(2.8), textAlign: 'center' }} >
                    Dashboard
                </Text>
                <Text style={{ marginTop: RFPercentage(1), color: Colors.white, fontSize: RFPercentage(2), textAlign: 'center', opacity: 0.8 }} >
                    Welcome back username!
                </Text>
            </View>

            {/* Button */}
            <View style={{ width: "100%", alignItems: "center", position: 'absolute', bottom: RFPercentage(7) }}>
                <MyAppButton
                    title="Logout"
                    padding={RFPercentage(2.5)}
                    backgroundColor={Colors.secondary}
                    color={Colors.white}
                    bold={true}
                    borderRadius={RFPercentage(1.5)}
                    width={"80%"}
                />
            </View>


        </Screen>
    );
}

export default DashboardScreen;