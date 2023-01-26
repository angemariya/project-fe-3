
//1.
const pro = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 13",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    },

    {
        id: 4,
        name: "Samsung Galaxy S5",
        price: 89000,
        category: "smartphone"
    },
    {
        id: 5,
        name: "Nokia X30",
        price: 16000,
        category: "phone"
    },
    {
        id: 6,
        name: "Xiaomi Redmi Note 11 Pro",
        price: 50000,
        category: "mobile"
    }
]

for(let i=0; i<pro.length; i++) {
    console.log(pro[i].name, pro[i].price - pro[i].price*0.1); //вычисляет цену со скидкой 10%
}


//2.

const moreThanPrice = [];
const moreThanPhone = [];

for(let i=0; i<pro.length; i++) {
    if (pro[i].price > 88000) {
        moreThanPrice.push(pro[i].price); //заполняет пустой массив
    }
}

for(let i=0; i<pro.length; i++) {
    if (pro[i].category === "phone") {
        moreThanPhone.push(pro[i].category); //заполняет пустой массив
    }
}

console.log (moreThanPrice, moreThanPhone);

//3.

function maxNumber (a, b) {
    if (a>b) {
        console.log(a);
    }
    else if (a<b) {
        console.log(b);
    }
}

maxNumber(10, 20);
maxNumber(100, 5);

//4.

function askNumber() {
    let num = +prompt("Enter any whole number:");
    if (num%2===0) {
        alert("The number is even");
    }
    else if (num%2===1) {
        alert("The number is odd");
    }
    else {
        alert("Something wrong");
    }
}

window.onload = askNumber(); //запускает функцию при загрузке страницы

//5. 

function power(num1, num2) {
    let result = Math.pow(num1, num2);
    console.log(result);
}

power(10, 2) // 100
power(12, 2) // 144
power(2, 5) // 32
