var arr = [50,40,10,30,20]
function insertionSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    let value= arr[i]
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = value
  }
return arr
}
console.log(insertionSort(arr)) 