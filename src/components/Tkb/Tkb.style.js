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

    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cardTitleText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#049dff'
    },

    cardBtn: {
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