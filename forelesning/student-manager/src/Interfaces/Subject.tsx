type Grade = "A" | "B" | "C" | "D" | "E" | "F"; // Union

export interface Subject {
    id: number;
    name: string;
    students: number[];
    grades: Grade[];
}