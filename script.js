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

//      alert(`Ededlerin cemi ${sumArray}`)
// }


// ededi orta


// let myArray = [1,2,3,4,5];
// let sumArray = 0;
// let edediOrta =1;


// for(i=0; i< myArray.length ;i++){
//      sumArray += myArray[i];
//      edediOrta= sumArray/myArray.length

//      alert(`Ededlerin cemi:${sumArray} Ededi orta: ${edediOrta}`)

// }


//stringi tersine cevir


// let myString = "Perviz";

// let reverseString= "";

// for(let i= myString.length-1; i >=0;i--){
//     reverseString += myString[i];

//     console.log(reverseString);
// }
  