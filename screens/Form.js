import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Button,
    Alert
} from 'react-native';

import firebase from '../firebase';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';


export default function Form({state, setState, image}) {
    var [formdata, getFormData] = useState([])
    // const [select,setSelect] = useState({
    //     item1: "",
    //     item2: ""
    // })
    var current = "thab@gmail"
    function pushToDB() {

        Form["email"] = current
        Form["image"] = image == undefined ? "" : image
        firebase.firestore().collection("stock").add(Form)
        alert("Posted")
        return false

    }


    useEffect(() => {

        var close =  firebase.firestore().collection("stock").where("email", "==", current).onSnapshot(data =>{ setState({
            ...state,
            formdata: data.docs.map(userData => userData.data())
            
        }

        )}
        )

        return() => close()

    }, [])

   
    const pressME = () => setState({
        ...state,
        page: 3
    });


    var [Form, updateForm] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        condition: "",
        quantity: "",
        image: ""
    })


    function getText(key, value) {
        updateForm({
            ... Form,
            [key]: value
        })

    }
    function addItem() {
        if (Form.title.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return

        } else if (Form.description.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return

        } else if (Form.category.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return

        } else if (Form.price.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return

        } else if (Form.condition.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return
        } else if (Form.quantity.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return
        } else if (Form.image.trim() == "") {

            setState({
                ...state,
                err: "FIELD REQUIRED"
            });
            return
        } else {
            pushToDB()
            // setState({ ...state, title: [...state.title, Form], page:0 });

        }
    }

    return (

        <ScrollView>
            <View>
                <Text style={
                    {
                        fontSize: 20,
                        textAlign: "center",
                        padding: 10
                    }
                }>
                    Give us more info about your product
                </Text>

                <View style={
                    styles.screen
                }>
                    <View>
                        <Input placeholder='title'
                            errorStyle={
                                {color: 'red'}
                            }
                            //errorMessage={state.err}
                            leftIcon={
                                <Icon
                            name='bookmark'size={24}
                            color='black'/>
                            }
                            onChangeText={
                                e => getText("title", e)
                            }/>
                    </View>
                    <View>
                        <Input placeholder="description"
                            errorStyle={
                                {color: 'red'}
                            }
                            //errorMessage={state.err}
                            leftIcon={
                                <Icon
                            name='comment'size={24}
                            color='black'/>
                            }
                            onChangeText={
                                e => getText("description", e)
                            }/>
                    </View>
                    <View style={
                        styles.numbers
                    }>
                        

                        <Input placeholder="price"
                            errorStyle={
                                {color: 'red'}
                            }
                            //errorMessage={isNaN(Form.price)? 'ENTER A VALID price ' : state.err}
                            leftIcon={
                                <Icon
                            name='tags'size={24}
                            color='black'/>
                            }
                            onChangeText={
                                e => getText("price", e)
                            }/>
                            <Input placeholder="quantity" 
                            errorStyle={
                                {color: 'red'}
                            }
                            //errorMessage={isNaN(Form.quantity)? 'ENTER A VALID quantity' : state.err}
                            leftIcon={
                                <Icon
                            name='line-chart'size={24}
                            color='black'/>
                            }
                            onChangeText={
                                e => getText("quantity", e)
                            }/>
                    </View>
                
                    <View>
                        <DropDownPicker items={
                                [
                                    {
                                        label: 'New',
                                        value: 'New',
                                        icon: () => <Icon name="star"
                                            size={18}
                                            color="#900"/>,
                                        hidden: true
                                    }, {
                                        label: 'Used-New',
                                        value: 'Used-New',
                                        icon: () => <Icon name="star-half-o"
                                            size={18}
                                            color="#900"/>
                                    }, {
                                        label: 'Used-Fair',
                                        value: 'Used-Fair',
                                        icon: () => <Icon name="recycle"
                                            size={18}
                                            color="#900"/>
                                    },
                                ]
                            }
                            defaultValue={
                                Form.condition
                            }
                            placeholder="Condition"
                            containerStyle={
                                {height: 40}
                            }
                            style={
                                {backgroundColor: '#fafafa'}
                            }
                            itemStyle={
                                {justifyContent: 'flex-start'}
                            }
                            dropDownStyle={
                                {backgroundColor: '#fafafa'}
                            }
                            onChangeItem={
                                e => getText("condition", e.value)
                            }
                            onPress={
                                e => Alert("condition", e.value)
                            }/>
                    </View>
                    <View style={styles.moveMe}>
                    <View> 
                            <DropDownPicker items={
                                [
                                    {
                                        label: 'Vehicles',
                                        value: 'Vehicles'.toLowerCase(),
                                        icon: () => <Icon name="star"
                                            size={18}
                                            color="#900"/>,
                                        hidden: true
                                    }, {
                                        label: 'Property Rentals',
                                        value: 'Property Rentals'.toLowerCase(),
                                        icon: () => <Icon name="star-half-o"
                                            size={18}
                                            color="#900"/>
                                    }, {
                                        label: 'Apparel',
                                        value: 'Apparel'.toLowerCase(),
                                        icon: () => <Icon name="recycle"
                                            size={18}
                                            color="#900"/>
                                    },{
                                        label: 'Electronics',
                                        value: 'Electronics'.toLowerCase(),
                                        icon: () => <Icon name="recycle"
                                            size={18}
                                            color="#900"/>
                                    },{
                                        label: 'Office Supplies',
                                        value: 'Office Supplies'.toLowerCase(),
                                        icon: () => <Icon name="recycle"
                                            size={18}
                                            color="#900"/>
                                    }
                                ]
                            }
                            defaultValue={
                                Form.category
                            }
                            placeholder="Category"
                            containerStyle={
                                {height: 40}
                            }
                            style={
                                {backgroundColor: '#fafafa'}
                            }
                            itemStyle={
                                {justifyContent: 'flex-start'}
                            }
                            dropDownStyle={
                                {backgroundColor: '#fafafa'}
                            }
                            onChangeItem={
                                e => getText("category", e.value)
                            }/>
                    </View>
                    </View>
                </View>
                <View style={
                    styles.takemedown
                }>
                    <TouchableOpacity onPress={
                        // () => setState({
                        //     ...state,
                        //     page: 4
                        // })
                        pushToDB
                        //setState({...state,page:4})

                    }>
                        <Text style={
                            styles.infosell
                        }>Create New Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    takemedown: {
        marginTop: 115
    },
    infosell: {
        color: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 50,
        backgroundColor: '#116263',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10
    },
    moveMe:{
        marginTop:100,
    }
});
