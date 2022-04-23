import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function DashboardScreen(props) {

    return (
        <Screen style={styles.screen}>

            <View style={styles.mainHeadingContainer} >
                <Text style={styles.dashboardText} >
                    Dashboard
                </Text>
                <Text style={styles.welcomeBackText} >
                    Welcome back username!
                </Text>
            </View>

            {/* Button */}
            <View style={styles.buttonContainer}>
                <MyAppButton
                    title="Logout"
                    onPress={() => props.navigation.navigate("LandingPageScreen")}
                    padding={RFPercentage(2.5)}
                    fontFamily={'Rubik_700Bold'}
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.primary
    },
    mainHeadingContainer: {
        marginTop: RFPercentage(20),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    dashboardText: {
        fontFamily: 'Rubik_700Bold',
        color: Colors.white,
        fontSize: RFPercentage(2.8),
        textAlign: 'center'
    },
    welcomeBackText: {
        fontFamily: 'Rubik_400Regular',
        marginTop: RFPercentage(1),
        color: Colors.white,
        fontSize: RFPercentage(2),
        textAlign: 'center',
        opacity: 0.8
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        position: 'absolute',
        bottom: RFPercentage(7)
    }
})

export default DashboardScreen;