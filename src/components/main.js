import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('appdb.db')

import DrawerNavigation from './drawer/DrawerNavigation'

const Main = () => {
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS tkb (tkb_id INTEGER PRIMARY KEY AUTOINCREMENT, day_name TEXT, Ml1 TEXT, Ml2 TEXT, Ml3 TEXT, Ml4 TEXT, Ml5 TEXT, Al1 TEXT, Al2 TEXT, Al3 TEXT, Al4 TEXT, Al5 TEXT)',
                (txObj, result) => console.log('success'),
                (txObj, error) => console.log(error)
            )
        })
        db.transaction(tx => {
            tx.executeSql("INSERT INTO tkb (tkb_id, day_name, Ml1, Ml2, Ml3, Ml4, Ml5, Al1, Al2, Al3, Al4, Al5) VALUES ('1', 'Thứ Hai', '', '', '', '', '', '', '', '', '', ''), ('2', 'Thứ Ba', '', '', '', '', '', '', '', '', '', ''), ('3', 'Thứ Tư', '', '', '', '', '', '', '', '', '', ''), ('4', 'Thứ Năm', '', '', '', '', '', '', '', '', '', ''), ('5', 'Thứ Sáu', '', '', '', '', '', '', '', '', '', ''), ('6', 'Thứ Bảy', '', '', '', '', '', '', '', '', '', '')",
                (txObj, result) => console.log('success'),
                (txObj, error) => console.log('ĐÓ KHÔNG PHẢI LỖI ĐÓ LÀ TÍNH NĂNG')
            )
        })
    })

    return (
        <DrawerNavigation />
    )
}

export default Main