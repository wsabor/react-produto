import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/react-logo.png")}
        ></Image>
        <Text style={styles.title}>Nome do Produto</Text>
        <Text style={styles.text}>
          Uma descrição detalhada do produto. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text style={styles.price}>Preço: R$ 199,90</Text>
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
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333",
    textAlign: "justify",
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 20,
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
