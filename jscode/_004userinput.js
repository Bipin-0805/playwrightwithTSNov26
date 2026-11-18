const prompt= require("prompt-sync")()

function userinput(){
   let username =  prompt("What is your name? ")
   console.log("Username is "+username)
   console.log(typeof username)
   let age= Number(prompt("Enter your age: "))
   console.log("User age is "+age)
   console.log(typeof age)
}

userinput()