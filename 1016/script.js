"use strict"; //will have browser check for syntax errors

//3 ways to define variable const, let, var

//Define a function
{
    function f1(n1, n2) {
        let r = n1 * n2;
        return r;
    }

    const result = f1(3, 4);

    console.log(result);


    // Arrow function

    let f2 = (n1,n2) => {
        return n1 - n2;
    }

    const result2 = f2(10, 2);
    console.log(result2);
}

{
    //OBJECTS
    let stu1 = {
        name: 'John',
        age: 20,
        weight: 120.6,
        grade: 90
    };
    console.log(stu1.name)

    //Array

    let arr1 = [2, 3, 4, 5];
    for (let i = 0; i < arr1.length; i++)
    {
        console.log(arr1[i]);
    }

    //Map - creates a new array
    function f3(item)
    {
        return item * item;
    }

    let arr2 = arr1.map(f3);
    console.log(arr2);

    let arr3 = arr2.map((i) => {
        return i * i * i;
    })
    console.log(arr3);
}

//cant define the same variable in the same scope
{
    let i = 1;
    let j = 2;
    var age1;
    age1 = 10;
    console.log(age1);

    // Displays the difference in type coercion between JS and C#
    console.log(i, j)
    console.log(`i + j = ${i + j} `);
    console.log(`${i} ${j}`)
}
{
    
    let i;
    let name1 = `Cole` ; // can also use single quotes, and template literals
    name1=`${name1} age is ${age1}`
    console.log(name1);
}


document.addEventListener("DOMContentLoaded", function () {
    console.log("firing");
    document.querySelector("#d1").style.backgroundColor = "red";
    document.querySelector("#d2").style.backgroundColor = "blue";
});
