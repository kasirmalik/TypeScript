class User {
    private _courseCount = 3

    readonly city:string = "kashmir"
    constructor(
        public email:string,
        public name:string,
    ) {
        
    };
   get getAppleEmail():string{
    return `apple ${this.email}`
   };

   get courseCount():number{
    return this._courseCount
   };
   set courseCount(courseNum){
    if (courseNum > 5) {
        throw new Error("hjjhghjh")
    }
    this._courseCount = courseNum
   }
};

const kasirg = new User("","")