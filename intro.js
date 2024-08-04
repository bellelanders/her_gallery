console.log("heyy","syed shehanaz","18","btech cse");
//print statement

//variables //primitive datatypes
// let a=10; //number
// var b=20;
// const c=30;
// let x="heyy";
// let y=true;
// let z=undefined;
// let p=BigInt(988798675499999);
// let q=Symbol("hey");
// let r=null;
// console.log(a,b,c);
// console.log(x ,y,z,p,q,r);
// console.log(typeof a,typeof b, typeof c, typeof x, typeof y, typeof z, typeof p, typeof q);
// console.log(a+b+c);


//non primitive datatypes
//objects
// let person={firstname:'She',
//     age:18,
// };
// console.log(person);
// console.log(person.age);
// person.age=100;
// console.log(person.age);
// person.com="microsoft"
// console.log(person);

//arithmetic operator
// let a=4+5;
// let b=5/5;
// let c=4-5;
// let x=4%5;
// let y=4*5;
// let z=2**3;
// // let q=
// // let r=
// console.log(a,b,c,x,y,z)

// assignment operator
// let p=10;
// p+=10;
// console.log(p)
// p-=1;
// console.log(p)
// p/=5;
// console.log(p)
// p%=2;
// console.log(p)

// //comparison operator
// // console.log(3==3); //equality
// console.log(3===3);  //strictly equality
// console.log(3=="3");
// console.log(9>9);
// console.log(9<9);
// console.log(9>=9);
// console.log(9<=9);
// console.log(9!=9);


// //logical
// console.log(9==9 ||9!=0);
// console.log(9==9 &&9!=0);


//implicit and explicit type conversion
// console.log(55+"50"); //implicit or type coersion
// console.log(90*"hey");
// //explicit or type casting
// let a=10;
// let s=String(a);
// console.log(typeof s)


//conditional statements
// let groceryspending=10;
// if(groceryspending>9){
//     let discount=0.10*groceryspending;
//     console.log("discount obtained is 10%",discount,"need to pay:",(groceryspending-discount));}
//     else if(groceryspending>6){
// let discount=0.05*groceryspending;
// console.log("5% discount",(groceryspending-discount));
//     }
//     else {
//         console.log("no discount");
//         console.log();
//     }

//switch statements
// let shippingoption="o-day";
// switch(shippingoption)
// {
// case 'standard':
//     console.log("will be delivered in 5 days");
//     break;
// case 'express':
//     console.log("will delivered in 3 days");
//     break;
// case 'o-day':
//     console.log("will delivered in 1 days");
//     break;
// default:
//     console.log("wrong option");
// }


//loops
// let sum=0;

// let item=[10,100,40,50,60,70,90,99];
// for(let i=0;i<item.length;i++){
    
//     // console.log(item[i]);
//     sum=sum+item[i];
   
// }
// console.log(sum);

// let s=0;
// let i=[10,20,30,40,50,60,70,80,90,100];
// let x=0;
// while(x<i.length)
//     {
//         s+=i[x];
//         x++;
//     }
//    console.log(s);


//functions
// function sum(a, b, c){
    
//     // console.log(a+b+c);
//     return a+b+c;
// }
// // sum(1,2,3);
// let a=sum(1,2,3);  for return assign it to a var
// console.log(a)


// let->block;
// var->functional,global;
// const->block

// {
//     var a=10;
//     const b=9;
// }
// console.log(a);
// console.log(b); //block so cant be accesed outside block

//scoping chain
// a=10;
// function outer(){
//     b=20;
//    function inner(){
//         c=30;
//         console.log(c,b,a);
//     }
//     inner();
// }
// outer();


//array-in js array are heterogeneous in nature
// let a=[1,2,3,4,5,6,7,8,9,10,"hey",BigInt[89898798976],true,{name:'she',age:18}];
// console.log(a);
// for(i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log(a.length);
// console.log(a[5]);

// //push
// a.push("toe");
// //pop
// a.pop();
// //unshift -add in starting
// a.unshift(9);
// // shift -removes ele from starting
// a.shift()
// console.log(a);

// let asliced=a.slice(-5);

// console.log(a.sliced);
//spliced -deletion
// let aspliced=a.splice(0,2,'x');
// console.log(aspliced)

// console.log(a.reverse);

// some and every
// let info=a.some(function(obj){  
//     if(obj.age>10){
//         return true;
//     }
//     else{
//         return false;
//     }})
// console.log(info);



// console.log(a.sort(function(a,b){
// return a-b;
// }))


// delete a[2];
// console.log(a);


//strings
// let s1="she \ is \ beautiful";
// let s2="she";
// let s3="she";
// let s4="she";
// let s5="she";
// for(let i=0;i<s1.length;i++){
//     console.log(s1[i]);
// }
// console.log(s1+s2);
// console.log(s1.toUpperCase());
// console.log(s2.toLowerCase());
// console.log(`${s1} ${s2} ${s3}`)

// let keyword="is"
// console.log(s1.search(keyword));

// let replaceword="beautiful";
// console.log(s1.replace(replaceword,"knowledgeable"))


// let portionstring=s1.slice(0,-3); //slice(startingindex,endingindex)
// let ps=s1.substring(0,5)    //substring(startingindex,endingindex) //substr(startingindex,count)
// console.log(ps+"...continue")



// let stud={
//     name:"she",
//     age:19,
//     rno:1,
//     marks:94,
//     institute:"diet",
//     getdetails:function(){
//         console.log("details");
//     },
//     arr:[90,99,95,"pass","good"]
// };
// // console.log(stud.age);
// // console.log(stud.getdetails());
// // stud.name='he';
// console.log(stud.arr[1]);

// // delete stud.arr;
// // let key="age";
// // console.log(stud.key);
// // console.log(stud[key]);

// for(let obj in stud){
//     console.log(obj+":-"+stud[obj]);
// }

// function addtocart(product){
//     console.log(`product ${product} is added to cart`);
// }
// addtocart("microsoft");




let n=[1,2,3,4,5,6,7,8,9];
n.forEach((n,index)=>{
    console.log(n,index);
})
