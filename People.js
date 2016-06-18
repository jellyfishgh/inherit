function People(name, location, subjects) {
    this.name = name;
    this.location = location;
    this.subjects = subjects;
}

People.prototype.sayHi = function(){
    return `${this.name} lives in ${this.location.city}, ${this.location.province} and learns ${this.subjects.join(', ')}.`;
}

function Animal(name) {
    this.name = name;
    return new Animal("cat");
}

var p0 = new People("jellyfish", {
    "province": "GuangDong",
    "city": "GuangZhou"
}, ["Math", "English"]);
console.log(p0.sayHi());

var p = Object.create(new People());
console.log(p);
People.call(p, "jellyfish", {
    "province": "GuangDong",
    "city": "GuangZhou"
}, ["Math", "English"]);
console.log(p.sayHi());