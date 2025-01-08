interface Database{
    connection:string,
    host:string,
    user:string,
}


function getProperties1<T,U extends Database>(valOne:T,valTwo:U):object{
    return {
        valOne,
        valTwo
    }
}
// getProperties1(3,"7")    

interface Quiz {
    question: string;
    answer: string;
}
interface Course {
    name: string;
    author:string;

}
class Sellable<Z>{
    public cart:Z[]= []
    addToCart(products:Z){
        this.cart.push(products)
    }
}