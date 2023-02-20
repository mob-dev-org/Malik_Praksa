import { Button, View } from "react-native"

function showMessage (){
    alert("this is message")//function will alert message
}

showMessage()//this will also alert same message, this is calling function


function message (name:string, message:string){
    alert(name + message)
}


message("maki", "how are you")//this two parameters will be sended to function message 

//we can also write this like 
const message2=(name:string, message:string)=>alert(name+message)

const app=()=>{
return(
    <View>
        <Button title="press" onPress={()=>message2()}/>
    </View>
)

}

