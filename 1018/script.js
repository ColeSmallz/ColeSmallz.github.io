"use strict";
let k;
k = 100;
{
    let i; //Local variable
    var j;
    j = 10;
    j = 36.6;
    j = `Cole`;
    j = 'Cole';
    i = 120.6;
    j = `Coles weight is ${i}`;

    function f1(p1, p2) {
        return p1 + p2;

    }
    j = f1(2, 3);
    console.log(j);

    let f2 = (p1, p2) => {
        return p1 * p2;
    }
    j = f2(3, 2)
    console.log(j);

    let f3 = (p1) => {
        return p1 * p1 * p1;
    }
    j = f3(3);
    console.log(j);

    let f4 = p1 => p1 * p1 * p1;
    j = f4(2);
    console.log(j);

    // Object
    let stu = {
        name: "Cole",
        age: 23,
        grade: 100.00
    }
    console.log(typeof (stu.name));
    console.log(stu.grade);

    // Array

    let arr1 = [20, 19, 22, 23];
    console.log(arr1);

    for (let l = 0; l < arr1.length; l++) {
        console.log(arr1[l]);
       
    }

   let arr2 = arr1.map((item) => {
        return {age:item};
    })
    console.log(arr2);


}

{
    let i;
    console.log(k);

}

const div1 = document.querySelector(".divStyle");

document.addEventListener("click", function () {
    console.log("d1 clicked");
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("firing");

    document.querySelector("#down").innerHTML = "DOWN";

    document.querySelector("#d1").classList.add("st1");

    document.querySelector("#input1").value = "Cole";
});