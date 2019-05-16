function func(n,step)
{
    if(step==0)
    return 0;

    else if(step < n)
    
    return 1;
    
    else if(step == n)
    
    return 2;
    
    else
    return func(n,step-1)+func(n,step-n);
}
console.log(func(3,5));
