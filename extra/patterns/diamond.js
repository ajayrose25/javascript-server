let n,space=1;
function diamond(n)
{
    space=n-1;
    for(let i=1;i<=n;i++)//loop to move down vertically till the number of rows
    {
        for(let j=1;j<=space;j++)//loop to move horizantally to print spaces
        {
            process.stdout.write(" ");
        }
        space--;
        for(let j=1;j<=(2*i-1);j++)//loop to print star after the relevant spaces are printed
        {
            process.stdout.write("*");;
        }
        process.stdout.write('\n');

    }
    space=1; 
    for(let i=1;i<=n-1;i++)//loop to move down vertically till the number of rows
    {
        for(let j=1;j<=space;j++)//loop to move horizantally to print spaces
        {
            process.stdout.write(" ");
        }
        space++;
        for(let j=1;j<=(2*(n-i)-1);j++)//loop to print star after the relevant spaces are printed
        {
            process.stdout.write("*");
        }
        process.stdout.write('\n');
    }//above 3 loops print a upward pyramid and the lower 3 loops print a downward pyramid
}
let d=process.argv[2];//takes input the number of rows
    if(d>=2 && d<=10){
    diamond(d);
    }
    else{
        process.stdout.write("please enter a number between 2 and 10");
    }
    /*output
       *
      ***    
     *****
      ***
       *
    */
    

