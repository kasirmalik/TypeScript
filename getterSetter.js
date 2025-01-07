var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 3;
        this.city = "kashmir";
    }
    ;
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum > 5) {
                throw new Error("hjjhghjh");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return User;
}());
;
var kasirg = new User("", "");
