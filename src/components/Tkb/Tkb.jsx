import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Row, Table, TableWrapper, Rows } from 'react-native-table-component';

import Icon from 'react-native-vector-icons/AntDesign'

import * as SQLite from 'expo-sqlite'

import styles from './Tkb.style';

const db = SQLite.openDatabase('appdb.db')

const generateBoxShadowStyle = (
    xOffset,
    yOffset,
    shadowColorIos,
    shadowOpacity,
    shadowRadius,
    elevation,
    shadowColorAndroid,
) => {
    if (Platform.OS === 'ios') {
        styles.cardElevated = {
            shadowColor: shadowColorIos,
            shadowOffset: {width: xOffset, height: yOffset},
            shadowOpacity,
            shadowRadius,
        };
    } else if (Platform.OS === 'android') {
        styles.cardElevated = {
            elevation,
            shadowColor: shadowColorAndroid,
        };
    }
};

generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');

const Tkb = ({ navigation }) => {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            db.transaction(tx => {
                tx.executeSql('SELECT * FROM tkb', null,
                    (txObj, resultSet) => setSchedule(resultSet.rows._array),
                );
            });
        });
        return focusHandler;
    }, [db])

    const showTkb = () => {
        return schedule.map((schedule) => {
            const date = [
                {
                    id: schedule.tkb_id,
                    column_name: ['Tiết', 'Sáng', 'Chiều'],
                    day_name: schedule.day_name,
                    rows: [
                        ['1', schedule.Ml1, schedule.Al1],
                        ['2', schedule.Ml2, schedule.Al2],
                        ['3', schedule.Ml3, schedule.Al3],
                        ['4', schedule.Ml4, schedule.Al4],
                        ['5', schedule.Ml5, schedule.Al5],
                    ]
                }
            ]
            
            return (
                <FlatList
                    data={date}
                    numColumns={1}
                    showsVerticalScrollIndicator={false}
                    decelerationRate='fast'
                    keyExtractor={i => i.id}
                    scrollEnabled={false}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.showListDate}>
                                <View style={[styles.card, styles.cardElevated]}>
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardTitle}>
                                            <Text style={styles.cardTitleText}>{item.day_name}</Text>

                                            <TouchableOpacity 
                                                style={styles.cardBtn}
                                                onPress={() => navigation.navigate('UpdateTkb', {
                                                    id: item.id
                                                })}
                                            >   
                                                <Icon name='edit' size={25} style={styles.cardBtnText}/>
                                                <Text style={styles.cardBtnText}>Chỉnh Sửa</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <Table borderStyle={{borderWidth:1,}}>
                                            <Row 
                                                data={item.column_name} 
                                                style={{
                                                    backgroundColor:'white',
                                                }} 
                                                height={40}
                                                flexArr={[0.5,1,1]}
                                                textStyle={{
                                                    textAlign: 'center',
                                                    fontSize: 14,
                                                    fontWeight: 'bold'
                                                }}
                                            />
                                            <TableWrapper style={{flexDirection: 'row'}}>
                                                <Rows 
                                                    data={item.rows} 
                                                    heightArr={[28, 28, 28, 28, 28]} 
                                                    flexArr={[0.5, 1, 1, 1, 1]} 
                                                    style={{
                                                        backgroundColor: 'white'
                                                    }}
                                                    textStyle={{
                                                        textAlign: 'center'
                                                    }}
                                                />
                                            </TableWrapper>
                                        </Table>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            );
        })
    }

    return (
        <View>
            <ScrollView>
                {showTkb()}
            </ScrollView>
        </View>
    )
}

export default Tkb