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
import Header from './accountHeader';
import firebase from '../firebase';
import {TextInput} from 'react-native-paper';
import { PricingCard } from 'react-native-elements';

export default function Marketplace({state, setState}) {

    const [accounts, setsAccounts] = useState([])
    const [size, setSize] = useState("")


    useEffect(() => {

        var currentEmail = "olwethu@gmail.com";
        
        var itemQ = 0;
        var close = firebase.firestore().collection("stock").where("email", "==", currentEmail).onSnapshot(data => {
            setsAccounts(data.docs.map(item=>item.data()))
       })


        return() => close()
    }, [])


    return (
    <ScrollView>
    <Header state={state} setState={setState}/>
    {accounts.map(item=><PricingCard
        color="#4f9deb"
        title={item.title}
        price={"R"+ item.price}
        info={["Category: "+item.category,"Condition: " + item.condition,"Quantity: " + item.quantity]}
        button={{ title: 'Delete Post', icon: 'delete' }}
      />)}
    </ScrollView>
    )
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
