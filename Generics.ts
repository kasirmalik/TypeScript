const score:Array<number> =[]
const names:Array<string> =[]



function identity (val:boolean |number): boolean | number{
    return val
}
function identity1 (val:any): any{
    return val
}
function identity2 <Type>(val:Type):Type{
    return val
}
function identity3 <T>(val:T):T{
    return val
}


interface Bootle {
    brand:string;
    type:number
}
identity3<Bootle>({});

// identity2(true)

