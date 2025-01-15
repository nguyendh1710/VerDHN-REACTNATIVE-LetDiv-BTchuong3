import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { styles } from "./Input.style";
  
export default function Input({value,onChangeText,placeholder}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
