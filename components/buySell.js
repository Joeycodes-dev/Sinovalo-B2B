import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity as Touch
} from 'react-native';
import {Header} from 'react-native-elements';




export default function BuySell({state, setState}) {

    const onBuy = () => setState({
        ...state,
        page: 5
    })
    const onSell = () => setState({
        ...state,
        page: 3
    })
    return (
        <View>
        <Header
    
        centerComponent={{ text: 'Sinovalo B2B', style: { color: '#fff' } }}
        
        />        
            <View style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }>
                <Text style={
                    {
                        fontSize: 30,
                        textAlign: "center",
                        padding: 10
                    }
                }>
                    What would you like to do today?
                </Text>
            </View>
            <View>
                <Touch onPress={onBuy}>
                    <Text style={styles.infobuy}>
                        BUY
                    </Text>
                </Touch>
            </View>
            <View>
                <Touch onPress={onSell}>
                    <Text style={styles.infosell}>
                        SELL
                    </Text>
                </Touch>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    infobuy: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 50,
        padding: 50,
        backgroundColor: '#3dc2c4',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10
    },
    infosell: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 50,
        padding: 50,
        backgroundColor: '#116263',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10
    }
})
