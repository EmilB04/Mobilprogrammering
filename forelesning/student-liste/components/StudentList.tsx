import { FlatList, View, Pressable } from "react-native";
import { StudentCard } from "./StudentCard";
import StudentItem, { type Student } from "./StudentItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function StudentList({ students }: { students: Student[] }) {
  const insets = useSafeAreaInsets();

  const handleQuestionsPress = (studentId: number) => {
    console.log("Student ID:", studentId);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: insets.left,
      }}
    >
      <FlatList
        data={students}
        style={{ marginVertical: 20 }}
        contentContainerStyle={{ gap: 25 }}
        renderItem={({ item }) => (
          <StudentCard>
            <Pressable 
              onPress={() => handleQuestionsPress(item.id)}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.7 : 1,
                  transform: [{ scale: pressed ? 0.94 : 1 }],
                  transition: '200ms ease-out',
                  textDecorationLine: pressed ? 'underline' : 'none',
                }
              ]}
            >
              <StudentItem student={item} />
            </Pressable>
          </StudentCard>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
