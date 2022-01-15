import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import BackHeader from './backDrawerHeader';
import Card from './card2';


export default function appDrawer({state, setState}) {


    return (
        <ScrollView>
            <BackHeader state={state}
                setState={setState}/>
            <Card>
                <View>
                    <View>
                        <TouchableOpacity onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem:"all"
                            })
                        }>
                            <Text style={
                                styles.infosell
                            }>Browse All</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={
                            () => setState({
                                ...state,
                                page: 7
                            })
                        }>
                            <Text style={
                                styles.infosell
                            }>Sell</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity onPress={
                            () => setState({
                                ...state,
                                page: 5
                            })
                        }>
                            <Text style={
                                styles.infosell
                            }>Account</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Card>
                <Text style={
                    {
                        fontSize: 30,
                        padding: 10
                    }
                }>
                    Categories
                </Text>  

    <Card>
            <View>
                <TouchableOpacity onPress={
                    () => setState({
                        ...state,
                        page: 3,
                        currentItem:"vehicles"
                    })
                }>
                    <Text style={
                        styles.infoselltoo
                    }>Vehicles</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={
                    () => setState({
                        ...state,
                        page: 3,
                        currentItem:"Property Rentals"
                    })
                }>
                    <Text style={
                        styles.infoselltoo
                    }>Property Rentals</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={
                    () => setState({
                        ...state,
                        page: 3,
                        currentItem:"Apparel"
                    })
                }>
                    <Text style={
                        styles.infoselltoo
                    }>Apparel</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={
                    () => setState({
                        ...state,
                        page: 3,
                        currentItem:"Electronics"
                    })
                }>
                    <Text style={
                        styles.infoselltoo
                    }>Electronics</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={
                    () => setState({
                        ...state,
                        page: 3,
                        currentItem:"Office supplies"
                    })
                }>
                    <Text style={
                        styles.infoselltoo
                    }>Office supplies</Text>
                </TouchableOpacity>
            </View>
        </Card>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    takemedown: {
        marginTop: 100
    },
    infosell: {
        flex: 1,
        color: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#2fa8e0',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
    },
    infoselltoo: {
        flex: 1,
        color: 'white',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#659fba',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
    },
});
