//Program to find even numbers in an array
// var arr1=[22,23,24,25];
// var temp=[];
// for(let i=0;i<arr1.length;i++){
//     if(arr1[i]%2==0){
//         temp.push(arr1[i])
//     }
// }
// console.log(temp)


//Program to return n elements in a given array
// function foo(arr,n){
//     if (n===undefined){
//         return arr[0];
//     }
//     if (n<0){
//         return [];
//     }
//     return arr.slice(-n)
// }
// console.log(foo([1,2,3,4]))
// console.log(foo([1,2,3,4],-2))
// console.log(foo([1,2,3,4,5,6,7,8,9],4))
// console.log(foo([1,2,3,4],2))

function boo(arr2,n){
    let startIndex=arr2.indexOf(n)
    arr2.splice(startIndex,1)
    return arr2;
}
console.log(boo([10,22,33,44,55],22))
console.log(boo([5,6,7,8],7))
console.log(boo([200,400,600,400,800],400))


// let arr3=[11,22,33,44,55];
// arr3.splice(2,1);
// console.log(arr3)