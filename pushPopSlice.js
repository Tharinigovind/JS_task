var a=["A","B","C","D","E"];
b=a.slice(1,3);
console.log(b,a);

c=a.splice(1,1,"M","F");
 console.log(c,a);

 d=a.pop();
 console.log(d,a);

 e=a.push("M");
 console.log(e,a);

f=a.shift();
console.log(f,a);

g=a.unshift("F","G");
console.log(g,a);
