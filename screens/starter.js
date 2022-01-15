import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity as Touch
} from 'react-native';
import {TextInput} from 'react-native-paper';
import StartImage from '../screens/img/sino.png'
import firebase from '../firebase'



export default function Starter({state, setState}) {
   
    const getStarted = () => setState({
        ...state,
        page: 2
    })
    return (
        <View>
        
            <Text style={
                {
                    fontSize: 30,
                    textAlign: "center",
                    padding: 10
                }
            }>Sinovalo
                <Text style={
                    {color: "red"}
                }>B2B</Text>
            </Text>

            <View style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                <Image source={StartImage}/>
            </View>
            <TextInput placeholder="Email"
                style={
                    {
                        backgroundColor: "white",
                        color: "black",
                        borderWidth: 0
                    }
                }/>
            <Touch style={
                    {
                        borderRadius: 20,
                        backgroundColor: "#78fff4",
                        height: 50,
                        marginTop: 10,
                        marginBottom: 10,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }
                onPress={getStarted}>
                <Text style={
                    {
                        color: "white",
                        fontSize: 20
                    }
                }>NEXT</Text>
            </Touch>
        </View>
    )
}
