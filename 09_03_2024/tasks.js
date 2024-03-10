const books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    genre: "Programming",
    pageCount: 176,
    isRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pageCount: 281,
    isRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pageCount: 180,
    isRead: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    pageCount: 328,
    isRead: false,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    pageCount: 310,
    isRead: true,
  },
];

// 1. Fiction tipindeki kitablari consola yazdirin(filter)

// 2. Toplam seyfe sayi 200'den chox olan kitapların sayini tapin.

// Kitapların umumi seyfe sayini hesablayın.

// verilen bir kitabın oxunma veziyyetini yenileyin.

// Fiction genre'ine sahib olan kitablarin ortalama seyfe sayini hesablayin.



////TAsk 1


////////////Task 1
// function fiction (arr) {
// const filtered = arr.filter((item)=>{
//     return item.genre === "Fiction"
// })
// return filtered;

// }


///////Task2

// function seyfesayi(arr){

//     const filtered = arr.filter((item)=>{
//         return item.pageCount > 200
//     })

//     return filtered.length;
// }

// console.log(seyfesayi(books));



/////Task 3 

// function sumsehife(arr){
//     const reduced = arr.reduce((total,item)=>{

//      return   total + item.pageCount

//     },0)

//     return reduced;

    
// }

// console.log(sumsehife(books));


/////Task4


// function updater(bookTitle,arr) {
   
//     let findBook = arr.find(book => book.title === bookTitle);

//     if (findBook) {
       
//         findBook.isRead = !findBook.isRead;
//         console.log(`"${findBook.title}" kitabinin oxunma hali deyisdirildi.`);
//     } else {
//         console.log(`"${bookTitle}" adinda bir kitab movcud deyil.`);
//     }
// }


// updater("1984",books);

// console.log(books);



//////////////////////////////////////////////////////////////


// Fiction olan kitablarin ad ve authordan ibaret teze objectden ibaret arr yaradin

// let books = [
//   {
//     author: "J.K. Rowling",
//     bookName: "Harry Potter and the Sorcerer's Stone",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "George Orwell",
//     bookName: "1984",
//     bestseller: false,
//     genre: "Dystopian",
//   },
//   {
//     author: "J.R.R. Tolkien",
//     bookName: "The Hobbit",
//     bestseller: true,
//     genre: "Fantasy",
//   },
//   {
//     author: "Jane Austen",
//     bookName: "Pride and Prejudice",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Harper Lee",
//     bookName: "To Kill a Mockingbird",
//     bestseller: true,
//     genre: "Fiction",
//   },
//   {
//     author: "F. Scott Fitzgerald",
//     bookName: "The Great Gatsby",
//     bestseller: false,
//     genre: "Classic",
//   },
//   {
//     author: "Aghata Christie",
//     bookName: "Murder on the Orient Express",
//     bestseller: true,
//     genre: "Mystery",
//   },
//   {
//     author: "Ernest Hemingway",
//     bookName: "The Old Man and the Sea",
//     bestseller: false,
//     genre: "Fiction",
//   },
//   {
//     author: "Jules Verne",
//     bookName: "Twenty Thousand Leagues Under the Sea",
//     bestseller: true,
//     genre: "Adventure",
//   },
//   {
//     author: "Arthur Conan Doyle",
//     bookName: "Sherlock Holmes",
//     bestseller: false,
//     genre: "Mystery",
//   },
// ];

// Classic genre'ine sahip olub bestseller olmayan kitaplarin sayini tapin.

// Mystery genre'ine sahib olan kitablarin authorlarini elifba sirasina gore yazin.

// Fiction genre'ine sahib olan kitablarin ortalama seyfe sayini hesablayin.

// author adinda  "J" herfi olan kitabları yazin.




///////////////////Task1
  

// function filteredBooks(arr){

    
// let fictionBooks = arr.filter(item => item.genre === "Fiction").map(item => {
//     return {
//         bookName: item.bookName,
//         author: item.author
//     };
// });

// return fictionBooks;

// }

// console.log(filteredBooks(books))


/////////////////////Task2

// function filtered(arr){
//     let filteredBooks = arr.filter(item => item.genre === "Classic" && item.bestseller === false);

//     return filteredBooks;
// }

// console.log(filtered(books))


/////////////////Task3


// function alphabet (arr){
//      let filtered = arr.filter((item)=> item.genre === "Mystery").map((item)=>{
//         return item.author;
//      }).sort()
//      return filtered
// }

// console.log(alphabet(books));

// function fictionavarage(arr){
//     let fiction = arr.filter((item)=> item.genre ==="Fiction").map((item)=>{
//         return item.pageCount;
//     })
//     let sumpage = 0;
//     for(let i =0;i<fiction.length;i++){
//         sumpage +=fiction[i];
//     }
//     return sumpage / fiction.length;
// }

// console.log(fictionavarage(books));

// function filtered(arr){
//     let filteredBooks = arr.filter((item)=> item.author.includes("J"));
//     return filteredBooks;
// }

// console.log(filtered(books));