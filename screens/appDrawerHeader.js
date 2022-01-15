import React from 'react';
import {Header} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage'


export default function appHeader({state, setState, page}) {

    const onDrawer = () => setState({
        ...state,
        page: 4
    })
    const onHome = () => setState({
        ...state,
        page: 0
    })

    async function logoutCurrentuser() {
        try {
            await AsyncStorage.removeItem("page","")
            await AsyncStorage.removeItem("page","")
            await AsyncStorage.setItem("page","")
            setState({
                ...state,
                page: 0
            })

        } catch (error) {}
    }

    return(state.page == 3 ? <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress:e=> setState({
        ...state,
        page: 2
    }), animationType
    : "slide"}}centerComponent = {{ text: 'Marketplace', style: { color: '#fff' } }}rightComponent = {{text: 'Logout', style: { color: '#fff' },onPress:logoutCurrentuser}}/>
        :
        <Header
        leftComponent={{ icon: 'menu', color: '#fff',onPress:e=>onDrawer()}}
        centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
        rightComponent={{text: 'Logout', style: { color: '#fff' },onPress:logoutCurrentuser}} 
        / >)}
