function promise(a) {
    return new Promise(function(resolve,reject)
    {
        if(a%2==0)
        resolve();
        else{
            reject();
    }})
}

promise(4).then(function() {
    console.log("EVEN");
})
.catch(function()
{
    console.log("ODD");
});

