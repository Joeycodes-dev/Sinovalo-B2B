import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Card from './Card';
import Form from './Form';
import base64 from 'react-native-base64';
import BackHeader from './backDrawerHeader';


export default function ImagePickerExample({state,setState}) {
    const [image, setImage] = useState(null);
    const [image64, setImage64] = useState(null);


    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);
 
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            // allowsMultipleSelection: true,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setImage64(result.base64)
        }
    };

    try {
      
    } catch (error) {
        
    }
    return (
        <ScrollView>
        <BackHeader state={state} setState={setState}/>
        <Text style={
            {
                fontSize: 30,
                textAlign: "center",
                padding: 10
            }
        }>
            What would you like to sell today?
        </Text>
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <Card>
                <View>
                    <TouchableOpacity onPress={pickImage}>
                        <View>
                            <Text style={styles.infobuy}>Add Photos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Card>
            {state.formdata>0?
                <Image source={{ uri:state.formdata[0]["image"]}} style={{ width: 200, height: 200 }} />:
                image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            }
            <Form image={image}  state={state}  setState={setState}/>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71"
    },
    ButText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center"
    },
    infobuy: {
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 30,
        padding: 20,
        backgroundColor: '#3dc2c4',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10
    }
});