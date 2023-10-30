import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./secondScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SecondFormView = (props) => {
    const {
        firstName,
        onChangeFirstNameText,
        isValidFirstName,
        lastName,
        address,
        isValidAddress,
        onChangeLastNameText,
        onChangeAddressText,
        onBackPress,
        onNextPress
    } = props
    const backgroundImage = require('../../../assets/background.jpg')

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.viewStyle}>
                <View style={styles.view}>
                    <View style={styles.inputCont}>
                        <TextInput
                            placeholder="First Name"
                            style={styles.inputStyle}
                            value={firstName}
                            onChangeText={(text) => onChangeFirstNameText(text)}
                            keyboardType={"ascii-capable"}
                        />
                        {!isValidFirstName && <Text style={styles.errorText}>Minimum of 2 character and maximum 50.</Text>}
                    </View>
                    <View style={styles.inputCont}>
                        <TextInput
                            placeholder="Last Name"
                            style={styles.inputStyle}
                            value={lastName}
                            onChangeText={(text) => onChangeLastNameText(text)}
                        />
                    </View>
                    <View style={styles.inputCont}>
                        <TextInput
                            placeholder="Address"
                            style={styles.inputStyle}
                            value={address}
                            onChangeText={(text) => onChangeAddressText(text)}
                        />
                        {!isValidAddress && < Text style={styles.errorText}>Minimum length 10.</Text>}
                    </View>
                    <TouchableOpacity onPress={() => onBackPress()} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNextPress(false)} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onNextPress(true)} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Save and Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground >
    )
}