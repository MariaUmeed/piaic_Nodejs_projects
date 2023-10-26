import inquirer from "inquirer";

//
class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:string[]=[];
    addStudent(obj:Student){
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart =async (persons:Person) => {
console.log("Welcome Guest")

const ans = await inquirer.prompt({
 type:"list",
 name:"select",
 choices:["Teacher","Other Students" ],
 message:"Ap kis se bat kerna pasand kary ge..."
})
if(ans.select == "Teacher"){
    console.log("How can I help you?");
    const techques = await inquirer.prompt({
        type:"list",
        name:"teacherOption",
        choices:["About Class", "About Home Work","About Assignment"],
        message:"Please Select the option"
    })

    if (techques.teacherOption=="About Class"){
        console.log("What Is Your Class?")
    };
    if(techques.teacherOption =="About Home Work" ){
        let homework = ["Sci:Q1 from Chap:5",["Eng:Q5 from Chap:2"]]
        console.log(`Today Home Work Is Here: \n ${homework}`)
    };
    if(techques.teacherOption == "About Assignment"){
        console.log("Your assignment is here: \n Science Project from Chapter5 and question number 2")
    };} 

if(ans.select == "Other Students" ){
    console.log("Hey budy, What you want to ask me")
    const stuques = await inquirer.prompt({
        type:"list",
        name:"StudentOption",
        choices:["About Class", "About Home Work","About Assignment"],
        message:"Please Select the option"
    })
  
    if (stuques.StudentOption=="About Class"){
        console.log("What Is Your Class?")
    };
    if(stuques.StudentOption =="About Home Work" ){
        let homework = ["Sci:Q1 from Chap:5",["Eng:Q5 from Chap:2"]]
        console.log(`Today Home Work Is Here: \n ${homework}`)
    };
    if(stuques.StudentOption == "About Assignment"){
        console.log("We got Science Project from Chapter 5 and question number 2")
    };}};

programStart(persons);
