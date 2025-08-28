import { useState, useEffect } from 'react'
import type { Student } from './Interfaces/Student'
import type { Subject } from './Interfaces/Subject'
import './App.css'

function App() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Lina" },
    { id: 6, name: "Eve" },
  ])

  const [subjects, setSubjects] = useState<Subject[]>([
    {
      id: 1,
      name: "Mathematics",
      students: [1, 2],
      grades: ["A", "B", "F", "A", "A", "A", "A"],
    },
    {
      id: 2,
      name: "English",
      students: [2],
      grades: ["A"],
    },
    {
      id: 3,
      name: "History",
      students: [1, 3],
      grades: [],
    },
    {
      id: 4,
      name: "Biology",
      students: [1, 2, 3, 4, 5, 6],
      grades: [],
    },
  ])

  const [newStudentName, setNewStudentName] = useState('')
  const [newSubjectName, setNewSubjectName] = useState('')
  const [gradeDistribution, setGradeDistribution] = useState('')

  const addStudent = (name: string) => {
    if (name.trim()) {
      const newStudent: Student = {
        id: Math.max(...students.map(s => s.id)) + 1,
        name: name.trim()
      }
      setStudents([...students, newStudent])
      setNewStudentName('')
    }
  }

  const addSubject = (name: string) => {
    if (name.trim()) {
      const newSubject: Subject = {
        id: Math.max(...subjects.map(s => s.id)) + 1,
        name: name.trim(),
        students: [],
        grades: []
      }
      setSubjects([...subjects, newSubject])
      setNewSubjectName('')
    }
  }

  const getGradeDistribution = (subjects: Subject[]) => {
    const gradeNumbers = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0,
      F: 0,
    }

    for (const subject of subjects) {
      for (const grade of subject.grades) {
        gradeNumbers[grade]++
      }
    }

    return (
      `Grade Distribution:\n` +
      Object.entries(gradeNumbers)
        .map(([grade, count]) => `  ${grade}: ${count}`)
        .join('\n')
    )
  }

  useEffect(() => {
    setGradeDistribution(getGradeDistribution(subjects))
  }, [subjects])

  return (
    <>
      <div className="container">
        <h1>Student Manager</h1>
        
        <div className="section">
          <h2>Students</h2>
            <div className="input-group">
            <input
              type="text"
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="Enter student name"
              onKeyDown={(e) => e.key === 'Enter' && addStudent(newStudentName)}
            />
            <button onClick={() => addStudent(newStudentName)}>Add Student</button>
            </div>
          <ul className="list">
            {students.map(student => (
              <li key={student.id}>
                {student.id}: {student.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Subjects</h2>
          <div className="input-group">
            <input
              type="text"
              value={newSubjectName}
              onChange={(e) => setNewSubjectName(e.target.value)}
              placeholder="Enter subject name"
              onKeyDown={(e) => e.key === 'Enter' && addSubject(newSubjectName)}
            />
            <button onClick={() => addSubject(newSubjectName)}>Add Subject</button>
          </div>
          <ul className="list">
            {subjects.map(subject => (
              <li key={subject.id}>
                <strong>{subject.name}</strong>
                <br />
                Students: {subject.students.length > 0 
                  ? subject.students.map(studentId => 
                      students.find(s => s.id === studentId)?.name
                    ).join(', ')
                  : 'None'
                }
                <br />
                Grades: {subject.grades.length > 0 ? subject.grades.join(', ') : 'None'}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Grade Distribution</h2>
          <pre className="grade-distribution">{gradeDistribution}</pre>
        </div>
      </div>
    </>
  )
}

export default App
