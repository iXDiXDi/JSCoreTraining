const people = [
    {
        id: 1,
        firstName: `Alex`,
        lastName: `Smith`,
        age: 98,
    },
    {
        id: 2,
        firstName: `Vasya`,
        lastName: `Ivanov`,
        age: 89,
    },
    {
        id: 3,
        firstName: `Ivan`,
        lastName: `Vasin`,
        age: 25,
    },
    {
        id: 4,
        firstName: `Petya`,
        lastName: `Petin`,
        age: 6,
    }
]

const getLastName = () => {
const result = people.find((person) => person.lastName === `Ivanov`);
    console.log(result);
}
    getLastName();
const getSeniors = () => {
    const result = people.filter((person) => person.age > 50);
    console.log(result);
}
    getSeniors();

const getFullName = () =>{
    const result = people.map((person) => {
     return person.firstName + " " + person.lastName;
    })
        console.log(result);
}
    getFullName();

const addAge = (a) => {
const result= people.map((person) =>{
        return person.age + a
    })
    console.log(result);
}
addAge(100)
