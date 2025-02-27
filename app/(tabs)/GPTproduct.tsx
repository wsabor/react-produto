import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Produto = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/react-logo.png")}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Nome do Produto</Text>
      <Text style={styles.productDescription}>
        Uma descrição detalhada do produto. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Text>
      <Text style={styles.productPrice}>Preço: R$ 99,99</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#008000",
  },
});

export default Produto;
