"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return "jjfk"
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
;
function signUp(name, email, ispaid) {
}
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
signUp("", "", true);
loginUser("h", "h");
var sum = addTwo(5);
getUpper("hittesh");
// function getValue(myVal:number):boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
// const heros = ["thor","superman"];
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
