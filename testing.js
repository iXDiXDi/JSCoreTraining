// let a = 5;
// let b = "SomeString";
// let c = a + b;
// console.log(c);
// const arr = [];
// arr.push(1, 2, 5, 7, 9);
// arr.pop();
// arr.unshift(10);
// arr.shift();
// arr.reverse();
//
//
// console.log(arr);
//
const obj = {};
obj.name = "Max";
obj.num = 0;
obj.arr = [1, "st", true];

obj.name = "Alex";
console.log(obj);


const mass = [
    {name: "Max",
    age: 16,
    },
    {name: "Vas",
    age: 20,
    },
    {name: "Pet",
    age: 35,
    }

]
const func1 = (mass) => {
    return mass.find((item) => {
       return item.age === 20;
    })
}
const result1 = func1(mass)
console.log(result1);

const func2 = (mass) => {
    return mass.filter((item) => {
        return item.age < 30;
    })
}
const result2 = func2(mass)
console.log(result2);

const func3 = (mass) => {
    return mass.forEach((item) => {
        console.log(item.name + " Smith");
    })
}
func3(mass);

const result3 = (mass) => {
    return mass.map((item) => {
        console.log(item.name + " Smith");
    })
}
result3(mass);

const res4 = (item) => {
    if (!item) {
        console.log(item);
    } else {
        console.log("Item not found");
    }
}
res4(Infinity);
