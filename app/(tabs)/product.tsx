import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Nome do Produto</Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/react-logo.png")}
        ></Image>
        <Text style={styles.title}>Descrição</Text>
        <Text style={styles.title}>Preço</Text>
        {/* <View style={styles.inputGroup}>
          <Text style={styles.label}>Usuário:</Text>
          <TextInput style={styles.input} placeholder="Digite seu usuário" />
        </View> */}
        {/* <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        </View> */}
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity> */}
        {/* <Text style={styles.forgotPassword}>
          <Text style={styles.link}>Esqueci minha senha</Text>
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    padding: 30,
    width: 300,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  //   inputGroup: {
  //     marginBottom: 15,
  //     width: "100%",
  //   },
  //   label: {
  //     textAlign: "left",
  //     marginBottom: 5,
  //     color: "#555",
  //     width: "100%",
  //   },
  //   input: {
  //     width: "100%",
  //     padding: 10,
  //     borderWidth: 1,
  //     borderColor: "#ccc",
  //     borderRadius: 4,
  //     backgroundColor: "white",
  //     color: "#333",
  //   },
  //   button: {
  //     backgroundColor: "#007bff",
  //     color: "#fff",
  //     padding: 12,
  //     borderRadius: 4,
  //     alignItems: "center",
  //     width: "100%",
  //     marginTop: 10,
  //   },
  //   buttonText: {
  //     color: "#fff",
  //     fontSize: 16,
  //   },
  //   forgotPassword: {
  //     marginTop: 10,
  //   },
  //   link: {
  //     color: "#007bff",
  //     textDecorationLine: "none",
  //   },
});

export default LoginScreen;
