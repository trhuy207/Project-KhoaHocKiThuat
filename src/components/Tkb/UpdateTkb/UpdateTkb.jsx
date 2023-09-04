import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'

import Icon from 'react-native-vector-icons/AntDesign'

import * as SQLite from 'expo-sqlite'

import styles from './UpdateTkb.style'

const db = SQLite.openDatabase('appdb.db')

const UpdateTkb = ({ navigation, route}) => {
    const [currentMl1, setCurrentMl1] = useState('');
    const [currentMl2, setCurrentMl2] = useState('');
    const [currentMl3, setCurrentMl3] = useState('');
    const [currentMl4, setCurrentMl4] = useState('');
    const [currentMl5, setCurrentMl5] = useState('');

    const [currentAl1, setcurrentAl1] = useState('');
    const [currentAl2, setcurrentAl2] = useState('');
    const [currentAl3, setcurrentAl3] = useState('');
    const [currentAl4, setcurrentAl4] = useState('');
    const [currentAl5, setcurrentAl5] = useState('');

    const [currentDayName, setCurrentDayName] = useState('');

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM tkb WHERE tkb_id = ?', [route.params.id],
                (txObj, results) => {
                    setCurrentDayName(results.rows.item(0).day_name)

                    setCurrentMl1(results.rows.item(0).Ml1)
                    setCurrentMl2(results.rows.item(0).Ml2)
                    setCurrentMl3(results.rows.item(0).Ml3)
                    setCurrentMl4(results.rows.item(0).Ml4)
                    setCurrentMl5(results.rows.item(0).Ml5)
                    
                    setcurrentAl1(results.rows.item(0).Al1)
                    setcurrentAl2(results.rows.item(0).Al2)
                    setcurrentAl3(results.rows.item(0).Al3)
                    setcurrentAl4(results.rows.item(0).Al4)
                    setcurrentAl5(results.rows.item(0).Al5)
                },  
                (txObj, error) => console.log(error)
            );
        });
    }, [db])

    const saveTkb = () => {
        db.transaction(tx => {
            tx.executeSql('UPDATE tkb SET Ml1 = ?, Ml2 = ?, Ml3 = ?, Ml4 = ?, Ml5 = ?, Al1 = ?, Al2 = ?, Al3 = ?, Al4 = ?, Al5 = ? WHERE tkb_id = ?', [currentMl1, currentMl2, currentMl3, currentMl4, currentMl5, currentAl1, currentAl2, currentAl3, currentAl4, currentAl5, route.params.id],
                (txObj, result) => Alert.alert('Message', 'Successful', [
                    {text: 'OK!', onPress: () => navigation.navigate('Tkb')}
                ]),
                (txObj, error) => Alert.alert('Error', error, [
                    {text: 'OK!', onPress: () => {}}
                ])
            );
        });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.savePart}>
                    <TouchableOpacity 
                        style={styles.saveBtn}
                        onPress={saveTkb}
                    >
                        <Text style={styles.saveBtnText}>Lưu</Text>
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={styles.bodyPart}>
                    {/* Day Name */}
                    <View style={styles.dayNamePart}>
                        <Text style={styles.dayNameTitle}>{currentDayName}</Text>
                    </View>

                    {/* Morning Part */}
                    <View style={[styles.morningPart, styles.morningPartElevated]}>
                        <View style={styles.morningPartBody}>
                            <Text style={styles.morningPartTitle}>Buổi Sáng</Text>
                            <Text style={styles.morningPartText}>Tiết 1</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setCurrentMl1}
                                value={currentMl1}
                                style={styles.input}
                            />
                            <Text style={styles.morningPartText}>Tiết 2</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setCurrentMl2}
                                value={currentMl2}
                                style={styles.input}
                            />
                            <Text style={styles.morningPartText}>Tiết 3</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setCurrentMl3}
                                value={currentMl3}
                                style={styles.input}
                            />
                            <Text style={styles.morningPartText}>Tiết 4</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setCurrentMl4}
                                value={currentMl4}
                                style={styles.input}
                            />
                            <Text style={styles.morningPartText}>Tiết 5</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setCurrentMl5}
                                value={currentMl5}
                                style={styles.input}
                            />
                        </View>
                    </View>

                    {/* Afternoon Part */}
                    <View style={[styles.afternoonPart, styles.afternoonPartElevated]}>
                        <View style={styles.afternoonPartBody}>
                            <Text style={styles.afternoonPartTitle}>Buổi Chiều</Text>
                            <Text style={styles.afternoonPartText}>Tiết 1</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setcurrentAl1}
                                value={currentAl1}
                                style={styles.input}
                            />
                            <Text style={styles.afternoonPartText}>Tiết 2</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setcurrentAl2}
                                value={currentAl2}
                                style={styles.input}
                            />
                            <Text style={styles.afternoonPartText}>Tiết 3</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setcurrentAl3}
                                value={currentAl3}
                                style={styles.input}
                            />
                            <Text style={styles.afternoonPartText}>Tiết 4</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setcurrentAl4}
                                value={currentAl4}
                                style={styles.input}
                            />
                            <Text style={styles.afternoonPartText}>Tiết 5</Text>
                            <TextInput 
                                editable
                                numberOfLines={1}
                                maxLength={50}
                                onChangeText={setcurrentAl5}
                                value={currentAl5}
                                style={styles.input}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateTkb