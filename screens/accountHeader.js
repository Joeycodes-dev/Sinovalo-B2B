import React from 'react';
import {Header} from 'react-native-elements';


export default function appHeader({state,setState}){

  
    return(
        <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:e=>setState({...state,page:4}), animationType:"slide"}}
        centerComponent={{ text: 'Account', style: { color: '#fff' } }} 
        />  
    )
}