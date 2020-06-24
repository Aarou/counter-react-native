import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View>
      <View style={header.body}>
        <Text style={header.text}>Counter</Text>
      </View>
      <View style={numberView.body}>
        <Text style={numberView.text}>{count}</Text>
      </View>
      <Text style={button.body} onPress={() => {setCount(count + 1)}}>Increment</Text>
      <Text style={button.body} onPress={() => {setCount(0)}}>Restart</Text>
    </View>
  );
}

const header = StyleSheet.create({
  body: {
    backgroundColor: "#348feb",
    height: 100
  },
  text: {
    paddingTop: 50,
    paddingLeft: 20,
    fontWeight: "bold",
    color: "white",
    fontSize: 25
  }
})

const numberView = StyleSheet.create({
  body: {
    backgroundColor: "#348feb",
    marginTop: 100,
    height: 300,
  },
  text: {
    textAlign: "center",
    paddingTop: 30,
    color: "white",
    fontSize: 200
  }
})

const button = StyleSheet.create({
  body: {
    backgroundColor: "#348feb",
    width: 200,
    marginLeft: 110,
    marginTop: 50,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    color: "white",
    fontWeight: "bold"
  }
})

