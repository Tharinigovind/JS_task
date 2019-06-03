// let user = {
//   name: "John",
//   age: 30,
// func(age) {
//     console.log(this.age);
//   }
// };
// user.func(30); 
let user = { name: "Tharini",f:function(){console.log(this.name)} };
let admin= { name: "G" };

function displayName() {
  console.log( this.name );
} 
 user.f();
 admin.f= displayName;
 admin.f(); 
 user.f();
 console.log(user,admin)

