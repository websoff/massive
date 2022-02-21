// Задачи на работу с массивами в JavaScript
// Работа с concat
// Для решения задач данного блока вам понадобятся следующие методы: concat.
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// -------------------------------------------------------------------------------------------
// Работа с reverse
// Для решения задач данного блока вам понадобятся следующие методы: reverse.
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// let arr = [1,2,3];
// let reversedArr = arr.reverse();
// console.log(reversedArr);
// -------------------------------------------------------------------------------------------


// Работа с push, unshift
// Для решения задач данного блока вам понадобятся следующие методы: push, unshift.
//  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr1 = [1,2,3];
// arr1.push(4,5,6);
// console.log(arr1);
// let arr2 = [1,2,3];
// arr2.unshift(4,5,6);
// console.log(arr2);
// -------------------------------------------------------------------------------------------


// Работа с shift, pop
// Для решения задач данного блока вам понадобятся следующие методы: shift, pop.
//  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
//  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
// let arr1 = ['js', 'css', 'jq'];
// console.log(arr1.shift());
// console.log(arr1);
// let arr2 = ['js', 'css', 'jq'];
// console.log(arr2.pop());
// console.log(arr2);
// -------------------------------------------------------------------------------------------


// Работа с slice
// Для решения задач данного блока вам понадобятся следующие методы: slice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(0,3));

// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(3));
// -------------------------------------------------------------------------------------------


// Работа с splice
// Для решения задач данного блока вам понадобятся следующие методы: splice.
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr1 = [1, 2, 3, 4, 5];
// let arr1Splice = arr1.splice(1,2);
// console.log(arr1);

// let arr2 = [1, 2, 3, 4, 5];
// let arr2Splice = arr2.splice(0,1);
// arr2Splice = arr2.splice(3);
// console.log(arr2);

// let arr3 = [1, 2, 3, 4, 5];
// let arr3Splice = arr3.splice(3,0,'a', 'b', 'c');
// console.log(arr3);

// let arr4 = [1, 2, 3, 4, 5];
// let arr4Splice = arr4.splice(1,0,'a','b');
// arr4Splice = arr4.splice(6,0,'c');
// arr4Splice = arr4.splice(8,0,'e');
// console.log(arr4);


// Работа с sort
// Для решения задач данного блока вам понадобятся следующие методы: sort.
//  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
// let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

// Работа с forEach
// Для решения задач данного блока вам понадобятся следующие методы: forEach
// Дан массив со следующими объектами внутри:{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		
// Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
// let arr = [
//     { firstName: "Test", lastName: "Testovich", age: 42, gender: "male" },
//     { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//     { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//     { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
//   ];


// const arrForEach = arr.forEach((arr) => {
//       console.log(
//         `Пользователь ${arr.firstName} ${arr.lastName} является ${arr.gender} и ему сейчас ${arr.age} лет`
//       );
//     });



// Работа с map
// Для решения задач данного блока вам понадобятся следующие методы: map
// Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение).

// const arrMap = arr.map((elem) => {
//     const obj = {
//       firstName: elem.firstName,
//       lastName: elem.lastName,
//       age: elem.age,
//       gender: elem.gender,
//       telephoneNumber: '066-66-66-666',
//     };
//     console.log(obj) ;
//   });


// Работа с filter
// Для решения задач данного блока вам понадобятся следующие методы: filter
// Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол.
// const arrFilter = [
//     { firstName: "Test", lastName: "Testovich", age: 27, gender: "male" },
//     { firstName: "User", lastName: "Userovich", age: 12, gender: "male" },
//     { firstName: "Test`ya", lastName: "Testovna", age: 16, gender: "female" },
//     { firstName: "Logina", lastName: "Consol`evna", age: 42, gender: "female" },
//     { firstName: "Undefined", lastName: "Undefinovich", age: 99 },
//     { firstName: "Undefined", lastName: "Undefinovich", age: 18, gender: "male" },
//     { firstName: "Null", lastName: "Nullovich", gender: "male" },
//   ];

// const result = arrFilter.filter((elem) => {
//     return elem.age >= 18 && elem.gender === "male";})
//     console.log(result);


// Работа с flat
// Для решения задач данного блока вам понадобятся следующие методы: flat
// Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов.
// let arr = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
// console.log(arr.flat(Infinity));