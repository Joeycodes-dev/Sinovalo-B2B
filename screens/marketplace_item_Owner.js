import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Button
} from 'react-native';
import Header from './backDrawerHeaderOwner';
import firebase from '../firebase';
import {TextInput} from 'react-native-paper';


export default function Marketplace({state, setState}) {

    const [quantity, getQuantity] = useState({item: 0})
    const [size, setSize] = useState("")


    useEffect(() => {


        var itemQ = 0;
        var close = firebase.firestore().collection("stock").where("category", "==", state.currentCategory).onSnapshot(data => {
            data.forEach(item => {
                itemQ += parseInt(item.data()["quantity"])
            })

            firebase.firestore().collection("quantity").onSnapshot(item => {
                var current = item.docs.map(d => d.data())

                if (current.length > 0) {
                    var value = current[0][state.currentCategory]
                    getQuantity({
                        item: itemQ - parseInt(value)
                    })

                }
            })


        })


        return() => close()
    }, [])

    function buyItem() {

        firebase.firestore().collection("quantity").get().then(e => {
            e.forEach(item => {
                var id = item.id
                firebase.firestore().collection("quantity").doc(id).update({[state.currentCategory]: size})

            })
        })

    }

    return (<ScrollView>
        <Header state={state}
            setState={setState}/>
        <View styles={
            styles.content
        }>

            <View style={
                styles.col2
            }>
            <Text style={{fontSize: 30,
                textAlign: "center",
                padding: 10}}
                >Category : {
                state.currentCategory
            } </Text>
                <Text style={{fontSize: 30,
                    textAlign: "center",
                    padding: 10}}
                    >Quantity Left : {
                    quantity.item
                } </Text>
                <Text style={{fontSize: 30,
                    textAlign: "center",
                    padding: 10}}
                    >Price : {
                    state.currentPrice
                } </Text>
               <Text style={{fontSize: 30,
                textAlign: "center",
                padding: 10}}>Description : 
               {state.currentDescription}
               </Text>
               <Text style={{fontSize: 30,
                textAlign: "center",
                padding: 10}}
                >Uploaded by : {
                state.itemOwner
            } </Text>
            </View>
            {

            parseInt(quantity.item) <= 0 ? <View></View> : <View>
                <TextInput onChangeText={
                    e => setSize(e)
                }/>
                <Button onPress={buyItem}
                    title="buy"></Button>
            </View>
        } </View>

    </ScrollView>)
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    col1: {
        flex: 1,
        padding: 5
    },
    col2: {
        flex: 1.5,
        padding: 5
    }
})
