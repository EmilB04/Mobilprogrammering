import { FlatList, StyleSheet, View } from "react-native";
import { ProductCard } from "./components/ProductCard";
import { Product } from "./types";
import { SafeAreaView } from "react-native";


const product: Product[] = [
  {
    id: "1",
    name: "Sample Product",
    price: 19.99,
    description: "This is a sample product description.",
  },
  {
    id: "2",
    name: "Another Product",
    price: 29.99,
    description: "This is another product description.",
  },
  {
    id: "3",
    name: "Third Product",
    price: 39.99,
    description: "This is the third product description.",
  }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        numColumns={2}
        contentContainerStyle={{ justifyContent: 'center' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
