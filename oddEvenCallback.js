

let even = function(){
    console.log( "even" );
};
let odd = function(){
    console.log( "odd" );
};
let func = function(a,even, odd ){
    a%2 ?  odd() : even();
};
func(4, even, odd );
