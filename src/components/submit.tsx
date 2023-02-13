import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export function SubmitButton(props:any){
    return(
        <Pressable style={styles.submit} onPress={props.click}>
          <Text style={styles.text}> Submit</Text> 
            </Pressable>
    )
}
const styles = StyleSheet.create({
    submit:{
        height:40,
        width:140,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"rgba(255,255,255,0.1)",
        borderRadius:20,  
        marginTop:20,
        marginLeft:"15%"
    },
    text:{
        color:"white",
        fontWeight:"bold"
    }
})