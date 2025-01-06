class User {
    public email:string
    name:string
    // it will be acessabile only in this class
    private readonly city : string ="jaipur"
    constructor(email:string,name:string){
        this.email = email;
        this.name = name
    };
}

const hitesh = new User("kasir@g","kasir")
// hitesh.city cannot be aceeseed

class User1{
    public email:string
    name:string
    // it will be acessabile only in this class
    private readonly city : string ="jaipur"
    constructor(
        public email1:string,
        public name1:string,
        // private userid =string
    ){
        
    };
}


export {}