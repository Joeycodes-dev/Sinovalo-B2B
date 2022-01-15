import React, {useState, useEffect} from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StatusBar
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import firebase from '../firebase';
import Header from './loginHeader';
import AsyncStorage from '@react-native-community/async-storage'


const SigninScreen = ({state, setState}) => { // const { signIn } = React.useContext(AuthContext);

    var [Form, updateForm] = useState({username: "", password: ""})
    function changePage() {
        setState({
            ...state,
            page: 2
        })
    }
    function getText(key, value) {
        updateForm({
            ...Form,
            [key]: value
        })
      
    }
    async function addPage(){
        await AsyncStorage.setItem("page","2")
       }
    const loginHandle = (username, password) => {

        firebase.firestore().collection("users").where("email", "==", username).where("password", "==", password).limit(1).get().then(user => {
            if (user.empty) {
                firebase.firestore().collection("users").add({email: username, password: password})
                addPage()

                setState({...state,current_user:username,page:2})
            } else {
                alert("you already have an account")
            }
        })

    }

    return (<View style={
        styles.container
    }>
        <StatusBar backgroundColor="#009387" barStyle="light-content"/>
        <Header state={state} setState={setState}/>
        <View style={
            styles.header
        }>
            
        </View>

        <Animatable.View animation="fadeInUpBig"
            style={
                styles.footer
        }>
            <Text style={
                styles.text_footer
            }>Username</Text>
            <View style={
                styles.action
            }>
                <FontAwesome name="user-o" color="#05375a"
                    size={20}/>
                <TextInput placeholder="username"
                    style={
                        styles.textInput
                    }
                    autoCapitalize="none"
                    onChangeText={
                        e => getText("username", e)
                    }/>
            </View>

            <Text style={
                [
                    styles.text_footer, {
                        marginTop: 35
                    }
                ]
            }>Password</Text>
            <View style={
                styles.action
            }>
                <FontAwesome name="lock" color="#05375a"
                    size={20}/>
                <TextInput placeholder="Password"
                    style={
                        styles.textInput
                    }
                    autoCapitalize="none"
                    onChangeText={
                        e => getText("password", e)
                    }/>

            </View>

            <View style={
                styles.button
            }>
                <TouchableOpacity onPress={
                        () => {
                            loginHandle(Form.username, Form.password);
                        }
                    }
                    style={
                        [
                            styles.signIn, {
                                backgroundColor: "#1E90FF",
                                marginTop: 90
                            },
                        ]
                }>
                    <Text style={
                        [
                            styles.textSign, {
                                color: "#fff"
                            },
                        ]
                    }>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                
            </View>
        </Animatable.View>
    </View>);
};

export default SigninScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: "#F4F6F6",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: "#EC7063",
        fontWeight: "bold",
        fontSize: 30
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: "#05375a"
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    }
});
