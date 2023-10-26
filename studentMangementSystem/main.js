class School {
    name;
    students = [];
    teachers = [];
    addstudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeachers(techObj) {
        this.teachers.push(techObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let school1 = new School("Alpha");
let school2 = new School("City");
//DATA OF TEACHERS
let t1 = new Teacher("Bilal", 40, school1.name);
let t2 = new Teacher("Ali", 33, school2.name);
// DATA OF STUDENTS
let s1 = new Student("Faraz", 24, school1.name);
let s2 = new Student("Sana", 22, school1.name);
let s3 = new Student("Maria", 26, school2.name);
let s4 = new Student("Safa", 27, school2.name);
//--Add Student
school1.addstudent(s1);
school1.addstudent(s2);
school2.addstudent(s3);
school2.addstudent(s4);
//--Ad Teacher
school1.addTeachers(t1);
school2.addTeachers(t2);
console.log(school1);
console.log(school2);
export {};
