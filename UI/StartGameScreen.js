import { useState } from 'react';
import reactDom from 'react-dom';
import {TextInput, Text, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    function confirm(){
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber)|| chosenNumber <= 0){
            Alert.alert("NUmber invalida ", "hhhhhhh",
             [{text: "spoko",
              style: "destructive",
              onPress:{reset}
            }])
            return;
        }
    }
    function reset(){
        setEnteredNumber('')
    }
    function entered(number){
        setEnteredNumber(number)
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
                onChangeText={entered}
                value={enteredNumber}
            />
            <PrimaryButton style={styles.inputReset} onxx={reset} > ZRESETUJ </PrimaryButton>
            <PrimaryButton onxx={confirm}> POTWIERDŹ I WYŚLIJ </PrimaryButton>

        </View>
    )
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 200,
        marginHorizontal: 50,
        textAlign: 'center',
    },
    inputKlik:{
        marginTop: 20,
    },
    numberInput:{
        marginHorizontal: 40,
        backgroundColor: "rgba(255, 110, 185, 0.35)",
        borderRadius: 20,
        marginBottom: 7,
    }
})