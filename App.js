import React { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  
  const addGoalHandler = () => {
    console.log(enteredGoal);
  }
  
  return (
    <View style={styles.screen}>
     <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.input}                             onChangeText={goalInputHandler}> 
      </TextInput>
      <Button title="ADD"  onPress={addgoalHandler}/>
      </View>
    <View>
    </View>
  );
}

const styles = StyleSheet.create({
});
