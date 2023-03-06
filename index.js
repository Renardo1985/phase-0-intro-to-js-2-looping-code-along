// Code your solutions in this file
//const aTest = ["Charlie", "Samip", "Ali"];

function writeCards(array,eventName)
{    
    const newarray = [];  
    for (let i = 0; i < array.length; i++)
    {    
       newarray[i] = (`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newarray;
}

function countDown(num){
    let count = num;
    while (count >= 0){
        console.log(count)
        count--;
    }
}
