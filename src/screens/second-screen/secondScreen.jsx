import React from "react";
import { SecondFormView } from "./component/secondScreen.view";
import { useSecondScreenHooks } from "./component/secondScreen.hooks";

export const SecondScreen = () => {
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
    } = useSecondScreenHooks()

    return <SecondFormView
        firstName={firstName}
        lastName={lastName}
        address={address}
        isValidFirstName={isValidFirstName}
        isValidAddress={isValidAddress}
        onChangeFirstNameText={onChangeFirstNameText}
        onChangeLastNameText={onChangeLastNameText}
        onChangeAddressText={onChangeAddressText}
        onBackPress={onBackPress}
        onNextPress={onNextPress}
    />
}