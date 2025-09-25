import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../styles";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>

      <View style={styles.counterButtons}>
        <TouchableOpacity
          style={[styles.counterBtn, { backgroundColor: "#4caf50" }]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.counterBtnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.counterBtn, { backgroundColor: "#f44336" }]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.counterBtnText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterScreen;
