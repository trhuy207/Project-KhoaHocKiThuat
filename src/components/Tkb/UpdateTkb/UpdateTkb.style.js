import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    // Save Button
    save: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    savePart: {
        width: "80%",
    },

    saveBtn: {
        backgroundColor: '#6EC72D',
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
    },

    saveBtnText: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
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
        marginBottom: 10,
    },

    dayNameTitle: {
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 1.25,
        color: '#1B98F5'
    },

    // Lession Part
    lessonPart: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    lessonPartElevated: {
        elevation: 22
    },

    cardTimeTitle: {
        width: "80%",
        marginBottom: 5
    },

    cardLessonTitle: {
        width: "80%",
        marginBottom: 2
    },

    timeTitle: {
        color: '#35BDD0',
        fontSize: 18,
        fontWeight: 'bold'
    },

    lessonTitle: {
        color: '#538FFB',
        fontSize: 16,
        fontStyle: 'italic'
    },

    cardMorningPart: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
        marginBottom: 5
    },

    cardAfternoonPart: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: "80%",
        marginBottom: 5
    },

    input: {
        padding:10,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1.25
    },
})

export default styles