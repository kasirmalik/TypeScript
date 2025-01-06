interface User {
    readonly db:number,
   email:string,
   userId:number,
   googleId?:string,

   startTrail():string,
   getCoupon(couponname:string,value:number):number
};

interface User {
    githubToken:string
}

interface Admin extends User {
    role:"admin" | "ta" | "learner"
}


const kasir:User = {
    email:"kasir",
    githubToken:"github",
    userId:78788,
    db:8999,
    startTrail() {
        return ""
    },
    getCoupon:(name:'kasir',no:777)=>{
        return 889
    }
};


// kasir.db = "jjyygyyg" readonly