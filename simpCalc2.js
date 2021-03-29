
let oper;
let num1;
let num2;
let answer;
const operatorArray = ['+', '-', '*', '/'];
let validOperator = false;
const readline = require('readline');

const rdl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


const userOperator = () => {
    rdl.question('\n \n Enter \n +  for addition \n -  for subtraction \n *  for multiplication \n /  for division \n (CTRL + C) to exit \n', operator => {
        operatorArray.forEach(sym => {
            if (sym  === operator) {
                validOperator = true; 
            }
        });

        if (validOperator) {
            oper = operator; 
            firstNum();
        } else {
            console.log('invalid operator');
            userOperator();
        }
       
    }); 
}

const firstNum = () => {
    rdl.question('\n Enter first number :  ', num => {
            num = parseFloat(num);
            if(typeof num === 'number' && !isNaN(num)) {
                num1 = num;
                secondNum();
            } else {
                console.log('Invalid input...');
                firstNum();
            }
        });
}

const secondNum = () => {
    rdl.question('\n Enter second number :  ', num => {
        num = parseFloat(num);

        if(typeof num === 'number' && !isNaN(num) ) {
            num2 = num;
            calculate()
        } else {
            console.log('Invalid input...');
            secondNum();
        }
     });
}

const calculate = () => {
    console.log('\n Your answer is : ')
    if (oper === '+') {
        answer = num1 + num2;
        console.log(`${num1} + ${num2} = ${answer}`);
        userOperator();
    } else if (oper === '-') {
        answer = num1 + num2;
        console.log(`${num1} - ${num2} = ${answer}`);
        userOperator();
    } else if (oper === '*') {
        answer = num1 * num2;
        console.log(`${num1} * ${num2} = ${answer}`);
        userOperator();
    } else if (oper === '/') {
        answer = num1 / num2;
        console.log(`${num1} / ${num2} = ${answer}`);
        userOperator();
    }

}

userOperator();
