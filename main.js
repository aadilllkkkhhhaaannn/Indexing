const arr = [
  { id: 1, name: "aadil", age: 20 },
  { id: 2, name: "sameer", age: 22 },
  { id: 3, name: "faizan", age: 25 },
];

// indexing
console.log(arr[0]);

// key
const person = { id: 3, name: "faizan", age: 25 };
console.log(person["age"]);

const root = document.getElementById("root");

// plan id
const data = arr
  .map(
    (info) =>
      '<div id="root-' +
      info.id +
      '" ' +
      'class="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition duration-300">' +
      '<div class="text-4xl font-bold text-indigo-600 mb-2">' +
      info.name +
      "</div>" +
      '<div class="text-lg text-gray-600">Age: <span class="font-semibold">' +
      info.age +
      "</span></div>" +
      "</div>"
  )
  .join("");

// key + indexing
// const data = arr
// .map(
//   (info) =>
//     '<div key="' +
//     info.id +
//     '" id="root-' +
//     info.id +
//     '" class="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-105 transform transition duration-300">' +
//     '<div class="text-4xl font-bold text-indigo-600 mb-2">' +
//     info.name +
//     "</div>" +
//     '<div class="text-lg text-gray-600">Age: <span class="font-semibold">' +
//     info.age +
//     "</span></div>" +
//     "</div>"
// )
// .join("");

root.innerHTML = data;
