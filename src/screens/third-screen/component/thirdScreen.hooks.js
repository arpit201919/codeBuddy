import { useEffect, useState } from "react"
import { getNumericOnly } from "../../../utils/utils"
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useFirstScreenHooks = () => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [phoneNo, setPhoneNo] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [modalData, setModalData] = useState({})
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        setIsVisible(false)
        if (isFocused) {
            getData()
        }
    }, [isFocused])

    const getData = async () => {
        const savedData = await AsyncStorage.getItem('data')
        const parsedData = JSON.parse(savedData)
        setSelectedCountry(parsedData?.countryCode)
        setPhoneNo(parsedData?.phoneNumber)
    }


    const onChangeCountry = (item, index) => {
        setSelectedCountry(item)
    }

    const onChangePhoneText = (text) => {
        const onlyNumber = getNumericOnly(text)
        setPhoneNo(onlyNumber)
    }

    const onToggleCheckBox = (value) => {
        setToggleCheckBox(value)
    }

    const onBackPress = () => {
        navigation.goBack()
    }

    const onSavePress = async () => {
        const prevData = await AsyncStorage.getItem('data')
        if (toggleCheckBox) {
            const obj = {
                countryCode: selectedCountry,
                phoneNumber: phoneNo
            }

            const dataToSave = { ...JSON.parse(prevData), ...obj }
            setModalData(dataToSave)
            await AsyncStorage.setItem('data', JSON.stringify(dataToSave))
            setIsVisible(true)
        }
    }

    const onRequestClose = () => {
        setIsVisible(false)
    }

    return {
        selectedCountry,
        onChangeCountry,
        phoneNo,
        onChangePhoneText,
        toggleCheckBox,
        onToggleCheckBox,
        onSavePress,
        onBackPress,
        isVisible,
        modalData,
        onRequestClose
    }
}