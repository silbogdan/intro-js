console.log("\nVariabile:")
// Variabile si tipuri
let numar = 23.521;
const cuvant = "mere";

numar += 10;
console.log(numar);
console.log(typeof numar);

console.log(typeof cuvant);
// cuvant = "ana";

// Explicatie 'var'
console.log("\nExplicatie var:")
if (true) {
    var x = 3;
    let y = "something";
    function foo(continuare) {
        console.log(x + continuare);
        console.log(y + continuare);
    }
    foo(" apelat din functie");
    foo(5)
}

console.log("\nVerificam state-ul:");
console.log(x);
// console.log(y);


// Arrays
console.log('\nArrays:')
let arr1 = [12, "string jmek", 73.2, [1, 2, "haha"]];
console.log(arr1);

// Se poate itera 'ca in C'
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log("");
// Asemanator cu modul anterior de iterat
for (let index in arr1) {
    console.log(arr1[index]);
}

console.log("");
// Putem selecta fiecare 'obiect' in parte - 'of' in loc de 'in'
for (let item of arr1) {
    console.log(item);
}

// Obiecte
console.log("\nObiecte");
let car = {
    brand: "Dacia",
    model: "Logan",
    year: 2007,
    itp: [
        {
            year: 2022,
            passed: true, // Boolean
            expires: "2023-01-13"
        },
        {
            year: 2021,
            passed: false,
            expires: "2022-01-16"
        },
        {
            year: 2020,
            passed: true,
            expires: "2021-01-19"
        }    
    ],
    consumption: 4.3
}
console.log(car);

for (let itpItem of car.itp) {
    if (itpItem.passed === true) {
        console.log(`Car passed in year ${itpItem.year}`);
    }
}

// Functii
console.log("\nFunctii:");

function oldSchoolAdd(x, y) {
    return x + y;
}

const ecmaArrowAdd = (x, y) => {
    return x + y;
}

const veryEcmaArrowAdd = (x, y) => x + y;

console.log(veryEcmaArrowAdd(1, 2));

// Callbacks
const callbackSample = (callback, value) => {
    if (value === true) {
        callback();
    }
}

callbackSample(() => {
    console.log('S-a apelat callback-ul');
}, true);

// Cod apelat din HTML

const handleClick = () => {
    // let inputElement = document.querySelector('input.input-box');
    let inputElement = document.getElementsByClassName('input-box')[0]; 
    let newBox = document.createElement('div');
    newBox.classList.add('green-box');
    newBox.innerText = inputElement.value;
    document.body.appendChild(newBox);
    inputElement.value = "";
}