import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { api } from "@/server/api";
import { useState } from "react";
import { isAxiosError } from "axios";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  async function handleSignIn() {
    try {
      const response = await api.post("/user", {
        email,
        pass,
      });
      Alert.alert("Olá " + response.data.name);
    } catch (error) {
      if (isAxiosError(error)) {
        return Alert.alert(error.response?.data);
      }

      Alert.alert("Não foi possível entrar.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        secureTextEntry
        onChangeText={setPass}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.text}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    gap: 16,
  },
  input: {
    height: 54,
    width: "100%",
    backgroundColor: "#E3E3E3E3",
    borderRadius: 5,
    padding: 16,
  },
  button: {
    height: 54,
    width: "100%",
    backgroundColor: "#CECECE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
