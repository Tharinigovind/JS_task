function func(a,tharini)
{
    console.log("hello");

    setTimeout(()=>{tharini()},5000);
    
console.log("world");
}
func(5, function () {
    console.log("HelloWorld");
});

