import React from "react";
import { FirstFormView } from "./component/firstScreen.view";
import { useFirstScreenHooks } from "./component/firstScreen.hooks";

export const FirstScreen = () => {
    const {
        emailId,
        password,
        onChangeEmailText,
        onChangePasswordText,
        isValidEmail,
        isValidPassword,
        onSavePress
    } = useFirstScreenHooks()

    return <FirstFormView
        emailId={emailId}
        password={password}
        onChangeEmailText={onChangeEmailText}
        onChangePasswordText={onChangePasswordText}
        isValidEmail={isValidEmail}
        isValidPassword={isValidPassword}
        onSavePress={onSavePress}
    />
}