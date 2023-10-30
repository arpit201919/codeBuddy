import React from "react";
import { FirstFormView } from "./component/thirdScreen.view";
import { useFirstScreenHooks } from "./component/thirdScreen.hooks";

export const ThirdScreen = () => {
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
    } = useFirstScreenHooks()

    return <FirstFormView
        selectedCountry={selectedCountry}
        onChangeCountry={onChangeCountry}
        phoneNo={phoneNo}
        onChangePhoneText={onChangePhoneText}
        toggleCheckBox={toggleCheckBox}
        onToggleCheckBox={onToggleCheckBox}
        onBackPress={onBackPress}
        onSavePress={onSavePress}
        isVisible={isVisible}
        modalData={modalData}
        onRequestClose={onRequestClose}
    />
}