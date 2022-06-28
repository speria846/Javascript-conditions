//  Number 1 
      
for (var r = 1; r < 101; r++) {
    if (r % 3 == 0 && r%5==0) console.log("FizzBuzz");
    else if (r % 3 == 0) console.log("Fizz");
    else if (r % 5 == 0) console.log("Buzz");
    
}
// Number 2

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);

// Number 3
for (var x=0; x<=21; x++){
        if (x % 2 === 0){
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
}	

// Number 4

const  num = [-2, 4,-5, 6,0]
let biggest=num[0]
for (var m=0; m<num.length;m++){
 if(num[m]>biggest){
    biggest=num[m]
       
    } 
}
console.log(biggest)


// Number 5


function highest(x,b){ 
if(x>b){
    return x
}
else{
    return b
}
}
console.log(highest(10,40))

// Number 6

function leap_year(year){
    if (year%4 && year%100 &&year%400)
    return year + "is a leap year"

    else{
        return year +"  is not leap year"
    }
     
}
    console.log(leap_year(2000,2021,2022))