import { Text, TextStyle } from "react-native";
import { productStyles } from "./styles";

interface ProductNameProps {
  name?: string;
}

export default function ProductName({ name }: ProductNameProps) {
  return <Text style={productStyles.title as TextStyle}>{name || "Produktnavn"}</Text>;
}
