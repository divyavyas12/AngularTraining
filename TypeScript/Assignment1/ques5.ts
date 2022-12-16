interface Shape {
    shapename:string;
    printname: () => void
}

class Cone implements Shape {
    shapename = "cone";

    raduis:number;
    slantheight:number;
    constructor(radius:number, slantheight:number) {
        this.raduis = radius;
        this.slantheight = slantheight;
    }

    printname= () => {
        console.log(this.shapename);
    };

    area = ():number =>  {
        return 3.14*this.raduis*(this.raduis+this.slantheight);
    }

}

class Sphere implements Shape {
    shapename = "sphere";
    
    radius:number;
    constructor(radius:number) {
        this.radius = radius;
    }

    printname= () => {
        console.log(this.shapename);
    };

    area = ():number =>  {
        return 4*3.14*this.radius*this.radius;
    }

}

class Rectangle implements Shape {

    shapename = "rectangle";

    length:number;
    breadth:number;
    constructor(length:number, breadth:number) {
        this.length = length;
        this.breadth = breadth;
    }

    printname= () => {
        console.log(this.shapename);
    };

    area = ():number =>  {
        return this.length*this.breadth;
    }

}

var cone:Cone = new Cone(5, 12);
cone.printname();
console.log(cone.area())

var sphere:Sphere = new Sphere(5);
sphere.printname();
console.log(sphere.area())

var rectangle:Rectangle = new Rectangle(5, 12);
rectangle.printname();
console.log(rectangle.area())