function addTwo(num:number):number {
    // return "jjfk"
    return num + 2
}

function getUpper(val:string) {
    return val.toUpperCase()
};

function signUp(name:string,email:string ,ispaid:boolean) {
    
}
let loginUser = (name:string,email:string ,ispaid:boolean= false)=>{

}
signUp("","",true)
loginUser("h","h")

let sum = addTwo(5)
getUpper("hittesh")

// function getValue(myVal:number):boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s:string):string=>{
    return ""
};

// const heros = ["thor","superman"];
const heros = [1,2,3];
heros.map((hero):string =>{
    return `hero ${hero}`
});

function consoleError(errmsg:string):void {
    console.log(errmsg)
    
}
function handleError(errmsg:string):never {
    throw new Error(errmsg)
    
}

export {}