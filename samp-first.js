let a = [];
let step=9,n=3;
for(let i=0;i<step;i++)
{
     if(i<n-1)
     {
         a[i]=1;
     }
     else if(i==n-1)
    {
         a[i]= 2;
     }
     else
     {
         a[i]=a[i-1] + a[i-n];

     }
    }
console.log(a);