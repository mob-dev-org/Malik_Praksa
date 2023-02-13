import { Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SubmitButton } from "./submit";
import { Text, View } from "./Themed";
import { useState } from 'react';


export default function EditScreenInfo() {
  const [text, setText] = useState<string>("");
  const [task, setTask] = useState([]);

  const submitText =()=>{
    task.push(text)
    setText("")
  }
  return (
    <View>
      <TextInput style={styles.input}
       defaultValue={text}
        placeholder="Enter some text"
        onChange={(e) => setText(e.nativeEvent.text)}/>
      <SubmitButton click={submitText}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  )}
const styles = StyleSheet.create({
  
  input:{
    height:30,
    width:250,
    backgroundColor:"white",
    borderRadius:10,
    paddingLeft:10,
    paddingRight:10,
  },
  text:{
    color:"white",
    fontSize:18,
    backgroundColor:"red",
    borderRadius:20,
    textAlign:"center",
    alignItems:"center",
    

    
  }
});
