import { useEffect, useState } from "react"
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { getAlphabetOnly } from "../../../utils/utils"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useSecondScreenHooks = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [isValidAddress, setIsValidAddress] = useState(true)
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
        setFirstName(parsedData?.firstName)
        setLastName(parsedData?.lastName)
        setAddress(parsedData?.address)
    }

    const onChangeFirstNameText = (text) => {
        const alpabetText = getAlphabetOnly(text)
        setFirstName(alpabetText)
        if (alpabetText.length === 0 || alpabetText.length > 50) {
            setIsValidFirstName(false)
        } else if (alpabetText.length > 1) {
            setIsValidFirstName(true)
        }
    }

    const onChangeLastNameText = (text) => {
        const alpabetText = getAlphabetOnly(text)
        setLastName(alpabetText)
    }

    const onChangeAddressText = (text) => {
        setAddress(text)
        if (text.length < 10) {
            setIsValidAddress(false)
        } else {
            setIsValidAddress(true)
        }
    }

    const onNextPress = async (isFromSaveAndNext) => {
        onChangeFirstNameText(firstName)
        onChangeAddressText(address)
        const obj = {
            firstName: firstName,
            lastName: lastName,
            address: address
        }
        const prevData = await AsyncStorage.getItem('data')
        const dataToSave = { ...JSON.parse(prevData), ...obj }
        await AsyncStorage.setItem('data', JSON.stringify(dataToSave))
        if (isFromSaveAndNext && isValidFirstName && isValidAddress && firstName !== '' && address !== '') {
            navigation.navigate('ThirdScreen')
        }
    }

    const onBackPress = () => {
        navigation.goBack()
    }

    return {
        firstName,
        onChangeFirstNameText,
        isValidFirstName,
        lastName,
        address,
        isValidAddress,
        onChangeLastNameText,
        onChangeAddressText,
        onBackPress,
        onNextPress,
    }
}