//Ex3 (không có log)
// var age = 20;
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// } 

// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };

//Ex4
// console.log(`1. ${age}`); //Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// //nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2
// var age = 20;
// console.log(`2. ${age}`);//20 var age được gọi ở trên log 1

// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";

// console.log(`3. ${calAge(yearOfBirth)}`)// 27
// // Function declaration
// function calAge(year) {
// return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`) //27

// //lỗi từ log 5 comment log 5
// //console.log(`5. ${getFullName(firstName, lastName)}`); 
// // Function expression
// var getFullName = function(firstName, lastName) {
// return `${firstName} ${lastName}`;s
// }
// console.log(`6. ${getFullName(firstName, lastName)}`); // Peter Parker

//Ex5
// console.log(age); // Lỗi vì let age được khai báo ở dưới

// let age = 27;

// console.log(age)// 27

// {
// console.log(firstName); // Lỗi vì let firsrName được khởi tạo ở dưới

// console.log(age);
// console.log(age);

// let firstName = "Peter";
// let lastName = "Parker";
// const job = "Spider man";

// console.log(firstName);// Peter 
// console.log(lastName);//Parker
// console.log(job);//Spider man
// // vì được khởi tạo ở trên log
// }



//Ex6
// a = 2;
// var a;
// console.log(a);
//2
//Giải thích khi khai báo a mà không định nghĩa kiểu dữ liệu, máy sẽ mặc định biến này là global variable
//máy sẽ nhảy qua câu lệnh var a để thực hiện in ra a

//Ex7
// console.log(a);
// var a = 2;
//Trả về là undefined do var nó sẽ hiểu là biến global nhưng chưa đến câu lệnh gán giá trị
// nên sau khi thực hiện câu lệnh in ra nó ms bắt đầu gán giá trị 2

//Ex8
// var a = 10;
// function foo() {
//   var a;
//   console.log(a);//undefined
//   a = 2;
// }
// foo();
//Trả về giá trị undefined vì khi vào function nó cũng có một biến var a mới
//Điều này khiến cho a chưa có giá trị và đc gán undefined sau khi in thì mới được gán a =2

//Ex9
// foo();
// var foo;
// function foo(){
//     console.log(1);//4
// }

// foo = function() {
//     console.log(2);
// } 

//Ex10
// var foo;
// function foo(){
//     console.log(1);
// }
// foo = function() {
//     console.log(2); // 2
// }
// foo();

//Ex11
// function removeEnd(arr,n) {
//     for(let i = 1 ; i <= n ; i++){
//     arr.pop();
//     }
//     return arr;
// }
// console.log(removeEnd([1,2,3,4] ,2));

//Ex12
// function first (arr, n) {
//     let result = [];
//     for (let i = 0;i<=n-1;i=i+1){
//         result.push(arr[i]);
//     }
//     return;
// }


//Ex13
// const users = [
// {
// name: "Angelina Jolie",
// age: 80
// },
// {
// name: "Eric Jones",
// age: 2
// },
// {
// name: "Paris Hilton",
// age: 5
// },
// {
// name: "Kayne West",
// age: 16
// },
// {
// name: "Bob Ziroll",

// age: 100
// }
// ];

// let result = users.map(function(e, i){
//     return {
//         name : `<h1>${e.name}</h1>`,
//         age : `<h2>${e.age}</h2>`,
//     }
// })

// console.log(result);

//Ex14
// var userName3 = users.map(function(user1234){
//     return users.name = user1234.name
// })
// console.log(userName3); 

// Ex15
// function triple(a) { 
//     return a * 3;
//   }
//   let arr = [1, 2, 3, 4, 5];
//   var arr1 = arr.map(function multiply(arr){
//     return triple(arr)
//   })
//  console.log(arr1);


// Ex16
// var numbers = [5, 7, 28, 32, 67, 71, 190];
 
// var new_numbers = numbers.filter(function(item){
//     return (item > 5);
// });
// console.log(new_numbers);

// Ex17
// var members = [
//     { name: 'Lan', gender: 'female' },
//     { name: 'Linh', gender: 'female' },
//     { name: 'Trung', gender: 'male' },
//     { name: 'Peter', gender: 'gay' }
//   ];
// var members1 = members.filter(function(members){
//     return  members.gender == "female";
// });
// console.log(members1);

//Ex18
// const array1 = prompt("Enter your numbers").split(",");

// const found = array1.find(element => element % 2 == 0);

// console.log(found);

//Ex19
// var array = prompt("Enter your numbers").split(",");
// var x = prompt("Enter your Number2")
// findDivisibleNum(array, x)
// function findDivisibleNum(array, x) {
//     var found = array.find(element => element % x == 0);
//     console.log(found);
// }




//Ex22
// let a = Number(prompt("Hãy nhập số 1"));
// let b = Number(prompt("Hãy nhập số 2"));
// function tongSo(arrr) {
//     if (arrr[0] < arrr[1]) {
//       let tongSoTuNhien11 = 0;
//       for (let i = arrr[0]; i <= arrr[1]; i++) {
//         tongSoTuNhien11 = tongSoTuNhien11 + i;
//       }
//       return tongSoTuNhien11;
//     } else if (arrr[1] < arrr[0]) {
//       let tongSoTuNhien11 = 0;
//       for (let i = arrr[1]; i <= arrr[0]; i = i + 1) {
//         tongSoTuNhien11 = tongSoTuNhien11 + i;
//       }
//       return tongSoTuNhien11;
//     } else {
//       return arrr[0] + arrr[1];
//     }
//   }
//   console.log(tongSo([a, b]));




























