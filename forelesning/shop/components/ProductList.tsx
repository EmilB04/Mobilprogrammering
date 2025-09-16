import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { ProductCard } from "./ProductCard";
import { Product } from "../types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}