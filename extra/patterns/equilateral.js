let n,space=1;
function equilateral(n)
{
    space=n-1;
    for(let i=1;i<=n;i++)
    {
        for(let j=1;j<=space;j++)
        {
            process.stdout.write(" ");
        }
        space--;
        for(let j=1;j<=(2*i-1);j++)
        {
            process.stdout.write("*");;
        }
        process.stdout.write('\n');

    }
}   let d=process.argv[2];
    if(d>=2 && d<=10){
    equilateral(d);
    }
    else{
        process.stdout.write("please enter a number between 2 and 10");
    }

    