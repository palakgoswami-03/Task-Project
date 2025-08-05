function calculator(num1,num2,operation){
    let result;

    switch(operation)
    {
        case '+':
            result = num1+num2;
            break;
        case '-':
            result = num1-num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '/':
            if(num2 === 0)
            {
                console.log("invalid user input");
                return ;
            }
            result = num1/num2;
            break;
        default :
            console.log("invalid operation");
            return;
    }
    console.log(`${num1} ${operation} ${num2} = ${result}`);
}

calculator(1,2,"+")