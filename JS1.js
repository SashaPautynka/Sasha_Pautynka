//TASK №1
function filter(list){
   return list.filter(function(obj){
     return typeof obj === "number"
   })
  } 

  console.log("Task 1:\n\n")
  console.log("filter([1, 2, 's', 'aaa',7, 0, '4', 'lsls']) == ", filter([1, 2, 's', 'aaa',7, 0, '4', 'lsls']))
  console.log("filter(['ccc', 0, 7, '333', 'lll', 4, 10, 0.5]) == ", filter(['ccc', 0, 7, '333', 'lll', 4, 10, 0.5]))
  console.log("filter([' ', 111, 9.33, 'dkdkdk', 'lll', 9, 'ff12', 0]) == ", filter([' ', 111, 9.33, 'dkdkdk', 'lll', 9, 'ff12', 0]))


//TASK №2
  function  FirstNonRepeatingLetter(word) {
    let str
    let empty = 'None --'
    str = word.toLowerCase().split('')
    console.log(str = word.toLowerCase().split('').join(""))
    for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) 
       return word.charAt(i)
    }
    if (word === "") 
       return empty
  return word
  }

  console.log("\nTask 2:\n\n")

  console.log("PauTynKa")
  console.log("unique character", FirstNonRepeatingLetter("PauTynKa"), "\n\n")

  console.log("sAsha")
  console.log("unique character", FirstNonRepeatingLetter("sAsha"), "\n\n")

  console.log("empty string") 
  console.log("unique character", FirstNonRepeatingLetter(""))


//TASK №3
function DigitalRoot(number) {
  let sum = number
  while (sum > 9) {
    sum = 0;
    while (number > 0) {
      sum = sum + number % 10
      number = Math.floor(number / 10)
      }
     number = sum
  }
  return sum
}

console.log("\nTask 3:\n\n")

console.log("547 -->", DigitalRoot(547))
console.log("10009237654 -->", DigitalRoot(10009237654))
console.log("976754567543556 -->", DigitalRoot(976754567543556))


//TASK №4
function NumberOfPairs(arr, target){
  let pairs = 0
  for (let n = 0; n < arr.length; n++){
    for (let m = n + 1; m < arr.length; m++){
      if (arr[n] + arr[m] === target){
        console.log(arr[n], "+", arr[m])
        pairs++
        }
      }
    } 
      return pairs
  }

  console.log("\n\nTask 4:\n\n")

  console.log("[4, 7, 3, 8, 0, 1, 9]\n","target 11\n")
  console.log("pairs = ", NumberOfPairs([4, 7, 3, 8, 0, 1, 9], 11), "\n\n")
 
  console.log("[5, 6, 1, 0, 2, 6, 7, 8, 4, 3]\n","target 12\n")
  console.log("pairs = ", NumberOfPairs([5, 6, 1, 0, 2, 6, 7, 8, 4, 3], 12), "\n\n")

  console.log("[0, 1, 9, 2, 7]\n","target 4\n")
  console.log("pairs = ", NumberOfPairs([0, 1, 9, 2, 7], 4), "\n")


//TASK №5
function FriendList(list){
    let str = function(x){
      return x.replace(/(\w+):(\w+)/,'($2, $1)')
      }
    return list.toUpperCase().split(';').map(str).sort().join("")
}

console.log("\n\nTask 5:\n\n")

console.log("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphel:Corwill;Alfred:Corwill\n\n")
console.log(FriendList("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphel:Corwill;Alfred:Corwill"))
