const athletes = [
  {
    name: "Usain Bolt",
    sport: "Track and Field",
    hasWorldRecord: true,
    gender: "Male",
    age: 35,
    totalMedals: 8,
    country: "Jamaica",
  },
  {
    name: "Simone Biles",
    sport: "Gymnastics",
    hasWorldRecord: false,
    gender: "Female",
    age: 25,
    totalMedals: 12,
    country: "United States",
  },
  {
    name: "Michael Phelps",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Male",
    age: 37,
    totalMedals: 28,
    country: "United States",
  },
  {
    name: "Katie Ledecky",
    sport: "Swimming",
    hasWorldRecord: true,
    gender: "Female",
    age: 25,
    totalMedals: 10,
    country: "United States",
  },
  {
    name: "Allyson Felix",
    sport: "Track and Field",
    hasWorldRecord: false,
    gender: "Female",
    age: 36,
    totalMedals: 9,
    country: "United States",
  },
  {
    name: "Nadia Comăneci",
    sport: "Gymnastics",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 9,
    country: "Romania",
  },
  {
    name: "Birgit Fischer",
    sport: "Canoeing",
    hasWorldRecord: true,
    gender: "Female",
    age: 60,
    totalMedals: 12,
    country: "Germany",
  },
  {
    name: "Mariana Pajón",
    sport: "Cycling",
    hasWorldRecord: false,
    gender: "Female",
    age: 30,
    totalMedals: 4,
    country: "Colombia",
  },
  {
    name: "Wayne Gretzky",
    sport: "Ice Hockey",
    hasWorldRecord: false,
    gender: "Male",
    age: 61,
    totalMedals: 4,
    country: "Canada",
  },
  {
    name: "Yuna Kim",
    sport: "Figure Skating",
    hasWorldRecord: false,
    gender: "Female",
    age: 31,
    totalMedals: 6,
    country: "South Korea",
  },
];

/////////////////////Task1

// function rekordsmen(arr){

    

// const recordsmans=  arr.filter((item) => item.hasWorldRecord);

//     return recordsmans

// }

// console.log(rekordsmen(athletes));


/////////////////////////////////Task2

// function medalistwomen(arr){

    
//          const recordsmans=  arr.filter((item) =>{

//         return  item.totalMedals >=10 && item.gender === "Female"
           
//          } );

//         //  const mapping = recordsmans.map((item)=>item.name);

//         return recordsmans;





    

// }

// console.log(medalistwomen(athletes));

////////////////////////Task3

// function names (arr){
 
// const mapped = arr.map((item)=>{
//   return item.name
// })
  
//     return mapped;
// }

// console.log(names(athletes));


///////////////////////Task4
//  function names (arr){
// const newobject = arr.map((item)=>({
//   name: item.name,
//   country: item.country

// }))

// return newobject;


// }
  

// console.log(names(athletes));


/////////////Task5

// function summedals (arr){

// const reduce = (arr)
//   return sum;



// }

// console.log(summedals(athletes));
////////////Task7


// function rekordsmen(arr){

//     let recorders = [];

//          const recordsmans=  arr.filter((item) =>{
//             if(item.hasWorldRecord && item.gender=== "Male"){
//                 recorders.push(item)
//             }
//          } );

//     return recorders

// }

// console.log(rekordsmen(athletes));

////////task8

// function amerikanmans(arr){

//     let recorders = [];

//          const recordsmans=  arr.filter((item) =>{
//             if(item.hasWorldRecord && item.country=== "United States"){
//                 recorders.push(item)
//             }
//          } );

//     return recorders

// }

// console.log(amerikanmans(athletes));


/////////Task9


// function avarage (arr){
//   let sum = 0;
//   let years = [];
//   arr.forEach(element => {

//     if(element.gender === "Male"){
//       years.push(element.age);
//       sum+= element.age;
//     }
    
//   });
//   return sum/ years.length;
// }

// console.log(avarage(athletes));








