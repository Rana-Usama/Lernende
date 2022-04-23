import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function SigninScreen(props) {

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Username",
            value: "",
        },
        {
            placeholder: "Password",
            value: "",
            secure: true
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleSignup = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

        try {
            // API INTEGRATION WILL COME HERE
        } catch (error) {
            alert("Error");
        }

        showIndicator(false);
    };

    return (
        <Screen style={styles.screen}>
            <LoadingModal show={indicator} />

            <View style={styles.headingContainer} >
                <Text style={styles.welcomeText} >
                    Welcome
                </Text>
                <Text style={styles.missedYouText} >
                    We’ve missed you!
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Input field */}
                    <View style={styles.inputFieldContainer}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(2) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={'#D0D0D0'}
                                    height={RFPercentage(8.5)}
                                    backgroundColor={Colors.inputFieldBackgroundColor}
                                    borderWidth={RFPercentage(0.2)}
                                    borderColor={Colors.inputFieldBackgroundColor}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1.3)}
                                    fontFamily={'Rubik_400Regular'}
                                    fontSize={RFPercentage(1.9)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    color={Colors.white}
                                    width={"85%"}
                                />
                            </View>
                        ))}
                    </View>

                    <View style={styles.resetPasswordContainer}  >
                        <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0, }}  >
                            <Text style={styles.resetPassText} >
                                Reset Password
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Signin Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(15) }}>
                        <MyAppButton
                            title="Login"
                            padding={RFPercentage(2.5)}
                            onPress={() => handleSignup()}
                            fontFamily={'Rubik_700Bold'}
                            backgroundColor={Colors.secondary}
                            color={Colors.white}
                            bold={true}
                            borderRadius={RFPercentage(1.5)}
                            width={"80%"}
                        />
                    </View>

                    <View style={styles.bottomTextLinesContainer} >
                        <Text style={styles.notAMemberText} >
                            Not a member?
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("RegisterScreen")} activeOpacity={0.8} >
                            <Text style={styles.registerNowText} >
                                Register now
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
    headingContainer: {
        marginTop: RFPercentage(15),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    welcomeText: {
        fontFamily: 'Rubik_700Bold',
        color: Colors.white,
        fontSize: RFPercentage(2.8),
        textAlign: 'center'
    },
    missedYouText: {
        fontFamily: 'Rubik_400Regular',
        marginTop: RFPercentage(1.5),
        color: Colors.white,
        fontSize: RFPercentage(2),
        textAlign: 'center',
        opacity: 0.8
    },
    inputFieldContainer: {
        marginTop: RFPercentage(12),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    resetPasswordContainer: {
        marginTop: RFPercentage(3),
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    resetPassText: {
        fontFamily: 'Rubik_400Regular',
        color: Colors.white,
        fontSize: RFPercentage(1.8),
        textAlign: 'center',
        opacity: 0.8
    },
    bottomTextLinesContainer: {
        flexDirection: 'row',
        marginTop: RFPercentage(3.5),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    notAMemberText: {
        fontFamily: 'Rubik_400Regular',
        color: Colors.white,
        fontSize: RFPercentage(1.9),
        textAlign: 'center'
    },
    registerNowText: {
        fontFamily: 'Rubik_400Regular',
        marginLeft: RFPercentage(1.5),
        color: Colors.secondary,
        fontSize: RFPercentage(1.9),
        textAlign: 'center',
        opacity: 0.8
    }
})

export default SigninScreen;