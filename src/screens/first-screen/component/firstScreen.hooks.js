import { useEffect, useState } from "react"
import { isEmailValid, isPasswordValid } from "../../../utils/utils"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused, useNavigation } from '@react-navigation/native';

export const useFirstScreenHooks = () => {
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) {
            getData()
        }
    }, [isFocused])

    const getData = async () => {
        const savedData = await AsyncStorage.getItem('data')
        const parsedData = JSON.parse(savedData)
        setEmailId(parsedData?.emailId)
        setPassword(parsedData?.password)
    }

    const onChangeEmailText = (emailText) => {
        setEmailId(emailText)
        if (emailText.length === 0) {
            setIsValidEmail(false)
        } else if (!isEmailValid(emailText)) {
            setIsValidEmail(false)
        } else {
            setIsValidEmail(true)
        }
    }

    const onChangePasswordText = (passwordText) => {
        setPassword(passwordText)
        if (passwordText.length === 0) {
            setIsValidPassword(false)
        } else if (!isPasswordValid(passwordText)) {
            setIsValidPassword(false)
        } else {
            setIsValidPassword(true)
        }
    }

    const onSavePress = async (isFromSaveAndNext) => {
        onChangeEmailText(emailId)
        onChangePasswordText(password)
        const obj = {
            emailId: emailId,
            password: password
        }
        const prevData = await AsyncStorage.getItem('data')
        const dataToSave = { ...JSON.parse(prevData), ...obj }
        await AsyncStorage.setItem('data', JSON.stringify(dataToSave))
        if (isFromSaveAndNext && isValidEmail && isValidPassword && emailId !== '' && password !== '') {
            navigation.navigate('SecondScreen')
        }
    }

    return {
        emailId,
        password,
        onChangeEmailText,
        onChangePasswordText,
        isValidEmail,
        isValidPassword,
        onSavePress
    }
}