const userCart = [
    { profuctId: 1, productName: 'mobile', price: 1200 },
    { profuctId: 1, productName: 'car', price: 2000 },
    { profuctId: 1, productName: 'bike', price: 1000 },
    { profuctId: 1, productName: 'shirt', price: 200 }
]

const result = userCart.reduce((totalPrice, currentProdct) => {
    return currentProdct.price + totalPrice;
}, 0)
console.log(result);




const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = () => {
    const totalLength = strings.reduce((acc, cur) => {
        return acc + cur.length;
    }, 0)

    return totalLength;
}

console.log(totalLength(strings));
// Output: 30

const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares= (numbers)=>
{
    const result = numbers.reduce((acc,cur)=>
    {
        return acc + cur*cur;
    },0)
    return result;
}

console.log(sumSquares(numbers));
 // Output: 55

const numbers = [1, 2, 3, 4, 5];
// Your code here
const product = (numbers) => {
    const result = numbers.reduce((acc, cur) => {
        return acc * cur;
    })

    return result;
}


console.log(product(numbers));
// Output: 120



const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = (strings) => {
    const result = strings.reduce((acc, cur) => {
        return acc.length > cur.length ? acc : cur
    }
    )
    return result;
}



console.log(longestString(strings));
// Output: 'Haule Haule'

const people = [
    { name: 'Jeena', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Naina', age: 45 }
]
// Your code here

const oldestPersonName = (obj) => {
    const result = obj.reduce((acc, cur) => {
        return acc.age > cur.age ? acc : cur;
    }
    )

    return result;
}

console.log(oldestPersonName(people));
// Output: 'Naina'

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];
// Your code here
const getAverageAge = (obj) => {
    const result = obj.reduce((acc, cur) => {
        return (acc.age + cur.age) / obj.length
    })
}


console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }


const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
];

// Your code here
const findElectronicsProduct = (obj) => {
    return obj.filter((obj) => obj.category == 'electronics')
}


const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct);
  // Output: { name: "iPad", price: 799, category: "electronics" }


const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
];
// Your code here
const filterStudentsByGrade = (obj, g) => {
    return obj.filter(obj => obj.grade > g)
}


const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);
  // Output: [{ name: "Alice", age: 16, grade: 90 }, { name: "Charlie", age: 15, grade: 95 }]

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

// Your code here
const findBookWithMoreThan500Pages = (obj) => {
    return obj.find(obj => obj.pageCount > 500)
}


const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }



