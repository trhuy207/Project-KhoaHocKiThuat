import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'orange'
    },

    // Day Name Part
    dayNamePart: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardDayNamePart: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
    },

    dayNameTitle: {
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },

    // Lession Part
    lessionPart: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    lessionPartElevated: {
        elevation: 22
    },

    cardMorningPart: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
    },

    cardAfternoonPart: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
    },

    input: {
        padding:10,
        backgroundColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16
    },
})

export default styles