// console.log("hello world")

//program 1 odd and even number
// const no=7;
// if(no%2==0){
//     console.log("even number")
// }
// else{
//     console.log("odd number")
// }

//program 2: find maximum of two number
// const a=10
// const b=20
// if(a>b){
//     console.log("a is big "+a)
// }
// else{
//     console.log("b is big "+b)
// }



// program 3:check leap year
// const year=2020
// if(year%4==0)
// {
//     console.log(year+" is leap year")
// }
// else{
//     console.log(year+" is not leap year")
// }


// program 4 :sum of nature numbers
// const no=5
// var sum=0
// for( i=1;i<=no;i++)
// {
//     sum=sum+i
// }
// console.log("sum is "+sum)



// program 5: factorial number
// const fact=4
// var total=1
// if(fact<0 || fact==0 || fact==1)
// {
//     console.log("enter proper number")
// }
// else{
// for(i=fact;i>0;i--)
// {
//     total=total*i
// }
// console.log(total)
// }

// program 6: print multipaction table
// const table=3
// let ans=0
// for(i=1;i<=10;i++)
// {
//     ans=table*i
//     console.log(table+" * "+i+" = "+ans)
// }



// // program 7: reverse number
// const num=1234
// let str=num.toString();
// let rev=''
// for(let i=str.length-1;i>=0; i--)
// {
//     rev=rev+str[i]
// }
// console.log(rev)



//program 8 :palindrome check
// let no=121
// let rev= 0
// let org=no
// while(no>0)
// {
//    let digit=no%10;
//    rev=rev*10+digit;
//    no=Math.floor(no/10);
// }
// if(org===rev)
// {
//     console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }



// program 9: check prime Number
// let no=7
// let flag=true

// if(no<=1)
// {
//     console.log("enter proper values")
// }
// else{
//     for(let i=2;i<no;i++)
//     {
//         if(no%i==0)
//         {
//             flag=false
//             break
//         }
//     }
// }
// if(flag)
// {
//     console.log("prime number")
// }
// else{
//     console.log("not prime")
// }


// program 10: count the digit

// let num=12346
// let count =0
// while(num>0)
// {
//     num=Math.floor(num/10)
//     count++
// }
// console.log(count)


// program 11:sum of digit 
// let number=129
// let sum=0
// while(number>0)
// {
//     let digit=number%10
//     sum+=digit
//     number=Math.floor(number/10)
// }
// console.log(sum)

// prgram 12 : armstrong check
// let no=1534
// let sum=0
// let org=no

// let count=0
// let temp=no
// while(temp>0)
// {
//     count++
//     temp=Math.floor(temp/10)
// }

// temp=no
// while(temp>0)
// {
//     let digit=temp%10
//     sum+=Math.pow(digit,count)
//     temp=Math.floor(temp/10)

// }
// if(sum==org)
// {
//     console.log("armstrong")
// }
// else{
//     console.log("not armstrong")
// }
// console.log(count)

// program 13 generate febonaci seriese 
// let n=10
// let a=0
// let b=1
// for (let i=1;i<=10;i++)
// {
//     console.log(a)
//     let temp=a+b
//     a=b;
//     b=temp
// }

// program 14: check vowel or consonant

// let ch='i'
// if(ch>='a' && ch<='z')
// {
//     if(ch=='a'||ch=='e'||ch=='u'||ch=='i'||ch=='o')
//     {
//         console.log("vowel")
//     }
//     else{
//         console.log("not vowel")
//     }
// }

// program 15 : simple calculation
let input ="4 - 2"
let cut=input.split(" ")
let num1=parseFloat(cut[0])
let num2=cut[1]
let num3=parseFloat(cut[2])
let sum=0
if(num2=='+')
{
    sum=num1+num3
}
if(num2=='-')
{
    sum=num1-num3
}
if(num2=='*')
{
    sum=num1*num3
}
if(num2=='/')
{
    sum=num1/num3
}
console.log(sum)