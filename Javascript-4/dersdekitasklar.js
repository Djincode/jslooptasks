let books = [
  {
    author: "J.K. Rowling",
    bookName: "Harry Potter and the Sorcerer's Stone",
    bestseller: true,
    genre: "Fantasy",
  },
  {
    author: "George Orwell",
    bookName: "1984",
    bestseller: false,
    genre: "Dystopian",
  },
  {
    author: "J.R.R. Tolkien",
    bookName: "The Hobbit",
    bestseller: true,
    genre: "Fantasy",
  },
  {
    author: "Jane Austen",
    bookName: "Pride and Prejudice",
    bestseller: false,
    genre: "Classic",
  },
  {
    author: "Harper Lee",
    bookName: "To Kill a Mockingbird",
    bestseller: true,
    genre: "Fiction",
  },
  {
    author: "F. Scott Fitzgerald",
    bookName: "The Great Gatsby",
    bestseller: false,
    genre: "Classic",
  },
  {
    author: "Agatha Christie",
    bookName: "Murder on the Orient Express",
    bestseller: true,
    genre: "Mystery",
  },
  {
    author: "Ernest Hemingway",
    bookName: "The Old Man and the Sea",
    bestseller: false,
    genre: "Fiction",
  },
  {
    author: "Jules Verne",
    bookName: "Twenty Thousand Leagues Under the Sea",
    bestseller: true,
    genre: "Adventure",
  },
  {
    author: "Arthur Conan Doyle",
    bookName: "Sherlock Holmes",
    bestseller: false,
    genre: "Mystery",
  },
];



////////////Task 1
// function fiction (arr) {
// const filtered = arr.filter((item)=>{
//     return item.genre === "Fiction"
// })
// return filtered;

// }

// console.log(fiction(books));


///////////Task 2;

// function seyfesayi(arr){

//     const filtered = arr.filter((item)=>{
//         return item.pageCount > 200
//     })

//     return filtered.length;
// }

// console.log(seyfesayi(books));

//////////Task3

// function sumsehife(arr){
//     const reduced = arr.reduce((total,item)=>{

//      return   total + item.pageCount

//     },0)

//     return reduced;

    
// }

// console.log(sumsehife(books));


///////////////Task 4

// function sil(arr){
//     const silinen = arr.splice(3,1);
//     return arr;
// }

// console.log(sil(books));


///////////Task 5


// function genre (arr){

//     let fiction = arr.filter((item)=>{

//         if(item.genre==="Fiction"){
//             return {name:item.bookName,
//             author: item.author
//         }
//         }

//     })
    
//     return fiction;
  
         
// }

// console.log(genre(books));
