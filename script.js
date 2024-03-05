// let num = +prompt("ededi daxil edin")

// if(num === 0){
//    alert("sifir ne cutdur ne tek")
// } else if(num % 2 === 0){
//     alert(" bu eded cutdur")
// } else {
//     alert("eded tekdir")
// }


// let age = +prompt("yasinizi daxil edin");
// let money = +prompt("budcenizi daxil edin");


// if(age >= 18 && money >= 1000 ){
//     alert("Siz suruculuk vesiqesi ala bilersiniz")
// } else {
//     alert("teessuf ki, siz uygun deyilsiniz")
// }


// let exam1 = +prompt("Birinci imtahandan aldigin qiymet");
// let exam2 = +prompt("ikinci imtahandan aldigin qiymet");
// let final = +prompt("final imtahandan aldigin qiymet");



// let avarage = exam1 * 0.3 + exam2*0.3 +final*0.4;


// if(avarage>=51 && avarage<= 80) {
//     alert(`Tebrikler siz ${avarage} (B)`)
// } else if(avarage>= 81 && avarage<= 100){
//     alert(`Tebrikler siz ${avarage}  (A) aldiniz` )
// } else {
//     alert(` Siz ${avarage} alaraq kesildiniz`)
// };



// let road = +prompt("3 yoldan birini secin :1, 2, 3(reqemi daxil edin)");


// if(road%3===0 && road%5===0){
//    alert("Fizzbuz");
// }else if(road%3===0) {
//     alert("Fizz")
// } else if(road%5===0){
//     alert("buzz")
// }else{
//     alert("invalid value")
// };


//Task1
// let age =+prompt("Sagirdin yasini daxil edin");


// if(age > 6 && age <= 10){
//   alert("usaq ibtidai sinife gedir")
// } else if(age>10 && age <= 14 ){

//     alert("Usaq orta mektebde oxuyur")

// } else if(age>14 && age <= 17){
//     alert("Sagird tam orta mektebde oxuyur")
// } else if(age>17 && age <= 21){
//     alert("gencimiz telebedir")
// }else if (age>21){
//     alert("is heyati")
// } else {
//     alert("hele korpedir")
// };


//Task2

// let age = +prompt("Yasinizi daxil edin");


// if(age>18 && age<=70){
//     alert("Siz ses vere bilersiniz");
// }else if(age<18){
//     let ferq= 18 - age;

//     alert(`Siz ${ferq} ilden sonra ses vere bilersiniz`);
// } else if(age>70){
//     let ferq = age - 70;
//     alert(`siz son sesverme haqqinizi ${ferq} il once istifade etmisiniz`)
// }else {
//     alert("duzgun deyer daxil etmemisiniz")
// }

// Task 4

// const meals = +prompt(`1. Menu first : 120$
// Menu second: 250$
//  Menu basic: 350$`);

//  if(meals>=50 && meals<=300){
//     alert(`Tips: ${meals * 0.1}`);
//  }else if(meals>300){
//     alert(`Tips: ${meals*0.15}`);
//  } else {
//     alert("Ele bir menyu movcud deyil")
//  }

//Task5


// let month = +prompt("ayi reqemle (1-12 arasi) daxil edin");

// if(month==1) {
//     alert("Yanvar");
// }else if(month==2) {
//     alert("Fevral");
// }else if(month==3) {
//     alert("Mart");
// }else if(month==4) {
//     alert("Aprel");
// }else if(month==5) {
//     alert("May");
// }else if(month==6) {
//     alert("Iyun");
// }else if(month==7) {
//     alert("Iyul");
// }else if(month==8) {
//     alert("Avqust");
// }else if(month==9) {
//     alert("Sentyabr");
// }else if(month==10) {
//     alert("Oktyabr");
// }else if(month==11) {
//     alert("Noyabr");
// }else if(month==12) {
//     alert("Dekabr");
// }else{
//     alert("Yanlis Deyer")
// }


//Task6




// let month = +prompt("ayi reqemle (1-12 arasi) daxil edin");

// if (month >= 1 && month <= 3) {
//     alert("Qis");
// } else if (month >= 3 && month < 6) {
//     alert("Yaz");
// } else if (month >= 6 && month < 9) {
//     alert("Yay");
// } else if (month >= 9 && month <= 12) {
//     alert("Payiz");
// } else {
//     alert("Yanlis deyer");
// }

//Task7

// let a = +prompt("ededi daxil edin");

// if(a>0){
//     alert("Eded musbetdir")
// } else if(a<0){
//     alert("eded menfidir")
// } else {
//     alert("eded sifira beraberdir")
// }


//Task8

// let en = +prompt("Duzbucaqlinin enini daxil edin");
// let uzunluq = +prompt("duzbucaqlinin uzunlugunu daxil edin")

// if(en>0 && uzunluq>0){
//     alert(`Duzbucaqlinin sahesi : ${en*uzunluq}`)
// }else{
//     alert("yanlis deyer daxil edilib ");
// }


//Task9



// let selsi = +prompt("Temperaturu selsi ile daxil edin");
// let fahrenheit = (selsi* 9/5) +32;

// alert(`${selsi} derece selsi = ${fahrenheit} F`);



//for tasklari

//vurma cedveli

// for (let i = 1; i <= 9; i++) {
   
//     console.log( i + "Vurma Cedveli");

//     for (let j = 1; j <= 9; j++) {
//         let vurma = i * j;
//         console.log(i + " * " + j + " = " + vurma);
//     }

// }

//faktorial


//  let n= +prompt("ededi daxil edin");
//     if (n === 0 || n === 1) {
//         alert("faktoriali 1e bareberdir");
//     } else {
        
//         let faktorial = 1;
//         for (let i = n; i >= 1; i--) {
//             faktorial *= i;
//         }
//         alert(`Ededin faktoriali: ${faktorial}`);
//     }


///Arraydaki ededlerin cemi;


// let myArray = [1,2,3,4,5];
// let sumArray = 0;


// for(i=0; i< myArray.length ;i++){
//      sumArray += myArray[i];


// }
//      alert(`Ededlerin cemi ${sumArray}`)

// ededi orta


// let myArray = [1,2,3,4,5];
// let sumArray = 0;
// let edediOrta =1;


// for(i=0; i< myArray.length ;i++){
//      sumArray += myArray[i]; 

// }

// edediOrta= sumArray/myArray.length
// alert(`Ededlerin cemi:${sumArray} Ededi orta: ${edediOrta}`)


//stringi tersine cevir


// let myString = prompt("Stringi daxil edin");

// let reverseString= "";

// for(let i= myString.length-1; i >=0;i--){
//     reverseString += myString[i];
//     if(reverseString.length < myString.length){
//         continue
//     }

//     console.log(reverseString);
// }



///////////////////////////////05.03.2024
//   let books = [
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
//     author: "Agatha Christie",
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


// function filter(aray){

    


//    for(let i=0; i<aray.length; i++){
    
//     if(aray[i].bestseller){
//         console.log(aray[i].bookName)
//     }
//    }
// }

// filter(books);

// function filter(aray){

    


//    for(let i=0; i<aray.length; i++){
    
//     if(aray[i].genre==="Fantasy"){
//         console.log(aray[i].bookName, aray[i].author )
//     }
//    }
// }

// filter(books);

// function filter(aray){

    


//     for(let i=0; i<aray.length; i++){
     
//      if(aray[i].genre==="Fantasy" && aray[i].bestseller){
//          console.log(aray[i].bookName, aray[i].author )
//      }
//     }
//  }
 
//  filter(books);


// function filter(aray){

    


//     for(let i=0; i<aray.length; i++){
     
//      if(aray[i].bestseller){
//          console.log(aray[i].bookName, aray[i].author )
//      }
//     }
//  }
 
//  filter(books);
 


 




// let movies = [
//   {
//     title: "Inception",
//     director: "Christopher Nolan",
//     genre: "Science Fiction",
//     blockbuster: true,
//   },
//   {
//     title: "The Shawshank Redemption",
//     director: "Frank Darabont",
//     genre: "Drama",
//     blockbuster: false,
//   },
//   {
//     title: "The Dark Knight",
//     director: "Christopher Nolan",
//     genre: "Action",
//     blockbuster: true,
//   },
//   {
//     title: "Forrest Gump",
//     director: "Robert Zemeckis",
//     genre: "Drama",
//     blockbuster: true,
//   },
//   {
//     title: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     genre: "Crime",
//     blockbuster: false,
//   },
//   {
//     title: "The Matrix",
//     director: "Lana and Lilly Wachowski",
//     genre: "Science Fiction",
//     blockbuster: true,
//   },
//   {
//     title: "The Godfather",
//     director: "Francis Ford Coppola",
//     genre: "Crime",
//     blockbuster: false,
//   },
//   {
//     title: "Avatar",
//     director: "James Cameron",
//     genre: "Action",
//     blockbuster: true,
//   },
//   {
//     title: "Titanic",
//     director: "James Cameron",
//     genre: "Romance",
//     blockbuster: true,
//   },
//   {
//     title: "The Silence of the Lambs",
//     director: "Jonathan Demme",
//     genre: "Thriller",
//     blockbuster: false,
//   },
// ];


//  function filter(aray){

    


//     for(let i=0; i<aray.length; i++){
     
//      if(aray[i].blockbuster){
//          console.log(aray[i].title )
//      }
//     }
//  }
//   filter(movies)
    


// function filter(aray){

    


//     for(let i=0; i<aray.length; i++){
     
//      if(aray[i].genre==="Science Fiction"
//      ){
//          console.log(aray[i].title, aray[i].director )
//      }
//     }
//  }
//   filter(movies)

// function filter(aray){
//     for(let i=0; i<aray.length; i++){
     
//      if(aray[i].genre==="Science Fiction" && aray[i].blockbuster
//      ){
//          console.log(aray[i].title, aray[i].director )
//      }
//     }
// }

    
// filter(movies)

 

//////////Dersde yazdigim Funksiyalar

// function parameters(a, b, type){
//    let result;

      
//     if(type=== "perimetr"){
//         result =2*(a+b)
//     }else if(type=== "sahe"){
//         result = a *b;
//     }else{
//         return
//     }

//     return result;




// }

// console.log(parameters(5, 9, "perimetr"));


// function emeliyyat (a , b , simvol){

//     let result;

//     if(simvol === "toplama"){
//         result= a+b;
//     }
//     if(simvol === "cixma"){
//         result= a-b;
//     }
//     if(simvol === "vurma"){
//         result= a*b;
//     }
//     if(simvol === "bolme"){
//         result= a/b;
//     }

//     return result;
// }

// console.log(emeliyyat(5, 9 , "toplama"));


// function muqayise(a, b, c){
// let boyukEded;

// if(a>b && a>c){
//     boyukEded = a;
// }else  if(b>a && b>c){
//     boyukEded = b;
// } if(c>b && c>a){
//     boyukEded =a;
// }

// return boyukEded;
// }

// console.log(muqayise(90,80,70));

/////////////////////// Kutle ceki indeksi
// function bmi (kutle, boy){

//     let a = kutle / boy**2;

//     return a;
// }

// console.log(bmi(55, 1.6));



//////////////////aray toplama


// let arr =[1,2,3,4,5];

// function araysummer(ar){

// let sum = 0;
//    for(let i =0; i<ar.length; i++){

//       sum+=ar[i]
    
//    }
//    return sum;
// }

// console.log(araysummer(arr));

//////////////aray hasili tapma

// let arr =[1,2,3,4,5];

// function arayhasil(ar){

// let hasil = 1;
//    for(let i =0; i<ar.length; i++){

//       hasil*=ar[i]
    
//    }
//    return hasil;
// }

// console.log(arayhasil(arr));

///En boyuk elementi tap



// let arr = [10, 5, 25, 30, 15];

// function findMax(aray) {
//     if (aray.length === 0) {
//         return; 
//     }

//     let bigest = aray[0];

//     for (let i = 1; i < aray.length; i++) {
//         if (aray[i] > bigest) {
//             bigest = aray[i]; 
//         }
//     }

//     return bigest; 
// }

// console.log(findMax(arr));


// let meyveler = ['alma', 'banan', 'armud', 'heyva'];



// function tersCevir(meyve) {
//     let tersMeyveler = [];

//     for (let i = meyve.length-1 ; i >= 0; i--) {
//         tersMeyveler[meyve.length-1 - i] = meyve[i];
//     }

//     return tersMeyveler;
// }

// console.log(tersCevir(meyveler));


// function stringler(str1,str2){
//     return(str1+str2)
// }

// console.log(stringler("salam","necesen"));


// const control = (a,b,c)=>{
//     if(a<b && b<c) {
//         console.log(`${b} ededi ${a} ve ${c} arasinda yerlesir`)
//     } else if(b<a && a<c) {
//         console.log(`${a} ededi ${b} ve ${c} arasinda yerlesir`)
//     } else {
//         console.log(`${c} ededi ${a} ve ${b} arasinda yerlesir`)
//     }
// }

// console.log(control(50,70,60));