const fs = require('fs');

const FILE_NAME = "book.txt";
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday'
}

// const bookJson = JSON.stringify(book);
//
// console.log(bookJson);
//
// fs.writeFileSync(FILE_NAME, bookJson);
//
// const dataBuffer = fs.readFileSync(FILE_NAME);
//
// const bookObject = JSON.parse(dataBuffer.toString());
//
// console.log(bookObject.title);
