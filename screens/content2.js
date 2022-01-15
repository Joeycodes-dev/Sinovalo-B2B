import React, {useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import Header from './appDrawerHeader';
import AsyncStorage from '@react-native-community/async-storage'


export default function Content2({state, setState}) {
    useEffect(() => {
         
        async function getPage(){
          await AsyncStorage.setItem("page","2")
          

        }

        getPage()
      
    }, [])
    return (<ScrollView>
        <Header state={state}
            setState={setState}/>
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
                What would you like to buy today?
            </Text>
        </View>
        <View>
            <View>
                <Card>
                    <Card.Title>Vehicles</Card.Title>
                    <Card.Divider/>
                    <Image source={
                            require('./img/vehivles.jpg')
                        }
                        style={
                            styles.bannner
                        }/>
                    <Text style={
                        {marginBottom: 10}
                    }>
                        Get all your business's Vehicle needs from one place.
                    </Text>
                    <Button icon={
                            <Icon
                        name='code'
                        color='#ffffff'/>
                        }
                        buttonStyle={
                            {
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }
                        }
                        onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem: "vehicles"
                            })
                        }
                        title='VIEW MORE'/>
                </Card>
            </View>

            <View>
                <Card>
                    <Card.Title>Property Rentals</Card.Title>
                    <Card.Divider/>
                    <Image source={
                            require('./img/download.jpg')
                        }
                        style={
                            styles.bannner
                        }/>
                    <Text style={
                        {marginBottom: 10}
                    }>
                        Get all your Office space needs from one place.
                    </Text>
                    <Button icon={
                            <Icon
                        name='code'
                        color='#ffffff'/>
                        }
                        buttonStyle={
                            {
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }
                        }
                        onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem: "Property Rentals"
                            })
                        }
                        title='VIEW MORE'/>
                </Card>
            </View>
            <View>
                <Card>
                    <Card.Title>Apparel</Card.Title>
                    <Card.Divider/>
                    <Image source={
                            require('./img/download4.jpg')
                        }
                        style={
                            styles.bannner
                        }/>
                    <Text style={
                        {marginBottom: 10}
                    }>
                        Get all your business's uniform and apparel needs.
                    </Text>
                    <Button icon={
                            <Icon
                        name='code'
                        color='#ffffff'/>
                        }
                        buttonStyle={
                            {
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }
                        }
                        onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem: "Apparel"
                            })
                        }
                        title='VIEW MORE'/>
                </Card>
            </View>
            <View>
                <Card>
                    <Card.Title>Electronics</Card.Title>
                    <Card.Divider/>
                    <Image source={
                            require('./img/download6.jpg')
                        }
                        style={
                            styles.bannner
                        }/>
                    <Text style={
                        {marginBottom: 10}
                    }>
                        Get all your business's IT and Electronic needs.
                    </Text>
                    <Button icon={
                            <Icon
                        name='code'
                        color='#ffffff'/>
                        }
                        buttonStyle={
                            {
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }
                        }
                        onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem: "Electronics"
                            })
                        }
                        title='VIEW MORE'/>
                </Card>
            </View>
            <View>
                <Card>
                    <Card.Title>Office Supplies</Card.Title>
                    <Card.Divider/>
                    <Image source={
                            require('./img/office.jpg')
                        }
                        style={
                            styles.bannner
                        }/>
                    <Text style={
                        {marginBottom: 10}
                    }>
                        Get all your business's Office supply needs.
                    </Text>
                    <Button icon={
                            <Icon
                        name='code'
                        color='#ffffff'/>
                        }
                        buttonStyle={
                            {
                                borderRadius: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: 0
                            }
                        }
                        onPress={
                            () => setState({
                                ...state,
                                page: 3,
                                currentItem: "Office supplies"
                            })
                        }
                        title='VIEW MORE'/>
                </Card>
            </View>
        </View>
    </ScrollView>)

}


const styles = StyleSheet.create({
    bannner: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
