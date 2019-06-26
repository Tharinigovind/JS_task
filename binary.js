let arr = [1,2,3,4,5,6,7,8,9,10]
let searchElement=4;
function binarySearch(arr) {
    let low = 0
    let high = arr.length-1
    let mid=Math.floor((low + high) / 2)
  
    while (arr[mid] !== searchElement && low < high) {
      if (searchElement < arr[mid]) {
        high= mid - 1
      } 
      else
       {
        low= mid + 1
       }
   mid =Math.floor((low+ high) / 2)
    }
   if(arr[mid] !== searchElement) 
   {
       return "no elemnt"
    }
   else
   {
        return mid;
    }
  }
  console.log(binarySearch(arr)) 