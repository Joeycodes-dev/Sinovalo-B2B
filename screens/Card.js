//Creating a custom card like the one in bootstrap
import React from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";

export default function Card(props) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
            <View style={styles.scard}>
                <View style={styles.cardContent}>
                    {props.children /*this takes what ever is nested in card and outputs it here dynamical, and this card can be used anywhere*/}
                </View>
            </View>
            {/* <View>
                <Form />
            </View> */}
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
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})