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
        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.primary }}>
            <LoadingModal show={indicator} />

            <View style={{ marginTop: RFPercentage(15), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                <Text style={{ fontWeight: '600', color: Colors.white, fontSize: RFPercentage(2.8), textAlign: 'center' }} >
                    Register
                </Text>
            </View>

            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Input field */}
                    <View style={{ marginTop: RFPercentage(12), justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? 0 : RFPercentage(1.5) }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={'#D0D0D0'}
                                    height={RFPercentage(8.5)}
                                    backgroundColor={Colors.inputFieldBackgroundColor}
                                    borderWidth={RFPercentage(0.2)}
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
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(15) }}>
                        <MyAppButton
                            title="Register"
                            padding={RFPercentage(2.5)}
                            onPress={() => handleSignup()}
                            backgroundColor={Colors.secondary}
                            color={Colors.white}
                            bold={true}
                            borderRadius={RFPercentage(1.5)}
                            width={"80%"}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(3.5), width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} >
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2), textAlign: 'center' }} >
                            Already a member?
                        </Text>
                        <TouchableOpacity activeOpacity={0.8} >
                            <Text style={{ marginLeft: RFPercentage(1.5), color: Colors.secondary, fontSize: RFPercentage(2), textAlign: 'center', opacity: 0.8 }} >
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

export default RegisterScreen;