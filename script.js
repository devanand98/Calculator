//Function for adding
function add(array){
   const totalSum= array.reduce((sum,number)=>{
        return sum + number;
    },0);
    console.log(totalSum);
    return totalSum; 
};
//Function for subtracting
function subtract(array){
    const totalDifference = array.reduce((diff,number)=>{
        return diff-number;
    });
    console.log(totalDifference);
    return totalDifference;
}
//Function for multiplication
function multiply(array){
    const totalProduct = array.reduce((product,number)=>{
        return product*number;
    });
    console.log(totalProduct);
    return totalProduct;
}
//Function for Division
function divide(array){
    const totalDivision = array.reduce((divided,number)=>{
        return divided/number;
    })
    console.log(totalDivision);
    return totalDivision;
}

//Initialize array using prompt
let arr = prompt("Enter your numbers").split(",")
const array=arr.map(function(item) {
        return parseInt(item, 10);
    });
//Create Operate Function
function operate(operator,array){
    
    if (operator== add) {
        return add(array); 
    }
    else if (operator==subtract){
        return subtract(array);
    }
    else if (operator == multiply){
        return multiply(array);
    }
    else if (operator == divide){
        return divide(array);
    }
}

operate(divide,array);




