import React from "react";
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Modal } from "react-native";
import { styles } from "./thirdScreen.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import CheckBox from "@react-native-community/checkbox";


export const FirstFormView = (props) => {
    const {
        selectedCountry,
        onChangeCountry,
        phoneNo,
        onChangePhoneText,
        toggleCheckBox,
        onToggleCheckBox,
        onBackPress,
        onSavePress,
        isVisible,
        modalData,
        onRequestClose
    } = props
    const backgroundImage = require('../../../assets/background.jpg')

    return (
        <ImageBackground source={backgroundImage} style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.viewStyle}>
                <View style={styles.view}>
                    <Picker style={styles.pickerStyle}
                        selectedValue={selectedCountry}
                        onValueChange={onChangeCountry}
                    >
                        <Picker.Item value={"+1"} label={"+1 America"} />
                        <Picker.Item value={"+91"} label={"+91 India"} />
                    </Picker>
                    <View style={styles.inputCont}>
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Phone Number"
                            value={phoneNo}
                            onChangeText={(text) => onChangePhoneText(text)}
                            maxLength={10}
                            keyboardType={"number-pad"}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <View style={styles.checkBoxCont}>
                            <CheckBox
                                value={toggleCheckBox}
                                onValueChange={(newValue) => onToggleCheckBox(newValue)}
                            />
                            <Text style={styles.tcText}>Accept terms and conditions</Text>
                        </View>
                        {!toggleCheckBox && <Text style={styles.errorText}>Please Accept Terms and Condition</Text>}
                    </View>


                    <TouchableOpacity onPress={() => onBackPress()} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSavePress(false)} style={styles.buttonCont}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onSavePress(true)} disabled={true} style={[styles.buttonCont, { backgroundColor: 'grey' }]}>
                        <Text style={styles.buttonText}>Save and Next</Text>
                    </TouchableOpacity>
                </View>
                <Modal transparent={true} visible={isVisible} animationType={"slide"}>
                    <TouchableOpacity onPress={() => onRequestClose()} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1, justifyContent: "center" }}>
                        <View style={{
                            backgroundColor: "#FFFFFF", height: 350,
                            marginHorizontal: 15,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <Text style={styles.textStyle}>Email-{modalData?.emailId}</Text>
                            <Text style={styles.textStyle}>Password-{modalData?.password}</Text>
                            <Text style={styles.textStyle}>First Name-{modalData?.firstName}</Text>
                            <Text style={styles.textStyle}>Address-{modalData?.address}</Text>
                            <Text style={styles.textStyle}>Country Code-{modalData?.emailId}</Text>
                            <Text style={styles.textStyle}>Phone Nummber-{modalData?.emailId}</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </KeyboardAwareScrollView>
        </ImageBackground >
    )
}