import { Text, TextStyle } from "react-native";
import { productStyles } from "./styles";

interface ProductPriceProps {
  price?: number;
}

export default function ProductPrice({ price }: ProductPriceProps) {
  return (
    <Text style={productStyles.price as TextStyle}>
      {price ? `${price} kr` : "Produktpris"}
    </Text>
  );
}
