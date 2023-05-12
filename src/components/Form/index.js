import { useState } from "react";
import React  from "react";
import { View ,TextInput,  Text , TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc/index";
import styles from "./style";


export default function Form(){

const [height , setHeight]= useState(null)
const [weight, setweight]= useState(null) 
const [messageImc,setmessageImc]= useState("preencha o peso e altura") 
const [imc,setImc]= useState(null) 
const [TextButton, setTextButton]= useState('Calcular') 

function ImcCalculator(){
    return setImc((weight/(height * height)).toFixed(2))
}

function validatorImc(){
    if(weight != null && height != null){
        ImcCalculator()
        setHeight(null)
        setweight(null)
        setmessageImc("seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setmessageImc("preencha o peso e altura")
}




    return(
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="EX. 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={setweight}
                value={weight}
                placeholder="EX. 75,365"
                keyboardType="numeric"
                />
               <TouchableOpacity
               style={styles.buttonCalculator}
               onPress={() => {validatorImc()}}
               >
                <Text style={styles.TextbuttonCalculator}>{TextButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}