import React from 'react';
import {Header} from 'react-native-elements';


export default function backHeader({state,setState}){

    const onDrawer = () => setState({
        ...state,
        page: 2
    })
    
    return(
        state.page==7?
            <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:e=>setState({...state,page:4})}}
            centerComponent={{ text: 'Sell', style: { color: '#fff' } }}
            //rightComponent={{ icon: 'home', color: '#fff',onPress:onHome}} 
            />
            :
            <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:e=>onDrawer()}}
            centerComponent={{ text: 'App Drawer', style: { color: '#fff' } }}
            //rightComponent={{ icon: 'home', color: '#fff',onPress:onHome}} 
            />
    )
}