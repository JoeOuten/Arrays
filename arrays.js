//In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?
/*
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
arr_sh = shuffle(arr);
console.log(arr_sh);
*/

//Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

/*
function skylineHeights(array){
    temp_array = [...array];
    for (let index = 0; index < array.length; index++) {
        if (temp_array[index] <=0 || temp_array[index+1] < temp_array[index]){
            array.splice(index,1)
        }
    }
    temp = [...new Set(array)];
    
    return temp
}

a = [-1,1,1,7,3];
console.log(skylineHeights(a));
*/
//Create a standalone function that accepts two arrays and combines their values sequentially into a new array. Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], return new array containing [4,10,15,20,30,40,100].
/*
function zipIt(arr1, arr2){
    return arr1.concat(arr2).sort(function(a, b){return a-b})
}
a = [4,15,100];
b = [10,20,30,40];
console.log(zipIt(a,b))
*/
