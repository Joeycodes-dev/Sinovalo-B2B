import React from 'react';
import {Header, Icon} from 'react-native-elements';


export default function appHeader({state,setState,page}){

    const onDrawer = () => setState({
        ...state,
        page: 1
    })
    const onHome = () => setState({
        ...state,
        page: 0
    })
    return(


        state.page==3?
        <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:e=>setState({...state,page:2}), animationType:"slide"}}
        centerComponent={{ text: 'Marketplace', style: { color: '#fff' } }}
        rightComponent={{text: 'Logout', style: { color: '#fff' },onPress:onHome}} 
        />
        :
        <Header
        leftComponent={{ icon: 'menu', color: '#fff',onPress:e=>onDrawer()}}
        centerComponent={{ text: 'Categories', style: { color: '#fff' } }}
        rightComponent={{text: 'Logout', style: { color: '#fff' },onPress:onHome}} 
        />
    )
}