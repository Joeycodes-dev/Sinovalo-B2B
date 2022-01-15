import React from 'react';
import {Header} from 'react-native-elements';


export default function backHeader({state,setState}){

    return(
            <Header
            leftComponent={{ icon: 'arrow-back', color: '#fff',onPress:e=>setState({...state,page:0})}}
            centerComponent={{ text: 'Sign Up', style: { color: '#fff' } }}
            />
    )
}