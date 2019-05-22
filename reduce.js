 let arr=[1,2,3,4];
b=arr.reduce((acc,item)=>{
    return acc+item
},1);
console.log(b);

// let c = arr.reduce((acc,item)=> {
//     acc[item]= item;
//     return acc;},{});
// console.log(c);

let d= arr.map((item)=>{
    return item+2;
})
console.log(d);

