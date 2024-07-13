// 1.
let string = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest"
const strClear = (str = '') => {
  let resolve = ""
  let text = "Najot ta'lim is the best"
  let arr = text.toLowerCase().split(" ").filter(item => item != '')
  arr.forEach(item => {
    if (str.toLowerCase().includes(item)) {
      resolve += item + ' '
    }
  })
  return resolve[0].toUpperCase() + resolve.slice(1)
}
// console.log(strClear(string));


// 2.
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
let target = 5
const searchTargetArr = (arr, n) => {
  let resolve = false
  arr.forEach(item => {
    if (item.includes(n)) {
      resolve = true
    }
  })
  return resolve
}
// console.log(searchTargetArr(matrix, target));


let twoMtrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
const reversMatrix = (arr = []) => {
  let new_arr = []
  for (let j = 0; j < arr.length; j++) {
    let item_arr = []
    for (let i = arr.length - 1; i >= 0; i--) {
      item_arr.push(arr[i][j])
    }
    new_arr.push(item_arr)
  }
  return new_arr
}
// console.log(reversMatrix(twoMtrix));


// 3.sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping
let twoString = "salom olam hello world"
const stringAndLn = (str = '') => {
  let arr = str.split(" ").filter(item => item != '')
  // pop() oxirgi elimentni olib berarkan
  return arr.pop().length
}
// console.log(stringAndLn(twoString));


// Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. 
let object = { a: 2, b: 5, c: 7 }
const objKeyValueTotal = (obj) => {
  let arr = []
  for (let key in obj) {
    arr.push(`${key}${obj[key]}`)
  }
  return arr
}
// console.log(objKeyValueTotal(object));


nums1 = [1, 2], nums2 = [3, 4, 5]
var findMedianSortedArrays = function (nums1 = [], nums2 = []) {
  let new_arr = nums1.concat(nums2).sort((a, b) => a - b)
  let arrLn = parseInt((new_arr.length - 1) / 2)
  let result
  if (new_arr.length % 2 == 0) {
    result = new_arr[arrLn] + new_arr[arrLn + 1]
    result /= 2
  } else {
    result = new_arr[arrLn]
  }
  return result
}
// console.log(findMedianSortedArrays(nums1, nums2));


// Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yarating
let fruits = ['lemon', 'apple', 'lemon', 'kiwi', 'apple', 'lemon', 'cherry', 'apple']
const manyElements = (arr) => {
  let new_arr = []
  let obj = {}
  for (let i1 in arr) {
    for (let i2 in arr) {
      if (i1 != i2 && arr[i1] == arr[i2] && !new_arr.includes(arr[i2])) {
        new_arr.push(arr[i1])
      }
    }
  }

  return new_arr
}
// console.log(manyElements(fruits));


// Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16 },
];
let delId = 4
const delProductsId = (arr, i) => {
  let new_arr = arr.filter(item => item.id != i)
  return new_arr
}
// console.log(delProductsId(products, delId));


// Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
let manAge = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];
const minAgeMaxAge = (arr) => {
  let new_arr = []
  arr.forEach(item => {
    new_arr.push(item.age)
  })
  return Math.max(...new_arr) - Math.min(...new_arr)
}
// console.log(minAgeMaxAge(manAge));