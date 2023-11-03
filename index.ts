import inquirer from "inquirer";
import {faker} from "@faker-js/faker"
import { ParseArgsConfig } from "util";
import chalk from 'chalk';
//Customer class
class Customer {
    firstName:string
    lastName:string
    age:number
    gender:string
    mobNumber:number
    accountNo:number
    constructor(fname:string,lName:string,age:number,gen:string,mob:number,acc:number){
        this.firstName=fname,
        this.lastName=lName,
        this.age=age
        this.gender=gen,
        this.mobNumber=mob
        this.accountNo=acc
    }
}
//Bank Interface
interface BankAccount {
    accNumber: number;
    balance: number;
}
//Bank Class
class Bank {
    customer: Customer[]=[];
    account:BankAccount[]=[];
    addCustomer(obj:Customer){
    this.customer.push(obj)
    }
   addAccountNumber(obj:BankAccount)
   {
    this.account.push(obj)
   }
   transection(accobj:BankAccount){
    let newAccountStatus =this.account.filter(acc=>acc.accNumber !== accobj.accNumber);
    this.account=[...newAccountStatus, accobj]
   }
}
let sindhBank = new Bank();

//customer create 
for(let i:number= 1; i<=3; i++ ){
    let fname =faker.person.firstName("male");
    let lName =faker.person.lastName();
    let num=parseInt(faker.phone.number('3#########') );
    const cus = new Customer(fname,lName,25 * i,"male",num,1000+i);
    sindhBank.addCustomer(cus);
    sindhBank.addAccountNumber({accNumber:cus.accountNo,balance:1000*i})
}

//Bank Functionality

async function bankServices(bank:Bank){
    let service= await inquirer.prompt({
        type:"list",
        name:"select",
        message:"Kindly select the service",
        choices:["View Balance","Cash Withdraw","Cash Deposite"]

})
//View Balance
if(service.select=="View Balance"){
    let res = await inquirer.prompt({
        type:"input",
        name:"num",
        message:"Please Enter Your Account Number"
    });
    let account = sindhBank.account.find((acc)=>acc.accNumber == res.num)
    if(!account){
        console.log(chalk.red.bold.italic("Invalid Account Number"))
    }
    if(account){
        let name = sindhBank.customer.find(
            (item)=> item.accountNo == account?.accNumber
        )
        console.log(`Dear! ${chalk.green.bold.italic(name?.firstName)} ${chalk.blue.bold.italic(name?.lastName)} Your account balance is: ${chalk.green.bold.italic(account.balance)} `)
    }

}
 //Cash Withdraw   
    if(service.select=="Cash Withdraw"){
        let res = await inquirer.prompt({
            type:"input",
            name:"num",
            message:"Please Enter Your Account Number"
        });
        let account = sindhBank.account.find((acc)=>acc.accNumber == res.num)
        if(!account){
            console.log(chalk.red.bold.italic("Invalid Account Number"))
        }
        if(account){
            let ans = await inquirer.prompt({
                type:"number",
                message:"Please Enter Your Amount",
                name:"rupee"
            });
            if(ans.rupee > account.balance){
                console.log("Insufficient funds")
            } ;  
             let newBalance = account.balance - ans.rupee

            //Trancsection
            bank.transection({accNumber:account.accNumber,balance:newBalance});
           
        }}
//Cash Deposite
if(service.select=="Cash Deposite"){
    let res = await inquirer.prompt({
        type:"input",
        name:"num",
        message:"Please Enter Your Account Number"
    });
    let account = sindhBank.account.find((acc)=>acc.accNumber == res.num)
    if(!account){
        console.log(chalk.red.bold.italic("Invalid Account Number"))
    }
    if(account){
        let ans = await inquirer.prompt({
            type:"number",
            message:"Please Enter Your Amount",
            name:"rupee"
        })
        let newBalance = account.balance + ans.rupee
        //Trancsection
        bank.transection({accNumber:account.accNumber,balance:newBalance});
        
    }
   
}}
bankServices(sindhBank)

