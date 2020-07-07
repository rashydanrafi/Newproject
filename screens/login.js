import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { Value } from "react-native-reanimated";
import * as firebase from "firebase";
import auth from "@react-native-firebase/auth";

export default function Home({ navigation }) {
  const [name, SetName] = useState(null);
  const [emails, SetEmails] = useState(null);
  const [pass, SetPass] = useState(null);

  //Function to signup user -- Takes the value of emails initialized on line 10 and pass initialized on line 11
  const signUpUser = () => {
    try {
      if (pass.length < 6) {
        alert("Please enter atleast 6 characters");
        return;
      }
      //emails and pass from state initialized from lines 10 & 11
      firebase.auth().createUserWithEmailAndPassword(emails, pass);
    } catch (error) {
      console.log(error.toString());
    }
  };

  const loginUser = () => {};

  const clickHandler = () => {
    SetName("chun-li");
  };

  const backHandler = () => {
    SetName(null);
  };

  const nextHandler = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text>TESTING FOR FIREBASE LA CEDAN PANDAI ---- ({name}) </Text>

      <View>
        <Text> Enter Your Fooking Email ey: </Text>
        <TextInput
          style={styles.emailss}
          multiline
          placeholder="alibaba@gmail.com"
          onChangeText={(val) => SetEmails(val)}
        />
      </View>

      <View>
        <Text> Enter Your Fooking Password ey: </Text>
        <TextInput
          style={styles.passwords}
          secureTextEntry
          placeholder="password123"
          onChangeText={(val) => SetPass(val)}
        />
      </View>

      {/* calls the function loginUser and signUpUser onPress  */}
      <Button title="LOGIN" onPress={loginUser} />
      <Button title="SIGNUP" onPress={signUpUser} />

      <View style={styles.nextpage}>
        <Button title="NextPage" onPress={nextHandler} />
      </View>

      <Text> Your Email is : ({emails})</Text>
      <Text> Your Password is : ({pass})</Text>
      <View style={styles.buttonContainer}>
        <Button title="Change Name" onPress={clickHandler} />
      </View>

      <View style={styles.backContainer}>
        <Button title="Back Name" onPress={backHandler} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  emailss: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },

  passwords: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },

  buttonContainer: {
    paddingTop: 30,
  },

  backContainer: {
    paddingTop: 30,
  },

  nextpage: {
    paddingTop: 30,
  },
});
