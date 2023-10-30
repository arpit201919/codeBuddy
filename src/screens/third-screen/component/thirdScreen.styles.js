import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewStyle: {
        flexGrow: 1,
    },
    inputStyle: {
        backgroundColor: "#FFFFFF",
        height: 52,
        fontSize: 16,
        borderRadius: 8,
        paddingHorizontal: 10
    },
    pickerStyle: {
        backgroundColor: "#FFFFFF",
        height: 52,
        fontSize: 16,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    view: {
        flex: 1,
        justifyContent: "center",
        height: '100%',
        marginHorizontal: 15,
    },
    inputCont: {
        marginBottom: 20,
    },
    checkBoxCont: {
        height: 52,

        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 8
    },
    errorText: {
        color: '#D10000',
        fontWeight: '500',
        fontSize: 15,
        width: 370,
    },
    tcText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600"
    },
    buttonCont: {
        backgroundColor: '#8934eb',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '600'
    },
    textStyle: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "600"
    }
})