function removeApples (arr) {
let newArray = arr.filter(arr => arr !== 'Apple')
return newArray
}



console.log(removeApples(['Banana', 'Tomato', 'Orange', 'Apple']))