function People(name, location, subjects) {
    this.name = name;
    this.location = location;
    this.subjects = subjects;
}

People.prototype.sayHi = function(){
    return `${this.name} lives in ${this.location.city}, ${this.location.province} and learns ${this.subjects.join(', ')}.`;
};

var p0 = new People("jellyfish", {
    "province": "GuangDong",
    "city": "GuangZhou"
}, ["Math", "English"]);
console.log(p0.sayHi());
console.log(p0.constructor);

// var p = Object.create(new People());
// console.log(p);
var p = {};
People.call(p, "jellyfish", {
    "province": "GuangDong",
    "city": "GuangZhou"
}, ["Math", "English"]);
console.log(People.prototype.sayHi.call(p));
console.log(p.constructor);


function Animal(name) {
    this.name = name;
    return `animal: ${name}`;
}

Animal.prototype.showMe = function(){
    return `${this.constructor} -> ${this.name}`;
};

var a0 = new Animal("cat");
console.log(a0.showMe());
