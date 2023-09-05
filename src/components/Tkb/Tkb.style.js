import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    showListDate: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
        marginBottom: 10,
    },

    cardElevated: {
        elevation: 22
    },

    cardBody: {

    },

    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cardTitleText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#06adfd'
    },

    cardBtn: {
        borderWidth: 0.75,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        backgroundColor: '#049dff'
    },

    cardBtnText: {
        padding: 3,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default styles