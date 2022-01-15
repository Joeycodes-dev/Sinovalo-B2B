
import React from "react";
import { StyleSheet, View } from "react-native";


export default function Card(props) {
    return (
        <View>
            <View style={styles.scard}>
                <View style={styles.cardContent}>
                    {props.children}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    scard: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#f3f3f3",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        //justifyContent: "center",
        //alignItems: "center"
    },
    cardContent: {
        
        marginHorizontal: 18,
        marginVertical: 10,
    }
})