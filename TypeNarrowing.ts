/**
 * This function demonstrates type narrowing in TypeScript.
 * Type narrowing is the process of refining the type of a variable within a specific scope.
 * TypeScript uses control flow analysis to determine the type of a variable at any given point in the code.
 * 
 * The function takes a parameter `value` which can be of type `string` or `number`.
 * Inside the function, type narrowing is used to handle `value` differently based on its type.
 * 
 * @param value - The input value which can be either a string or a number.
 * @returns A string message indicating the type of the input value.
 */


function detectType(val:number | string ){
    if (typeof val === 'string') {
        return 'The value is a string';
    }else{
        return 'The value is a number';
    }
}

function provideId(id:string | null) {
    if(!id){
        return 'No id provided';
    }
    id.toLocaleLowerCase();
};

// function provideId2(str:string | string[] | null) {
//     if(!str){
//         if(typeof str === 'object'){
//             for(const s of str){
//               console.log(s)
//             }
//         }else if(typeof str === 'string'){
//             console.log(str)
//         }
//     }
// };

// instances and type predictions

function logValue(x:Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString)
    }else{
        console.log(x.toUpperCase)
    }
};


type Fish = {
    swim:()=>void
}
type Bird = {
    fly:()=>void
}

function isFish(pet:Fish | Bird): pet is Fish {
   return (pet as Fish).swim() !== undefined;
}

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return 'Fish food'
    }else{
        pet
        return 'Bird food'
    }
}