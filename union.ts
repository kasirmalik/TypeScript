let score : number | string = 33

score = 44

score = "jj"


type User ={
    name : string,
    id:number
}
type admin = {
    username : string;
    id:number
}

let kasir: User | admin = {
    name:'hitesh',
    id:77

}

kasir = {
    username:'kas',
    id:55
},

function getDbid(id : number | string) {
   if(typeof id === "string"){
    id.toLocaleLowerCase()
   }
   else{
    id.toFixed()
   }
}
// array

const data:number[] = [1,3,4,5]
const data2:string[] = ["","",""]
const data3:(number | string)[] = [1,2,3,4,5,6,""]


export {}