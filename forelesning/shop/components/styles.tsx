import { StyleSheet } from "react-native";

const productCardStyles = {
  maxWidth: 1200,
  backgroundColor: "white",
  borderRadius: 10,
  overflow: "hidden" as const,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  padding: 20,
};

const productTitleStyles = {
  fontWeight: "bold",
  fontSize: 18,
  marginBottom: 15,
  color: "#002266",
};

const productPriceStyles = {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
};

const productButtonStyles = {
  backgroundColor: "teal",
  padding: 12,
  borderRadius: 4,
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
};

const productImageStyles = {
  width: 200,
  height: 200,
  marginVertical: 15,
  borderWidth: 2,
  borderColor: "#002266",
};

export const productStyles = StyleSheet.create({
  card: productCardStyles,
  title: productTitleStyles,
  price: productPriceStyles,
  button: productButtonStyles,
  image: productImageStyles,
});
