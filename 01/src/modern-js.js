import "./style.css";

console.log("are you working?")

const nuffror = [10, 20, 30]
const [ num1, num2] = nuffror
console.log("nuffror", nuffror)



console.log("are you working?")

const numbers = [10, 20, 30]
const alsoNumbers = numbers
alsoNumbers.push(40)
console.log(numbers)
console.log("numbers === alsoNumbers", numbers === alsoNumbers)

const newArray = [...numbers]
newArray.push(50)
console.log("numbers", numbers)
console.log("newArray", newArray)

console.log("numbers === newArray", numbers === newArray)

const color = "blue"
const newColor = color

console.log("color === newColor", color === newColor)

// const fruits = ["apple", "banana","pear"]

// fruits.forEach(fruit => console.log(fruit.length))
// fruits.map(fruit => console.log(fruit.length))

const fruits = ["apple", "banana","pear"]
const nyaFruits = fruits.map(fruit => fruit.toUpperCase())

console.log(fruits) // ['apple', 'banana', 'pear']
console.log(nyaFruits) //['APPLE', 'BANANA', 'PEAR']

const forEachfruits = ["lemon", "banana","pear"]

const forEachnyaFruits = forEachfruits.forEach(forEachfruit => forEachfruit.toUpperCase())
const forEachnyaFruits1 = forEachfruits.forEach(forEachfruit => forEachfruit.length)
console.log("forEachnyaFruits1", forEachnyaFruits1)

console.log("forEachfruits", forEachfruits)
console.log("forEachnyaFruits",forEachnyaFruits)

const cars = ["lorry", "car","ambulance"]

const bigCars = cars.forEach(car => {
    return car.toUpperCase()
})

console.log(bigCars) //undefined


const myArray = [1 , 2 , 3]

const [num11, num22] = myArray

console.log(myArray)

const bla = forEachfruits.forEach(forEachfruit => console.log(forEachfruit.toUpperCase()))
const da = forEachfruits.forEach(forEachfruit => console.log(forEachfruit.length))


