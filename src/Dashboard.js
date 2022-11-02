import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { firebase } from '../config'

const Dashboard = () => {
    const [name, setName] = useState([]);



    useEffect(() => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid).get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    setName(snapshot.data())
                }
                else {
                    console.log('user does not exist')
                }
            })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                welcome {name.firstName}
            </Text>
            <TouchableOpacity
                onPress={() => { firebase.auth().signOut() }}
                style={styles.button}
            >
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
                    Sign out
                </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    TextInput: {
        paddingTop: 20,
        paddingBottom: 10,
        width: 400,
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 10,
        textAlign: 'center'
    },


    button: {
        marginTop: 50,
        height: 70,
        width: 250,
        backgroundColor: '#026efd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,


    }




})