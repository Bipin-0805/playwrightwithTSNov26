/*
decisionmaking statement allows program to execute the code depending on the specific condition
if-else  and switch case

if(condition){
   code inside if block
}else{
    code inside else block
    }
*/
const prompt= require("prompt-sync")()

function ifcondition(){
    let isRaining = prompt("Check if it is raining... true/false ")
    if (isRaining == 'true'){
        console.log("Continue to work from home..")
    }
}
function ifelsecondition(){
    let isRaining = prompt("Check if it is raining... true/false ")
    if (isRaining == 'true'){
        console.log("Continue to work from home..")
    }else{
        console.log("Go to office..")
    }
}

function nestedIfelse(){
    let age = Number(prompt("Enter your age.. "))

    if(age>=18){
        let drivingTeststatus = prompt("Have you cleared the driving test..yes/no")
        if(drivingTeststatus=="yes"){
            console.log("Congratulations!! you will get your license next week.")
        }else{
            console.log("Take Driving lessons and then take another test")
        }

    }else{
        console.log("Apply after you become 18 years old..")
    }
}

function ladderif(){
  let singalStatus = prompt("Check signal..")

  if(singalStatus=='red'){
    console.log("Stop")
  }else if(singalStatus=='yellow'){
      console.log("Ready to go")
  }else if(singalStatus=='green'){
    console.log("Go")
  }else{
    console.log("Cross Carefully")
  }

}


ladderif()

