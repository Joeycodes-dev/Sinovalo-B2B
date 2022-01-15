import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import Header from './marketplaceHeader';
import firebase from '../firebase';
import { PricingCard } from 'react-native-elements';


export default function Marketplace({state, setState}) {

    const [category, getCategory] = useState([])

    useEffect(() => {
        var close;

        if (state.currentItem == "all") {
            close = firebase.firestore().collection("stock").onSnapshot(data => {
                setState({
                    ...state,
                    category: data.docs.map(item => item.data())
                })

            })
        } else {
            close = firebase.firestore().collection("stock").where("category", "==", state.currentItem.toLowerCase()).onSnapshot(data => {
                setState({
                    ...state,
                    category: data.docs.map(item => item.data())
                })

            })
        }


        return() => close()
    }, [])


    return (<ScrollView>
        <Header state={state}
            setState={setState}/>
       {
            state.category.map((item,I) => (
                
               
                <View key={I} style={
                    styles.col1
                }>
                <PricingCard
               
                color="#4f9deb"
                title={item.title}
                price={"R"+ item.price}
                info={["Category: "+item.category,"Condition: " + item.condition,"Quantity: " + item.quantity]}
                button={{ title: 'BUY', icon: 'flight-takeoff',onPress:e=>setState({...state,page:6, itemOwner:item.email,currentCategory:item.category,currentDescription: item.description,currentPrice: item.price}) }}
              />

                </View>
           ))
        }



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
