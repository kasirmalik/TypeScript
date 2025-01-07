
type User ={
    readonly _id :string,
    name : string,
    email:string,
    isactive:boolean
    creditCard?:number
};

type cardNUm = {
    cardnumber : string
}
type cardDate = {
    cardDate : string
}

type cardDetails = cardDate & cardNUm & {
    cvv: number;
}

let myUser:User={
    _id:"23",
    name:'h',
    email:'hah.com',
    isactive:true
}
myUser.email = "hjjggh"












export {}