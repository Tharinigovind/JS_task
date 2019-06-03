// let user = {
//   name: "John",
//   age: 30,
// func(age) {
//     console.log(this.age);
//   }
// };
// user.func(30); 
let user = { name: "Tharini" };
let admin= { name: "G" };

function displayName() {
  console.log( this.name );
} 
user.f = displayName;
 user.f();
 admin.a= displayName;
 admin.a(); 

