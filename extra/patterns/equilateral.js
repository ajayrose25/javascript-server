let n,space=1;
export default function equilateral(n)
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
}   let d=process.argv[2];//loop to print star after the relevant spaces are printed
    if(d>=2 && d<=10){
    
    }
    else{
        process.stdout.write("please enter a number between 2 and 10");
    }
/*
output
  * 
 * *  
* * **/