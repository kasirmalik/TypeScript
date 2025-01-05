// type alias


type User = {
    name:string;
    email:string;
    ispaid:boolean
}

function createUser (user:User):User{
    return {name:"",email:"",ispaid:true}
}

createUser({name:"",email:"",ispaid:true})