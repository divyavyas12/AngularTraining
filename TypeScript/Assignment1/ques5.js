var Cone = /** @class */ (function () {
    function Cone(radius, slantheight) {
        var _this = this;
        this.shapename = "cone";
        this.printname = function () {
            console.log(_this.shapename);
        };
        this.area = function () {
            return 3.14 * _this.raduis * (_this.raduis + _this.slantheight);
        };
        this.raduis = radius;
        this.slantheight = slantheight;
    }
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(radius) {
        var _this = this;
        this.shapename = "sphere";
        this.printname = function () {
            console.log(_this.shapename);
        };
        this.area = function () {
            return 4 * 3.14 * _this.radius * _this.radius;
        };
        this.radius = radius;
    }
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, breadth) {
        var _this = this;
        this.shapename = "rectangle";
        this.printname = function () {
            console.log(_this.shapename);
        };
        this.area = function () {
            return _this.length * _this.breadth;
        };
        this.length = length;
        this.breadth = breadth;
    }
    return Rectangle;
}());
var cone = new Cone(5, 12);
cone.printname();
console.log(cone.area());
var sphere = new Sphere(5);
sphere.printname();
console.log(sphere.area());
var rectangle = new Rectangle(5, 12);
rectangle.printname();
console.log(rectangle.area());
