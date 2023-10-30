import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./firstScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const FirstFormView = (props) => {
    const {
        emailId,
        password,
        onChangeEmailText,
        onChangePasswordText,
        isValidEmail,
        isValidPassword,
        onSavePress
    } = props
    const backgroundImage = require('../../../assets/background.jpg')

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.viewStyle}>
                <View style={styles.view}>
                    <View style={styles.inputCont}>
                        <TextInput
                            placeholder="Email"
                            style={styles.inputStyle}
                            value={emailId}
                            onChangeText={(text) => onChangeEmailText(text)}
                        />
                        {!isValidEmail && <Text style={styles.errorText}>Must be a valid email ID</Text>}
                    </View>
                    <View style={styles.inputCont}>
                        <TextInput
                            placeholder="Password"
                            style={styles.inputStyle}
                            value={password}
                            onChangeText={(text) => onChangePasswordText(text)}
                        />
                        {!isValidPassword && < Text style={styles.errorText}>Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.</Text>}
                    </View>
                    <TouchableOpacity disabled={true} style={[styles.buttonCont, { backgroundColor: 'grey' }]}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSavePress(false)} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSavePress(true)} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Save and Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground >
    )
}