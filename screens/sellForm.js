import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import Header from './appDrawerHeader';


export default function Content2({state, setState}) {

    return (
        <ScrollView>
            <Header/>
            <View style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>

                <Text style={
                    {
                        fontSize: 30,
                        textAlign: "center",
                        padding: 10
                    }
                }>
                    What would you like to sell today?
                </Text>
            </View>
        </ScrollView>
    )

}


const styles = StyleSheet.create({
    bannner: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // colView: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     padding: 5
    // },
    // col1: {
    //     flex: 1,
    //     padding: 5
    // },
    // col2: {
    //     flex: 1.5,
    //     padding: 5
    // }
})
