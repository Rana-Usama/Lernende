import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from '../components/Screen';
import InputField from './../components/common/InputField';
import LoadingModal from './../components/common/LoadingModal';
import MyAppButton from './../components/common/MyAppButton';

//config
import Colors from '../config/Colors';

function RegisterScreen(props) {

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
        {
            placeholder: "Confirm Password",
            value: "",
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

        if (tempfeilds[0].value === "" || tempfeilds[1].value === "" || tempfeilds[2].value === "") {
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

            <View style={styles.mainHeadingContainer} >
                <Text style={styles.registerText} >
                    Register
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/*First Two Row Input fields */}
                    <View style={styles.firstTwoFieldsContainer} >
                        <View style={styles.inputFOne}>
                            <TextInput placeholder='Name' placeholderTextColor={"#D0D0D0"} style={{ fontFamily: 'Rubik_400Regular', marginLeft: RFPercentage(2), width: '100%', color: Colors.white, fontSize: RFPercentage(1.9) }} />
                        </View>
                        <View style={styles.inputFTwo} >
                            <TextInput placeholder='Surname' placeholderTextColor={"#D0D0D0"} style={{ fontFamily: 'Rubik_400Regular', marginLeft: RFPercentage(2), width: '100%', color: Colors.white, fontSize: RFPercentage(1.9) }} />
                        </View>
                    </View>

                    {/* Input field */}
                    <View style={styles.mainInputFieldsContainer}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(2.5) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={'#D0D0D0'}
                                    height={RFPercentage(8.5)}
                                    backgroundColor={Colors.inputFieldBackgroundColor}
                                    borderWidth={RFPercentage(0.2)}
                                    fontFamily={'Rubik_400Regular'}
                                    borderColor={Colors.inputFieldBackgroundColor}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1.3)}
                                    fontSize={RFPercentage(1.9)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    color={Colors.white}
                                    width={"85%"}
                                />
                            </View>
                        ))}
                    </View>

                    {/* Register Button */}
                    <View style={styles.buttonContainer}>
                        <MyAppButton
                            title="Register"
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

                    <View style={styles.bottomTextContainer} >
                        <Text style={styles.alreadyMemberText} >
                            Already a member?
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SigninScreen")} activeOpacity={0.8} >
                            <Text style={styles.signInText} >
                                Sign in
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
    mainHeadingContainer: {
        marginTop: RFPercentage(14),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    registerText: {
        fontFamily: 'Rubik_700Bold',
        color: Colors.white,
        fontSize: RFPercentage(2.8),
        textAlign: 'center'
    },
    firstTwoFieldsContainer: {
        marginTop: RFPercentage(5),
        width: '80%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputFOne: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '48%',
        height: RFPercentage(8),
        backgroundColor: Colors.inputFieldBackgroundColor,
        borderColor: Colors.inputFieldBackgroundColor,
        borderWidth: RFPercentage(0.2),
        borderRadius: RFPercentage(1.3)
    },
    inputFTwo: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        width: '48%',
        height: RFPercentage(8),
        backgroundColor: Colors.inputFieldBackgroundColor,
        borderColor: Colors.inputFieldBackgroundColor,
        borderWidth: RFPercentage(0.2),
        borderRadius: RFPercentage(1.3)
    },
    mainInputFieldsContainer: {
        marginTop: RFPercentage(2.5),
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: RFPercentage(12)
    },
    bottomTextContainer: {
        flexDirection: 'row',
        marginTop: RFPercentage(3.5),
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    alreadyMemberText: {
        fontFamily: 'Rubik_400Regular',
        color: Colors.white,
        fontSize: RFPercentage(2),
        textAlign: 'center'
    },
    signInText: {
        fontFamily: 'Rubik_400Regular',
        marginLeft: RFPercentage(1.5),
        color: Colors.secondary,
        fontSize: RFPercentage(2),
        textAlign: 'center',
        opacity: 0.8
    }
})

export default RegisterScreen;